import { UpdateCurrentTime, ChangeLeavingOfficeTime} from './modules/timer'

const init = ()=> {
  setInterval(() => {
    const updateCurrentTime = new UpdateCurrentTime()
  }, 1000);
  const changeLeavingOfficeTime = new ChangeLeavingOfficeTime()
}

init()
