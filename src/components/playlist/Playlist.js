import React, { useEffect , useState } from 'react'
import axios from "axios"

  
function Playlist(props) {
const [arr,setarr] = useState([])
useEffect(()=>{
  const FetchSong = async () => {
    const {data} =   await axios.get(`https://638319dc6e6c83b7a98bd0f4.mockapi.io/${props.category}`)
    setarr(data)
    console.log(data);

  }

  FetchSong()














































},[])  
  return (
    <div className="playlist">
      <ul className='loi'>
      { arr.map((song,i)=>(
        <li className='songContainer'>

          <div className="tmbn_song">
              <i className="fas fa-play"></i>
            </div>
            <div className="songmeta_playlist">
              <span className="songname">{song.title}</span>
              <span className="songauthors">{song.artistName}</span>
            </div>
            <div className="playlist_btns_group">
              <button className="fav_song playlist_btn">
                <i className="far fa-heart fa-lg"></i>
              </button>
              <button className="options_song playlist_btn">
                <i class="fas fa-ellipsis-v fa-lg"></i>
              </button>
            </div>


         
          
          </li>  
        ))}
</ul>
    </div>
  )
}

export default Playlist