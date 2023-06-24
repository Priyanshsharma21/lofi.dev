"use client"; // This is a client component 👈🏽
import { Navbar,MainSection,Footer } from '../components'
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import { useEffect } from 'react';
import { ProductHunt } from '../components'


var overscrollOptions = {
  enable : true,
  effect : 'glow',
  damping : 0.10,
  maxOverscroll : 150,
  glowColor : '#ff01d3'
}

const options = {
  damping : 0.02,
  plugins : {
    overscroll : {...overscrollOptions}
  }
}



const Home = ()=> {

  useEffect(()=>{
    Scrollbar.use(OverscrollPlugin)
    Scrollbar.init(document.body, options);

    return ()=>{
      if(Scrollbar) Scrollbar.destroy(document.body)
    }
  },[])


  return (
    <main className="flex flex-col bg-black min-h-[100vh] w-full">
      <Navbar />

        <div className="product_hunt_karo mt-10">
          <ProductHunt />
        </div>

          <div className="heading_of_app flex justify-center">
            <div className="relex head_text">relax</div>
            <div className="dot text-center flex items-end ml-3">.</div>
            <div className="chill ml-3 head_text">chill</div>
            <div className="dot text-center flex items-end ml-3">.</div>
            <div className="code ml-3 head_text">code</div>
          </div>

      <MainSection />
      <Footer />
    </main>
  )
}


export default Home