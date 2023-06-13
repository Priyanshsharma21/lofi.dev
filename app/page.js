import Image from 'next/image'
import { Navbar,MainSection,Footer } from '../components'

const Home = ()=> {
  return (
    <main className="flex flex-col bg-black min-h-[100vh] w-full">
      <Navbar />

          <div className="heading_of_app flex justify-center">
            <div className="relex head_text">relex</div>
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