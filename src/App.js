import React from 'react';
import Roomcomp from './components/roomcomp';
import './components/App.css';
const App = ()=>{
  return (
    <div className="outerContainer">
      <div className="innerContainer">
          <div className="Container">
            <Roomcomp/>
          </div>
      </div>
    </div>
  );
}
export default App;
