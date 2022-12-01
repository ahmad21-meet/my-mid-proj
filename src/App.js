import './App.css';
import React,{useState} from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AudioPlayer from './Audio/AudioPlayer';

function App() {
  const [category, setCategory]=useState("")

  return (
   <div className="App">
    <BrowserRouter>
      <Routes>
      <Route path="/" element= {<Home category={category} setCategory={setCategory}  />}> </Route>
      <Route path="/audio"  element= {<AudioPlayer category={category}/>}> </Route>
    </Routes>
    
    </BrowserRouter>

    </div>
  );
}

export default App;
