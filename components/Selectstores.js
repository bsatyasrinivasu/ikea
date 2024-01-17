import { Fragment, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { Dialog, Transition } from '@headlessui/react';
import { X ,MapPin} from 'lucide-react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { IoIosArrowDown } from "react-icons/io";
import { ChevronUpIcon } from '@heroicons/react/20/solid'


export default function SlideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
       <button
        onClick={() => setOpen(!open)}
        className=" font-bold text-sm  hover:underline bg-white"
      >
        {open ? '' : 'Select stores'}
      </button>


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
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition-transform ease-in-out duration-300"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <div className="z-50 bg-white p-4 rounded-lg w-[470px] fixed right-0 top-0 h-full">
                <div className="flex justify-end">
                  <button
                    type="button"
                    className="text-black text-xl  border-white hover:bg-gray-200 border rounded-full w-8 h-8 text-center focus:outline-none px-1 "
                    onClick={() => setOpen(false)}
                  > X
                  </button>
                </div>

                <div className="mt-4 ">
                  <h1 className="px-3 py-5 font-bold text-gray-900 mb-2">Find your preferred store</h1>

                  <div className="col-span-4 relative ">
  <input
    defaultValue ="Search by Zip code or city,state. "
    className="items-center  rounded-full h-[50px] w-[400px]  m-auto px-10  bg-gray-100 text-gray-500 font-semibold"
        /> <a href="http://localhost:3000/Search"><MagnifyingGlassIcon className="h-5 w-5 text-[#0b0707e6] absolute  top-4  left-3" /></a>
                    <a href="http://localhost:3000/Search"></a></div>

                  <div className='flex gap-3 px-[110px] py-[30px] items-center'>
                     <MapPin className='w-4 h-4' />
                    <p className=' text-sm  text-gray-700  font-bold underline '>Use my location</p>

                  </div>


                  <div className='py-[20px] px-4 items-center '>
                     <hr  className=''/>


                    <p className='text-gray-800 font-bold text-lg  py-6'>Other stores</p>




                    <div>
                      <div>
                        <h1 className='font-bold text-gray-700  py-1'>Arcadia</h1>
                        <div className='flex gap-[90px] text-gray-700 text-sm'>
                          <p>400 South Baldwin Ave Suite D5 Arcadia, CA 91007 </p>
                           <a className='underline text-sm  mr-12' href="">Directions</a>
                        </div>
                         <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex">
                                <span className='font-bold underline text-sm text-gray-700'>Open until 9:00pm</span>

                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-`}
                                />
                                  <span className='ml-[100px] font-bold underline text-sm text-gray-700'>Visit studio page</span>
              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-700  ">
                                <div className='flex gap-[150px]'>
                                  <h1 className='font-bold'> Wednesday</h1>
                                  <h1 className='font-bold'> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[170px]'>
                                  <h1> Thursday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[189px]'>
                                  <h1> Friday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[173px]'>
                                  <h1> Saturday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[183px]'>
                                  <h1> Sunday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[177px]'>
                                  <h1> Monday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[178px]'>
                                  <h1> Tuesday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
                        </Disclosure>
                        <hr  className='m-[35px]'/>
                      </div>
                         <div>
                        <h1 className='font-bold text-gray-700  py-1'>Arlington</h1>
                        <div className='flex gap-[90px] text-gray-700 text-sm'>
                          <p>1201 S Hayes St, Pentagon City
Arlington, VA 22202 </p>
                           <a className='underline text-sm  mr-12' href="">Directions</a>
                        </div>
                         <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex">
                                <span className='font-bold underline text-sm text-gray-700'>Open until 9:00pm</span>

                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-`}
                                />
                                  <span className='ml-[100px] font-bold underline text-sm text-gray-700'>Visit studio page</span>
              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-700  ">
                                <div className='flex gap-[150px]'>
                                  <h1 className='font-bold'> Wednesday</h1>
                                  <h1 className='font-bold'> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[170px]'>
                                  <h1> Thursday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[189px]'>
                                  <h1> Friday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[173px]'>
                                  <h1> Saturday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[183px]'>
                                  <h1> Sunday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[177px]'>
                                  <h1> Monday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[178px]'>
                                  <h1> Tuesday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
                        </Disclosure>
                        <hr  className='m-[35px]'/>
                      </div>
                         <div>
                        <h1 className='font-bold text-gray-700  py-1'>Atlanta</h1>
                        <div className='flex gap-[90px] text-gray-700 text-sm'>
                          <p>441 16th Street
Atlanta, GA 30363 </p>
                           <a className='underline text-sm  mr-12' href="">Directions</a>
                        </div>
                         <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex">
                                <span className='font-bold underline text-sm text-gray-700'>Open until 9:00pm</span>

                <ChevronUpIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-`}
                                />
                                  <span className='ml-[100px] font-bold underline text-sm text-gray-700'>Visit studio page</span>
              </Disclosure.Button>
                              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-700  ">
                                <div className='flex gap-[150px]'>
                                  <h1 className='font-bold'> Wednesday</h1>
                                  <h1 className='font-bold'> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[170px]'>
                                  <h1> Thursday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[189px]'>
                                  <h1> Friday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[173px]'>
                                  <h1> Saturday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[183px]'>
                                  <h1> Sunday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[177px]'>
                                  <h1> Monday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                <div className='flex gap-[178px]'>
                                  <h1> Tuesday</h1>
                                  <h1> 10:00am - 9:00pm</h1>
                                </div>
                                </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2">
          {({ open }) => (
            <>
              <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm text-gray-500">
                No.
              </Disclosure.Panel>
            </>
          )}
                        </Disclosure>

                      </div>
                    </div>

                  </div>
                   <button className=" border rounded-full bg-black text-white h-[50px]   text-sm font-bold w-[399px]" >
                    Set my store
                  </button>

                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
}
