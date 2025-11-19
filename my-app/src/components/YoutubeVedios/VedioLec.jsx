import React from 'react'
import YoutubePlayer from './YoutubePlayer'

const VedioLec = () => {

    const vedios_data = [
        {
            id:1,
            src:"https://www.youtube.com/embed/J3BZvLIHm_0",
            title:"YouTube video"
        }
    ]
  return (
    <div>
        <div>
            {vedios_data.map((item , i)=>(
                <div key={i}>
                  <YoutubePlayer src={item.src} title={item.title}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default VedioLec