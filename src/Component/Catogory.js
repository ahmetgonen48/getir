import React from 'react'
import '../catogory.css';
import Catogorys from './Catogorys';

function Catogory() {
  return (
    <div className="py-4">
        <div className="container">
            <h3 className='mb-3 d-flex justify-content-start'>Katogoriler</h3>
            <div className="row">
                <Catogorys title="Yeni Ürünler" src="https://market-product-images-cdn.getirapi.com/category/e8b802e6-7987-486f-bf53-a9720c698a98.jpg"></Catogorys>
                <Catogorys title="Su & İçecek" src="https://market-product-images-cdn.getirapi.com/category/f66f92ea-f680-4dd4-808b-8f8a71709a86.jpeg"></Catogorys>
                <Catogorys title="Meyve & Sebze" src="https://market-product-images-cdn.getirapi.com/category/d43a0396-b588-4666-ac43-af4b3159fee2.jpeg"></Catogorys>
                <Catogorys title="Fırından" src="https://market-product-images-cdn.getirapi.com/category/6814548a-24f2-4ba2-9762-7ca3e96a3d40.jpeg"></Catogorys>
                <Catogorys title="Temel Gıda" src="https://market-product-images-cdn.getirapi.com/category/4c2530e6-d2d2-4a77-96a0-917f16165f57.jpeg"></Catogorys>
                <Catogorys title="Atıştırmalık" src="https://market-product-images-cdn.getirapi.com/category/8393d053-6478-410a-a234-d1a914185b35.jpeg"></Catogorys>
                <Catogorys title="Dondurma" src="https://market-product-images-cdn.getirapi.com/category/0f329100-f339-4503-bf56-095ab4c11c98.jpeg"></Catogorys>
                <Catogorys title="Süt Ürünleri" src="https://market-product-images-cdn.getirapi.com/category/afee33f9-93fe-4b87-8094-6e5c7f13c064.jpeg"></Catogorys>
                <Catogorys title="Kahvaltılık" src="https://market-product-images-cdn.getirapi.com/category/35640646-a603-4b9a-96db-96918025fb61.jpeg"></Catogorys>
                <Catogorys title="Yiyecek" src="https://market-product-images-cdn.getirapi.com/category/b01619f2-e12e-4777-85a2-5727abb62d51.jpeg"></Catogorys>
                
            </div>
        
            <div className="row">
                <Catogorys title="Fit & Form" src="https://market-product-images-cdn.getirapi.com/category/c594be17-998d-475e-91a5-89924798a27d.jpeg"></Catogorys>
                <Catogorys title="Kişisel Bakım" src="https://market-product-images-cdn.getirapi.com/category/d7b76064-6334-43a4-aafe-ace887ec2da6.jpeg"></Catogorys>
                <Catogorys title="Ev Bakım" src="https://market-product-images-cdn.getirapi.com/category/29bcb34e-ae77-46f8-b27c-d36e50275709.jpeg"></Catogorys>
                <Catogorys title="Ev & Yaşam" src="https://market-product-images-cdn.getirapi.com/category/d737c0bd-538c-486c-9485-46aff62856d1.jpeg"></Catogorys>
                <Catogorys title="Teknoloji" src="https://market-product-images-cdn.getirapi.com/category/d6e1fc47-6dbe-4be0-9e21-8b3a3f9cfecd.jpeg"></Catogorys>
                <Catogorys title="Evcil Hayvan" src="https://market-product-images-cdn.getirapi.com/category/907cbf21-00b7-4f94-b257-9fd8b104cf02.jpeg"></Catogorys>
                <Catogorys title="Bebek" src="https://market-product-images-cdn.getirapi.com/category/517efd09-95b6-466a-980e-55db579ebddc.jpeg"></Catogorys>
                <Catogorys title="Cinsel Sağlık" src="https://market-product-images-cdn.getirapi.com/category/34e1cf54-bf96-498b-ba55-680b960cfcfc.jpeg"></Catogorys>
                


                
            </div>
        </div>
    </div>
    
  )
}

export default Catogory