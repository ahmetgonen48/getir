import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
          alt="Third slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;