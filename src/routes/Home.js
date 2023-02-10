import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg2 from "../components/HeroImg2";
import Footer from "../components/Footer";
import Work from "../components/Work";


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg2 />
      <Work/>
      <Footer/>

    </div>
  );
}

export default Home;