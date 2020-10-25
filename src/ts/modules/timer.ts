let leavingOfficeTime: string

export class UpdateCurrentTime {
  private currentDate = new Date()
  private hours = ('0' + this.currentDate.getHours()).slice(-2)
  private minutes = ('0' + this.currentDate.getMinutes()).slice(-2)
  private seconds = ('0' + this.currentDate.getSeconds()).slice(-2)
  private currentTime = `${this.hours}:${this.minutes}:${this.seconds}`
  private domCrrentTime = document.querySelector('#js-currentTime')
  private domYt: HTMLIFrameElement = document.querySelector('#js-ytplayer')
  private domYt2 = this.domYt
  private domBg = document.querySelector('#js-bg')

  constructor() {
    this.setCurrentTime()
    this.judgeTime()
  }

  setCurrentTime() {
    this.domCrrentTime.textContent = this.currentTime
  }

  judgeTime() {
    const movieTime = 92000
    if (this.currentTime === leavingOfficeTime) {
      this.controlVideo('playVideo')
      this.domYt.style.transform = 'scale(2)'
      window.setTimeout(()=> {
        this.domYt.parentNode.removeChild(this.domYt)
        this.domBg.insertBefore(this.domYt2, this.domBg.firstChild);
        this.domYt.style.transform = ''
      }, movieTime)
    }
  }

  controlVideo(action){
    const domPlayerWindow = this.domYt.contentWindow;
    domPlayerWindow.postMessage('{"event":"command","func":"' + action + '","args":""}', '*');
  }
}

export class SetLeavingOfficeTime {
  private inputTime = document.querySelector('#js-inputTime')
  constructor() {
    this.setEvent()
  }
  setEvent() {
    this.inputTime.addEventListener('change', function() {
      leavingOfficeTime = this.value + ':00'
    })
  }
}
