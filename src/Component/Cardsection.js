import React from 'react'
import Cards from './Cards'

function Cardsection() {
  return (
    <div className="container mb-5">
        <div className="row">
          <div className="col-lg-4 text-center shadow p-3 bg-White">
            <Cards imglink="https://getir.com/_next/static/images/intro-in-minutes-a7a9238a73013642a6597c4db06653c1.svg" aciklama="Her siparişinize bir kampanya" yazi="Getir’de vereceğiniz her siparişe uygun bir kampanya bulabilirsiniz."/>
          </div>
          <div className="col-lg-4 text-center shadow p-3 bg-White">
            <Cards imglink="https://getir.com/_next/static/images/intro-market-courier-34cd8b0ca1d547580d506566edfacf8d.svg" aciklama="Dakikalar içinde kapınızda" yazi="Getir’le siparişiniz dakikalar içinde kapınıza gelir."/>

          </div>
          <div className="col-lg-4 text-center shadow p-3 bg-White">
            <Cards imglink="https://getir.com/_next/static/images/intro-discount-6248544cb695830a2e25debd3c0f3d29.svg" aciklama="Binlerce çeşit mutluluk" yazi="Getir’de binlerce çeşit arasından seçiminizi yapabilirsiniz."/>

          </div>
        </div>
      </div>

  )
}

export default Cardsection