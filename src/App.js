import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from './Component/Nav';
import Header from './Component/Header';
import Catogory from './Component/Catogory';
import MobileApp from './Component/MobileApp';
import Cardsection from './Component/Cardsection';
import Footer from './Component/Footer';



function App() {
  

  return (

    <div className="App">
      <Nav></Nav>
      <Header></Header>
      <Catogory></Catogory>
      <div className="black">
      <MobileApp></MobileApp>
      <Cardsection></Cardsection>

      </div>

      <Footer></Footer>
      
    </div>
  );
}

export default App;
