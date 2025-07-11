import Footer from '../../components/Footer/Footer.jsx';
import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import VehicleDetail from '../../components/VehicleDetail/VehicleDetail.jsx';
import CarList from '../../components/CarList/CarList.jsx';
import '../../index.css';
import WhatsappButton from '../../components/WhatsappButton/WhatsappButton.jsx';


function Home() {
  return (
    <div id="root" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header/>
      <main style={{ flex: '1 0 auto' }}>
      <Carousel />
      <CarList />
      <WhatsappButton />
      {/* <VehicleDetail id={1}/> */}
      </main>       
      <Footer />
    </div>    
  )
}

export default Home
