import { Dialog, Transition } from '@headlessui/react';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

export default function SlideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div>
     <button
        onClick={() => setOpen(!open)}
          className=" "
      >
          {open ? '' : 'Menu'}
           <Bars3Icon/>
      </button>
      </div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-40 overflow-y-auto" onClose={() => setOpen(true)}>
          <div className="flex items-center justify-center min-h-screen">
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Panel className="fixed inset-0 bg-black bg-opacity-50" />
            </Transition.Child>

            <Transition.Child
              as={Fragment}
              enter="transition-transform ease-in-out duration-300"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition-transform ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className=" bg-white p-4 rounded-lg w-[470px] fixed top-0 left-0 h-full shadow-lg">
                <div className="">
                  <button
                    type="button"
                    className="text-black text-xl  border-white hover:bg-gray-200 border rounded-full w-8 h-8 text-center focus:outline-none px-1 "
                    onClick={() => setOpen(false)}
                  >
                    X
                  </button>
                </div>
                 <img
    className="h-35 p-0 w-45  px-[90px]  "
    src="https://www.ikea.com/us/en/static/ikea-logo.f7d9229f806b59ec64cb.svg"
            alt="ikea" />

                <div className="mt-4  p-4 m-16 ">

        <ul className='font-bold  text-[35px] hover:underline'><a href=""> Product</a></ul>
        <ul className='font-bold text-[35px] hover:underline py-4'><a href=""> Home Accessories</a></ul>
        <ul className='font-bold  text-[35px] hover:underline'><a href=""> Rooms</a></ul>
        <ul className='font-bold  text-[35px] py-4 hover:underline'><a href=""> Ideas & Inspiration</a></ul>
                  <ul className='font-bold text-[35px] py-4  hover:underline'><a href=""> Desing & Plaining</a></ul>
                  <ul className='font-bold text-[35px] py-4 hover:underline'><a href=""> Deals</a></ul>
                  <ul className='font-bold PY-2  hover:underline'><a href=""> IKEA Family</a></ul>
                  <ul className='font-bold py-2 hover:underline'><a href=""> IKEA for Business</a></ul>
                  <ul className='font-bold py-2 hover:underline'><a href=""> Gift Ideas & Gift Registry</a></ul>
                  <ul className='font-bold py-2 hover:underline'><a href=""> Customer Service</a></ul>



                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
