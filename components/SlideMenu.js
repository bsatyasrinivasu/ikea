import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'lucide-react';
export default function SlideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
       <button
        onClick={() => setOpen(!open)}
        className=" font-bold text-sm  hover:underline bg-white"
      >
        {open ? '' : 'Enter Zip code'}
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
                  <h1 className="px-3 py-5 font-bold text-gray-900 mb-2">Enter ZIP code</h1>
                  <p className='px-3 text-sm  text-gray-700 mb-2'>Enter your ZIP code for stock and delivery information. Your location won't be shared.</p>
                  <div className='py-[20px] px-4 items-center '>

                     <p className='text-sm text-gray-800  '>Zip code</p>

                  <input
                    type="text"
                    className=" border rounded-sm border-black w-[399px] h-[45px] mt-2 "

                    />


                  </div>
                   <button className=" border rounded-full bg-black text-white h-[50px]  w-[399px]" >
                    Update PIN code
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
