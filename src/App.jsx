import { useState } from "react";
import zeroLine from './assets/zeroLine.png'
import fullSpeedLine from './assets/fillSpeedLine.png'
import zeroSpeedLine from './assets/zeroSpeedLine.png'
import zeroNextLine from './assets/zeroNextLine.png'
import engine from './assets/engine.png'
import sitBelt from './assets/seat-belt.png'
import lights from './assets/lights.png'
import './App.css'

function App() {

  const [speedLine , setSpeedline] = useState(0);

  return (
    <>
      <div className="importent-block">
        <div className="block-zeroLine">
          <img src={zeroLine} />
            <svg width="99" height="160" viewBox="0 0 99 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="zeroSpeedLine">
              <path d="M98.4583 2.83014C87.7297 0.197939 76.5696 -0.164962 65.6926 1.76467C54.8156 3.69429 44.4614 7.87393 35.2929 14.036C26.1244 20.198 18.3436 28.2067 12.4488 37.5492C6.5539 46.8917 2.67484 57.3623 1.05993 68.2904C-0.554979 79.2185 0.129856 90.3635 3.07059 101.012C6.01132 111.66 11.1431 121.577 18.1375 130.127C25.1319 138.678 33.8346 145.674 43.6886 150.667C53.5426 155.66 64.3306 158.54 75.362 159.124L76.0612 145.903C66.8704 145.417 57.8824 143.017 49.6726 138.857C41.4628 134.697 34.2121 128.869 28.3848 121.745C22.5575 114.621 18.2819 106.359 15.8319 97.4874C13.3818 88.6159 12.8112 79.3305 14.1567 70.2258C15.5021 61.121 18.734 52.3975 23.6452 44.6139C28.5565 36.8302 35.0391 30.1578 42.6778 25.0239C50.3165 19.89 58.943 16.4078 68.0052 14.8001C77.0673 13.1924 86.3653 13.4948 95.3038 15.6878L98.4583 2.83014Z" fill="white" fillOpacity="0.05"/>
              <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="#FF2F2F"/>
                <stop offset="100%" stop-color="#6A1515"/>
              </linearGradient>
              <circle cx="50" cy="60" r="72" stroke="url(#linear)" strokeWidth="13" fill="none" stroke-dasharray="310" stroke-dashoffset="75" strokeMitterlimit="0" transform="rotate(95) translate(23 -148)" />
            </svg>
            
          <img src={zeroNextLine} className="zeroNextLineOne" alt="" />
          <img src={zeroNextLine} className="zeroNextLineTwo" alt="" />

          <div className="block-indicator-speed">
            <h2 className='numberSpeed'>240</h2>
            <h3 style={{fontSize: '15px', marginTop: '-32px', marginLeft: '27px', color: '#FF2F2F', fontWeight: '200'}}>КМ/H</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
