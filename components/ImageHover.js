// components/ImageHover.js
import { Circle } from 'lucide-react';
import React from 'react';


const ImageHover = () => {
  return (


    <div className="relative group  ">
      <img src="a1.png" alt="Your Image" className=" group-hover:opacity-100 " />
      <div5>
        <div className="absolute top-[95px] left-[140px] p-[20px]  group-hover:block hidden ">
          <div className=' hover:p-[10px]'>
             <Circle  className='h-8 w-8  p-[8px] bg-gray-900 group-hover:opacity-70  opacity-0  absolute left-[20px] bottom-[0px] top-[20px] text-white  fill-white border-gray-600 border rounded-full  '/>
          </div>
        <span className="  h-[110px] w-[130px]  opacity-0 hover:opacity-100 absolute left-[20px] bottom-0 transition-opacity duration-1000 delay-1600 ">
<div className='flex items-center'>
    <div className='p-1 h-[80px] w-[130px] text-black bg-white'>
        <p className='font-semibold text-[13px]'>BLANDA MATT</p>
        <p className='text-[10px]'>serving bowl</p>
        <p className='font-bold text-xl'>$ 24.99</p>
    </div>
              <div className='h-[80px] w-px bg-black '></div>
            </div>
        </span>
      </div>
      </div5>

            <div6>
        <div className="absolute top-[220px] left-[140px] p-[20px]  group-hover:block hidden ">
          <div className=' hover:p-[10px]'>
             <Circle  className='h-8 w-8  p-[8px] bg-gray-900 group-hover:opacity-70  opacity-0  absolute left-[20px] bottom-[0px] top-[20px] text-white  fill-white border-gray-600 border rounded-full  '/>
          </div>
        <span className="  h-[110px] w-[140px]   opacity-0 hover:opacity-100 absolute left-[25px] py-[10px] transition-opacity duration-1000 delay-1600 ">
<div className='flex items-center'>
    <div className='p-1 h-[100px] w-[140px] text-black bg-white'>
        <p className='font-semibold text-[13px]'>HUGA</p>
        <p className='text-[10px]'>Store combination</p>
                <p className='font-bold text-xl'>$ 358.00</p>
                  <p className='text-[10px]'>last chance to buy</p>
    </div>
              <div className='h-[80px] w-px bg-black '></div>
            </div>
        </span>
      </div>
      </div6>


       <div7>
        <div className="absolute top-[200px] left-[10px] p-[20px]  group-hover:block hidden ">
          <div className=' hover:p-[10px]'>
             <Circle  className='h-8 w-8  p-[8px] bg-gray-900 group-hover:opacity-70  opacity-0  absolute left-[20px] bottom-[0px] top-[20px] text-white  fill-white border-gray-600 border rounded-full  '/>
          </div>
        <span className="  h-[110px] w-[130px]  opacity-0 hover:opacity-100 absolute left-[20px] bottom-0  transition-opacity duration-1000 delay-1600 ">
<div className='flex items-center'>
    <div className='p-1 h-[80px] w-[130px] text-black bg-white'>
        <p className='font-semibold text-[13px]'>ODGER</p>
        <p className='text-[10px]'>Chair</p>
                <p className='font-bold text-xl'>$ 125.00</p>

    </div>
              <div className='h-[80px] w-px bg-black '></div>
            </div>
        </span>
      </div>
      </div7>


    </div>

  );
};

export default ImageHover;
