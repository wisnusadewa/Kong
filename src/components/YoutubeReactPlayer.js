import React from 'react'
import ReactPlayer from 'react-player'

const YoutubeReactPlayer = () => {
  return (
    <div>
        <ReactPlayer url="https://www.youtube.com/watch?v=T5GQr0UyW3g&ab_channel=KongYT" controls={true}/>
    </div>
  )
}

export default YoutubeReactPlayer