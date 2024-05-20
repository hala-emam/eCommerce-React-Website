import React from 'react'
import Navbare from './Components/Navbare/Navbare'
import Hero from './Components/Hero/Hero'
import Products from './Components/Products/Products'
import Banner from './Components/Banner/Banner'
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from './Components/TopProducts/TopProducts';
import Subscribe from './Components/Subscribe/Subscribe'
import Testmonial from './Components/Testmonial/Testmonial'
import Footer from './Components/Footer/Footer'
// import TopProducts from "./components/TopProducts/TopProducts";
// import Banner from "./components/Banner/Banner";
// import Subscribe from "./components/Subscribe/Subscribe";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Footer from "./components/Footer/Footer";
import Popup from './Components/Popup/Popup'
function App() {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
       <Navbare handleOrderPopup={handleOrderPopup}/>
       <Hero handleOrderPopup={handleOrderPopup}/>
       <Products />
       <TopProducts handleOrderPopup={handleOrderPopup}/>
       <Banner/>
       <Subscribe/>
       <Products/>
       <Testmonial/>
       <Footer/>
       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  )
}

export default App
