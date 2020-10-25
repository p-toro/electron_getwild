import { UpdateCurrentTime, SetLeavingOfficeTime} from './modules/timer'

const init = ()=> {
  setInterval(() => {
    const updateCurrentTime = new UpdateCurrentTime()
  }, 1000);
  const setTeavingOfficeTime = new SetLeavingOfficeTime()
}

init()
