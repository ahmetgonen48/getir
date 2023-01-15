import React from 'react';
import {BsFacebook} from 'react-icons/bs';
import {BsTwitter} from 'react-icons/bs';
import {FaInstagram} from 'react-icons/fa';
import { BiGlobe } from 'react-icons/bi';


function FooterSocial() {
  return (
    <div className='d-flex'>
        <a className='d-flex me-3 mt-2 social ' href="#"><BsFacebook></BsFacebook></a>
        <a className='d-flex me-3 mt-2 social' href="#"><BsTwitter></BsTwitter></a>
        <a className='d-flex me-3 mt-2 social' href="#"><FaInstagram></FaInstagram></a>
        <a className='btn border' href="#"><BiGlobe></BiGlobe> Türkçe(TR)</a>

    </div>
    
  )
}

export default FooterSocial