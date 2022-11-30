import { useNavigate } from 'react-router-dom'
import React, { useEffect, useContext } from 'react'

import AudioPlayer from '../../Audio/AudioPlayer';
import "./Categories.css"
import happy1 from "../../Aseets/happy1.jpg"
import Epic1 from "../../Aseets/Epic1.webp"
import sad from "../../Aseets/sad.jpg"
import styding from "../../Aseets/styding.jpg"
import chill from "../../Aseets/chill.jfif"
import lock from "../../Aseets/lock.jpg"
import night1 from "../../Aseets/night1.webp"
// import focus from "../../Aseets/focus.jfif"
import ca from "../../Aseets/ca.jpg"
import foc1 from "../../Aseets/foc1.jpg"
const handleClick = event => {
  // 👇️ refers to the image element
  console.log(event.target);
  console.log('Image clicked');
};

export default function Categories({category, setCategory}) {

  const navigate = useNavigate();

const navigateToAudio = (name ) => {
  setCategory(name)
  navigate('/audio');
};
  console.log(category)

  return (
    <div>
<div className="container">
  <div className="row">
     <div className="col">
      <img className='img' src={happy1} onClick={()=> navigateToAudio("Happy" )} 
        alt="Happy mood" />
     <div className='lock1' > Happy</div>
     </div>

     <div className="col">
      <img className='img' src={Epic1} onClick={()=> navigateToAudio("Epic")}  alt="Epic mood" />
      <div className='lock1'> Epic</div>
     </div>

     <div className="col">
      <img className='img' src={sad} onClick={()=> navigateToAudio("Sad")} alt="sad mood" /><div className='lock1'> Sad</div>
     </div>    

     <div className="col"><img className='img' src={chill} onClick={()=> navigateToAudio("Chill")} alt="Chill mood" /><div className='lock1'> Chill</div>
     </div>


  </div>

  <br></br>
  <br></br>
  <br></br>

  <div className="row">
     <div className="col"><img className='img' src={styding }onClick={()=> navigateToAudio("Studying")} alt="studying mood" /><div className='lock1'> studying</div>
     </div>

     <div className="col"><img className='img' src={night1} onClick={()=> navigateToAudio("Night")} alt="night mood" /><div className='lock1'> night</div>
     </div>
     <div className="col"><img className='img' src={foc1} onClick={()=> navigateToAudio("Focus")} alt="focus mood" /><div className='lock1'> focus</div>
     </div>    
     <div className="col"><img className='img' src={lock} onClick={()=> navigateToAudio("Arab")} alt="arabic mood" /><div className='lock1'> Arab Shelat </div>
     </div>
  </div>
</div>


    </div>

  )
}
