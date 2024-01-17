// components/ImageHover.js
import React from 'react';
import { Circle } from 'lucide-react';


const ImageHove = () => {
  return (


    <div className="relative group  ">
      <img src="a2.png" alt="Your Image" className="w-[] h-[] group-hover:opacity-100 " />


      <div5>
        <div className="absolute top-[210px] left-[140px] p-[20px]  group-hover:block hidden ">
          <div className=' hover:p-[10px]'>
             <Circle  className='h-8 w-8  p-[8px] bg-gray-900 group-hover:opacity-70  opacity-0  absolute left-[20px] bottom-[0px] top-[20px] text-white  fill-white border-gray-600 border rounded-full  '/>
          </div>
        <span className=" transition-opacity duration-800 delay-1600 h-[190px] w-[130px]  opacity-0 hover:opacity-100 absolute left-[20px] bottom-0  ">
<div className='flex items-center'>
    <div className='p-1 h-[160px] w-[130px] text-black bg-white'>
        <p className='font-semibold text-[13px]'>BJÖRKSNÄS</p>
        <p className='text-[10px]'>5-drawer chest</p>
                <p className='font-bold text-xl'>$ 197</p>
                <p className='text-[10px]'>Price valid Dec 20, 2023 - Jan 16, 2024 or while supply lasts</p>
    </div>
              <div className='h-[80px] w-px bg-black '></div>
            </div>
        </span>
      </div>
      </div5>
    </div>

  );
};

export default ImageHove;
