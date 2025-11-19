import React from 'react'
import YoutubePlayer from './YoutubePlayer'

const VedioLec = () => {

    const vedios_data = [
        {
            id:1,
            src:"https://www.youtube.com/embed/J3BZvLIHm_0",
            title:"YouTube video",
            heading:"Sagar nital prasaran siddhant",
            by:"Nutan singh rana"
        }
    ]
  return (
    <div className=' p-2 rounded-lg shadow-lg'>
        <div>
            {vedios_data.map((item , i)=>(
                <div key={i}>
                  <YoutubePlayer src={item.src} title={item.title} heading={item.heading} by={item.by}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default VedioLec