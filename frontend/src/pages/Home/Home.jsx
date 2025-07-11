import Header from '../../components/Header/Header.jsx';
import Carousel from '../../components/Carousel/Carousel.jsx';
import '../../index.css';
import Footer from '../../components/Footer/Footer.jsx';

function Home() {
  return (
    <div>
      <Header className='container-xxl d-flex flex-column justify-content-center align-items-center'/>
      <Carousel className='container-xxl d-flex flex-column justify-content-center align-items-center'/>
      <Footer />

    </div>    
  )
}

export default Home
