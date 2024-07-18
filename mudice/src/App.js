
import './App.css';
import LandingDicePg from './componnets/LandingDicePg';
import PlayDicePgs from './componnets/PlayDicePgs';
import { useState } from 'react';
function App() {

  const [startPlay, setstartPlay] = useState(false)



  const Toggleplay = () => {
    // setstartPlay(true)
    setstartPlay((prev) => !prev)
  }



  return (
    <>
      {startPlay ? <PlayDicePgs toggle={Toggleplay} /> : <LandingDicePg toggle={Toggleplay} />}

    </>
  );
}

export default App;
