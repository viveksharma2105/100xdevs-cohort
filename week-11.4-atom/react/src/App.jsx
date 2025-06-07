import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationAtom, totalNotificationCountSelector } from './atom'
import { useMemo } from 'react';

function App() {
  return (
    <RecoilRoot>
      <MainApp />
    </RecoilRoot>
  );
}

function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const NotificationCount = useRecoilValue(notificationAtom);
  const jobsCount = useRecoilValue(jobsAtom);
  const msgCount = useRecoilValue(messagingAtom)
  const totalNotifiCount = useRecoilValue(totalNotificationCountSelector)
  //const [msgCount, setmsgCount] = useRecoilState(messagingAtom);//this is like useState hook 


  ////this is one way of total the notification another is to make Selector
  // const totalNotifiCount = useMemo(()=>{
  //   return networkNotificationCount +NotificationCount + jobsCount + msgCount
  // },[networkNotificationCount, NotificationCount, jobsCount, msgCount])

  return (
    <div>
      <button>Home</button>
      <button>
        My Networks ({networkNotificationCount >= 100 ? '99+' : networkNotificationCount})
      </button>
      <button>Jobs({jobsCount})</button>
      <button>Messaging({msgCount}) </button>
      <button>Notification({NotificationCount}) </button>
      <button>Me({totalNotifiCount}) </button>
      {/* <button onClick={()=>{setmsgCount(c => c + 1)}}>Me</button> */}
    </div>
  );
}//if we useuseSetRecoilState hook then we not need to use useRecoilState because it only need the setter function(eg setmsgcount) .

export default App;
