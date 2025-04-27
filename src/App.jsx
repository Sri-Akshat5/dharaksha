import { useState } from 'react'
import './App.css'
import Navbar from "../src/components/Navbar";
import Home from "./pages/Home/Home";
import About from './pages/Home/About';
import Products from './pages/Products';
import Client from './pages/Client';
import Incubator from './pages/Incubator';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Video from './pages/Video';
import Footer from './components/Footer';
function App() {


  return (
    <>
   <div >
  <Navbar />
</div>

     <div>
     <section id="home">
      <Home/>
      </section>
      <About/>
      <Products/>
      <Client/>
      <Incubator/>
      <section id="team">
      <Team/>
      </section>
      <section id="contact"><Contact/></section>
      
      <Video/>
     </div>
     <div className=''>
      <Footer/>
    </div>
    </>
  )
}

export default App
