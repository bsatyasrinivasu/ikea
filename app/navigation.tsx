'use client';
import { Bars3Icon, CameraIcon, MagnifyingGlassIcon, ShoppingCartIcon, } from '@heroicons/react/24/outline';
import { FaRegHeart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { MdOutlineStore } from "react-icons/md";
import { PiHandbagSimpleBold } from "react-icons/pi";
import { RiMapPin2Line, RiTruckLine } from "react-icons/ri";
import useNavigation from '../hooks/useNavigation';
import SlideMenu from '../components/SlideMenu';
import Sliderbar from '../components/Sliderbar';
import Selectstores from '../components/Selectstores';



export default function Navigation() {
  useNavigation();

  return (
   
    <div className="bg-white grid grid-cols-7 gap-5 p-4 items-center ">

  <div className="flex items-center text-black hover:text-gray-400">
    <div className="flex items-center space-x-2 col-span-3">

          <Sliderbar />
          <a href="/"> <img
    className="h-35 w-48x border border-white col-span-2 px-8  "
    src="https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
            alt="ikea" /></a>


          <link rel="stylesheet" href="http://localhost:3000" />
    </div>
      </div>
  <div className="col-span-4 relative ">
  <input
    defaultValue ="    What are your looking for ? "
    className="items-center font-extralight rounded-full h-[45px] w-[750px]  m-auto px-4  bg-gray-200"
        /> <a href="http://localhost:3000/Search"><MagnifyingGlassIcon className="h-6 w-6 text-[#0b0707e6] absolute  top-3  left-2" /></a>
        <a href="http://localhost:3000/Search"><CameraIcon  className="h-6 w-6 text-[#0b0707e6] absolute  top-3 left-[700px]" /></a></div>
      <div className="flex justify-between text-black col-span-2 text-extrabold">

        <div className='flex ga'>
           <a href="http://localhost:3000" className="hover:text-gray-400 ">
          <FiUser className="h-6 w-6" />
          </a>
          <p className="text-whitehover:text-gray-400">Hej! Log in or sign up</p>
        </div>
    <a href="http://localhost:3000" className="text-black hover:text-gray-400">
          <RiTruckLine className="h-6 w-6" />
      <p className="text-white hover:text-gray-400"></p></a>
    <a href="http://localhost:3000/Support" className="text-black hover:text-gray-400">
          <FaRegHeart className="h-6 w-6" /> </a>
    <a href="http://localhost:3000/Cart" className="text-black hover:text-gray-400">
          <PiHandbagSimpleBold className="h-6 w-6" />
        </a>
      </div>
      <div className=' flex space-x-10 gap-x-2 px-28  text-nowrap '>
        <ul className='font-bold  text-sm hover:underline'><a href=""> Product</a></ul>
        <ul className='font-bold text-sm hover:underline'><a href=""> Home Accessories</a></ul>
        <ul className='font-bold text-sm hover:underline'><a href=""> Rooms</a></ul>
        <ul className='font-bold text-sm hover:underline'><a href=""> Ideas & Inspiration</a></ul>
        <ul className='font-bold text-sm hover:underline'><a href=""> Desing & Plaining</a></ul>
        <ul className='font-bold text-sm hover:underline'><a href=""> Deals</a></ul>
        <div className='flex pl-48 gap-9 items-center'>

          <p className='flex items-center font-bold hover:underline text-sm'> <MdOutlineStore className='h-7 w-7' /><Selectstores />
          </p>
          <div className='flex'>
            <RiMapPin2Line className='h-7 w-7' />
            <div >
              <SlideMenu />



              <p className=' text-[10px]'> To Delivery

              </p>
</div>


          </div>
        </div>
      </div>
    </div>
  );
}
