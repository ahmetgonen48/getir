import React from 'react';
import '../nav.css';
import Logo from '../../src/img/getir.svg';
import { BiGlobe } from 'react-icons/bi';
import {RiUserFill} from 'react-icons/ri';
import {RiUserAddFill} from 'react-icons/ri';


function Nav() {
  return (
    <div className="nav">
        <div className='navbar__ d-flex justify-content-between'>
        <div className="nav__one">
            <a className='' href="#"><img src={Logo} /></a>
            <a className='opa' href="#">getiryemek</a>
            <a className='opa' href="#">getirbüyük</a>
            <a className='opa' href="#">getirsu</a>


        </div>
        <div className="nav__second">
            <a className='opa' href="#"><BiGlobe></BiGlobe> Türkçe(TR)</a>
            <a className='opa' href="#"><RiUserFill></RiUserFill> Giriş yap</a>
            <a className='opa' href="#"><RiUserAddFill></RiUserAddFill> Kayıt Ol</a>

        </div>




    </div>
    </div>
    
  )
}

export default Nav