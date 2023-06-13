import React from 'react'
import { SiNextdotjs,SiTailwindcss } from 'react-icons/si'
import { GrReactjs } from 'react-icons/gr'
import { AiFillHeart,AiOutlineCloudUpload } from 'react-icons/ai'


const Footer = () => {
  return (
    <div className="flex justify-center mt-32 mb-20 items-center">
        <div className="title_foot flex">
            <div className="build_with">Build with</div> 
            <div className="icons flex">
                <SiNextdotjs className="foot_icons text-white mt-1 ml-3"/>
                <SiTailwindcss className="foot_icons ml-3 mt-1 text-blue-500"/>
                <GrReactjs className="foot_icons ml-3 mt-1 text-blue-400"/>
                <AiOutlineCloudUpload className="foot_icons ml-3 mt-1 text-white"/>
            </div>
            <div className="myname flex">
                <AiFillHeart className="text-red-500 flex justify-center items-center text-center mt-1 ml-3"/>
                <div className="name ml-3">Priyansh Sharma</div>
            </div>
        </div>
    </div>
  )
}

export default Footer