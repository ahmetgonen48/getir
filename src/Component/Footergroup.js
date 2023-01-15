import React from 'react'

function Footer__group(props) {
  return (
    <div className="col-lg-3 text-start">
        <h6 className='text-primary'>{props.first}</h6>
                <a className='footer_content mt-2' href="#">{props.one}</a>
                <a className='footer_content mt-2' href="#">{props.two}</a>
                <a className='footer_content mt-2' href="#">{props.three}</a>
                <a className='footer_content mt-2' href="#">{props.four}</a>
                <a className='footer_content mt-2' href="#">{props.five}</a>
    </div>

  )
}

export default Footer__group