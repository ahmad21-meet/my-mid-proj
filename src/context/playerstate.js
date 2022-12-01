

// import React,{useReducer} from "react";
// import playerContext from "./playerContext";
// import playerReducer from "./playerReducer";
// import Playlist from "../components/playlist/Playlist";

// const playerSate = (props) =>{
//     const initalState ={
//     currentSong:0,
//     songslist:props.arr,
//     repeat:false,
//     random:false,
//     playing:false,
//     audio: null,

//     }

//     const[state, dispatch] = useReducer(playerReducer , initalState)

//     return <playerContext.Provider
//     value={{
//         currentSong: state.currentSong,
//         songslist: state.songslist,
//         repeat: state.repeat,
//         random: state.random,
//         playing: state.playing,
//         audio: state.audio,
//     }}>
//         {props.children}
//     </playerContext.Provider>

// }
// export default playerSate