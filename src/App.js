import logo from './logo.svg';
import './App.css';
import FunctionLifeCycle from './components/FunctionLifeCycle';
import TrackMouse from './components/TrackMouse';
import { useState } from 'react';
import ProNavBar from './proComponents/ProNavBar';
import MainComponent from './proComponents/MainComponent';

function App() {
  // const [show , setShow] = useState(true)
  // return (
  //   <div className="App">
  //      {show && <TrackMouse />}
  //      <button onClick={() => setShow(!show)}>Toggle Show</button>
  //    {/* <FunctionLifeCycle /> */}
  //   </div>
  // );

  return (
    <div className='app'>
      <ProNavBar></ProNavBar>
      <MainComponent />
    </div>
  )
}

export default App;
