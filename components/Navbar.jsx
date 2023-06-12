import withContainer from '@/hof/hof'
import React from 'react'
import { TbBrandNeteaseMusic } from 'react-icons/tb'
import { FaLinkedin,FaYoutube,FaInstagram } from 'react-icons/fa'


const Navbar = () => {
  return (
    <div className="w-[100%] h-[60px] flex justify-between items-center navbar">
        <div className="logo flex justify-between items-center ml-5">
            <div className="logo_icon">
                <TbBrandNeteaseMusic className='icon_lofi'/>
            </div>

            <div className="logo_text text-slate-300 text-[1.2rem] ml-2">lofi.dev</div>
        </div>
        <div className="social flex">
            <div className="linkedin">
                <a href="https://www.linkedin.com/in/priyansh-sharma-7b9520223/" target='_blank' rel='noferrer'>
                    <FaLinkedin className='text-white social_link hover:text-blue-500'/>
                </a>
            </div>
            <div className="ig ml-4">
                <a href="https://www.instagram.com/mindbodyps/" target='_blank' rel='noferrer'>
                    <FaYoutube className='text-white social_link hover:text-red-500'/>
                </a>
            </div>
            <div className="youtube ml-4">
                <a href="https://www.youtube.com/channel/UCLcOtm-lXx6m78eKB7DiY3Q" target='_blank' rel='noferrer'>
                    <FaInstagram className='text-white social_link hover:text-pink-500'/>
                </a>
            </div>
        </div>
    </div>
  )
}

export default withContainer(Navbar)
