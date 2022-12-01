import React from 'react'
import Header from "../components/Header"
import './main.css'
import './input.css'
import Action from './../components/playlist/Action';
import Playlist from '../components/playlist/Playlist';


export default function AudioPlayer(props) {
  return (
    <playerSate>
    <div className='audioplayer'>
        <div className='inside-content'>
            <Header/>
            <Action   category={props.category}/>
            <Playlist category={props.category}/>
            


        </div>
    </div>
    </playerSate>
    
  )
}
