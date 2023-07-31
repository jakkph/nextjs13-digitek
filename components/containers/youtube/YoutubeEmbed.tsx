import React from 'react'

interface VideoProps {
  embedId: string
}

const YoutubeEmbed = ({ embedId }: VideoProps) => {
  return (
    <div className='video-container'> 
     <iframe
          width='640'
          height='480'
          src={`https://www.youtube-nocookie.com/embed/${embedId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          className='video'
        ></iframe>
    </div>
  )
}

export default YoutubeEmbed
