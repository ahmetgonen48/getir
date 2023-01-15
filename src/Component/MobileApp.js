import React from 'react'
import '../mobileapp.css'
import MobilAppDownload from './MobilAppDownload'

function MobileApp() {
  return (
    <div className='container mb-5 '>
      <h6 className='text-start'>Kampanyalar</h6>
      
      <div className="d-flex justify-content-between mobileapp">
        <div className="mobile__first ">
          <div className="m-5 text-start">
            
            <h1 className='text-white'>Getir'i indirin!</h1>
            <p className='text-white'>İstediğiniz ürünleri dakikalar içinde kapınıza getirelim.</p>
            <MobilAppDownload></MobilAppDownload>
          
          </div>

        </div>
        <div className="mobile__second">
          <img src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png" alt="" />
        </div>

      </div>
      



    </div>
  )
}

export default MobileApp