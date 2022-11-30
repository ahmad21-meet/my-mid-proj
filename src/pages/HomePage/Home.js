import React,{useState} from 'react'
import Categories from './Categories'
import "./Home.css"
import NavBar from './NavBar'

export default function Home(props) {
  return (
    <div className='container'>
      <NavBar/>
     <section className='sec'>

    <h1 className='title '> Browse our music by mood</h1>
    <hr></hr>
<p className='p1'>
Relaxing, happy, epic, or mysterious. Which mood is perfect to soundtrack your content? 
You’ll find it by exploring our diverse, high-quality, royalty-free mood catalog.
</p>
<p className='p2'>
What you wait for !!!!!!
</p>

{/* <button> Explore now!!!!!!!!!!!!!</button> */}
      </section> 
      <hr></hr>

      <div className='main'>
        <br/>
        <br/>
      <Categories category={props.category} setCategory={props.setCategory}/>
              </div>


       
    </div>
  )
}
