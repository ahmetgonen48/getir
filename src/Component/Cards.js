import React from 'react'

function Cards(props) {
  return (
    <div className="myCard">
      <img className='mt-5 card__img' src={props.imglink} alt="" />
      <h5 className='mt-5'>{props.aciklama}</h5>
      <p className='mt-3'>{props.yazi}</p>
    </div>

  )
}

export default Cards
