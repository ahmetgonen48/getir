import React from 'react'
import '../catogorys.css'

function Catogorys(props) {
  return (
    <div className="grid-10 catogorys">
        <img className='img' src={props.src} alt="" />
        <p className='mt-3'>{props.title}</p>
    </div>
  )
}

export default Catogorys