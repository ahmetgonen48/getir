import React from 'react';
import '../footer.css';
import Footergroup from './Footergroup';
import FooterSocial from './FooterSocial';
import MobilAppDownload from './MobilAppDownload';



function Footer() {
  return (
    <div className='footer mt-5'>
      <div className="container">
        <div className="row">
          <div className="col-lg-2 text-start">
            <h6 className='text-primary'>Getiri indirin!</h6>
                <MobilAppDownload></MobilAppDownload>
          </div>
            <Footergroup first="Getiri keşvedin" one="Hakkımızda" two="Kariyer" three="Teknoloji Kariyerleri" four="İletişim" five="Sosyal Sorumluluık Projeleri"></Footergroup>
            <Footergroup first="Getiri keşvedin" one="Hakkımızda" two="Kariyer" three="Teknoloji Kariyerleri" four="İletişim" five="Sosyal Sorumluluık Projeleri"></Footergroup>
            <Footergroup first="Getiri keşvedin" one="Hakkımızda" two="Kariyer" three="Teknoloji Kariyerleri" four="İletişim" five="Sosyal Sorumluluık Projeleri"></Footergroup>
          <div className="col-lg-1 ">
            <a href="#"><img className='footer__img p-2 shadow' src="	https://cdn.getir.com/getirweb-images/common/etbis.png" alt="" /></a>
          </div>
          
            
          
        </div>
        <hr />
        <div className="footer__last d-flex justify-content-between">
          <div className="footer__getir d-flex ">
            <p className=''>© 2023 Getir</p>
            <a className='ms-5 footer__info' href="#">Bilgi Toplumu Hizmetleri</a>

          </div>
            <FooterSocial></FooterSocial>

        </div>
        
        
      </div>

    </div>
  )
}

export default Footer