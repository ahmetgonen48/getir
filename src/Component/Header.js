import React from 'react'
import Slider from './Slider'
import '../header.css'

function header() {
  
  return (
    <div className='header__slider'>
      <Slider ></Slider>
      <div className="container">
        <div className="header__getir">
          <div className="header__first ms-4">
            <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" alt="" />
            <h3 className='text-white mt-4 getir__font'>Dakikalar içinde <br /> kapınızda <br /></h3>
          </div>
          <div className="header__second">
            <h4 className='py-2 px-5'>Giriş yap veya kayıt ol</h4>
            <div>
              <div>
                <input className='header__phone' placeholder='Telefon numaranızı girin' type="text" />
              </div>
                <button className='btn btn-warning mt-4 w-100 header__btn'>Telefon numarası ile devam et</button>
            </div>

    
          </div>
        </div>


      </div>
      
      
    </div>
    
  )
}

export default header