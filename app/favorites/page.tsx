"use client"
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/20/solid';
import { ArrowRightCircleIcon, HeartIcon } from '@heroicons/react/24/outline';
import { Lock, Minus, Plus, ShoppingBasket } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { AiOutlineDown } from "react-icons/ai";
import { BiDirections } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { FiChevronUp } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdOutlineDiscount } from "react-icons/md";
import { RiTruckLine } from "react-icons/ri";


export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [addedProduct, setAddedProduct] = useState(null);

  const decreaseQuantity = (productId) => {
    const updatedCart = cartItems.map((item) =>
      item.id === productId && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );
    setCartItems(updatedCart);
  };


  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCartItems(updatedCart);
    } else {
      const newItem = { ...product, quantity: 1 };
      setCartItems([...cartItems, newItem]);
    }

    setAddedProduct(product);
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      setAddedProduct(null);
    }, 3000);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/product');
        const data = await res.json();
        if (data && data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Invalid data format received from API');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {showPopup && (
        <div className="bg-green-500 text-white px-4 py-2 rounded-md absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          {addedProduct && `${addedProduct.title} is added to cart!`}
        </div>
      )}
      <h1 className="font-bold text-4xl text-side mb-4 ">Shopping bag</h1>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-2/3">
          {cartItems.length === 0 ? (
            <div className="flex justify-center">
              <img
                className="object-cover object-center col-span-1"
                src="emp.jpg"
                alt="Your cart is empty."
              />
            </div>
          ) : (




              <ul className="divide-y divide-white py-4">
                <a className='text-gray-700 text-sm underline' href="https://www.ikea.com/us/en/shoppingcart/#">Book TaskRabbit assembly</a>
                <p className='font-bold p-5 text-gray-800 py-8'>How would you like to receive your order?</p>

                  <div className='flex gap-3'><a className='border-solid border-2  border-gray-200  hover:border-black   text-black py-8 w-[340px] h-[80px]rounded-md  flex  gap-3 px-7 font-semibold bg-center ' href="" ><RiTruckLine className="h-6 w-6" />  Delivey  </a>
                  <a className='border-solid border-2  border-gray-200  hover:border-black   text-black py-8 w-[340px] h-[80px]rounded-md  flex  gap-3 px-7 font-semibold bg-center  ' href="" >
                    <div>  <BiDirections className="h-6 w-6 flex-wrap " /></div>

                    Pick up  </a>
                    </div>
                {cartItems.map((item) => (

                  <li key={item.id} className="py-4 flex items-center space-x-4">

                    <div className="flex items-center space-x-4">
                    <img
                      className="justify-center max-w-300 max-h-[250px] min-w-[200px] min-h-600"
                      src={item.thumbnail}
                      width="100"
                      height="100"
                      alt={item.title}
                    />
                      <div className=''>
                    </div>
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p>{item.description}</p>
                        <p>Price: {item.price}/-</p>



                        <div className='flex items-center'>

                          <div className='flex gap-7  items-center border rounded-full h-[40px] w-[117px]'>
                            <button
              className="text-black "
              onClick={() => decreaseQuantity(item.id)}
                            > <Minus className='h-5 w-5 border-white hover:bg-slate-300 border rounded-full '/></button>

                          <span >{item.quantity}</span>


                          <button className="text-black "
              onClick={() => addToCart(item)}
            >
              <Plus className='h-5 w-5 border-white hover:bg-slate-300 border rounded-full ' />
                            </button>
                             </div>

<button  className=" text-gray-600 px-2 py-1 text-sm hover:text-black"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove product
                          </button>

                          <a className= ' text-gray-600 px-2 py-1  text-sm hover:text-black'href="">Save for favorites</a>

                          </div>

                    </div>
                  </div>
                </li>
              ))}
              </ul>

          )}

          {cartItems.length > 0 && (
            <div className="mt-4">
              <hr className="my-2" />
            <Link href="/checkout">


              </Link>
            </div>
          )}
        </div>
        {cartItems.length > 0 && (
          <div className="lg:w-1/3 lg:ml-8">
            <div className=" ">
              <h2 className="font-bold text-sm text-xl text-gray-600 mb-4">Order Summary</h2>
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between mb-2">
                  <p className="font-semibold text-gray-600">{item.title}</p>
                  <p className=''>{item.price}/-</p>
                </div>

              ))}
              <div className="">
                <p className="font-semibold text-gray-600">Delivery</p>
                <p className="font-semibold text-sm text-gray-600"> Excluding delivery</p>

                <hr className='h-px my-4  border-0  dark:bg-black  ' />
                <div className='flex gap-52'>

                  <p className=" text-gray-800  font-semibold ">Total:(Excl. tax)</p>
                <span className='font-extrabold text-xl text-gray-900'>{calculateTotal()}/-</span>
                </div>
                          <hr className='my-7 '/>
                <div><div className="items-center">

      <div className='flex gap-' >
        <Disclosure>
          {({ open }) => (
            <>
                          <Disclosure.Button className="flex gap-4 font-bold items-center text-sm">

                            < MdOutlineDiscount  className='flex'/>
                  <h1 className=''>Have a Discount code ?</h1>
                                <IoIosArrowDown
                  className={`${open ? 'rotate-180 transform' : ''}  `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500 text-sm py-5">You can only use one coupon/voucher code per order. Enter the code without any space between letters.
                    Do you have a gift card? You can exchange these later in the process.
                    <div>
                      <input
                    type="text"
                    placeholder="Enter discount code"
                     className="border border-gray-300 px-14 py-2 rounded-md mr-2 ml-2 "
                  />

                  <button
                   className=" text-black px-4 py-2 border-solid border-2 border-gray-900  hover:border-black  rounded-full font-bold  "
                  >
                    Apply
                  </button>

                    </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </div></div>
    <p className='font-bold text-sm text-gray-700 underline py-11'>
                  As low as $107/mo for 6 months using the IKEA Projekt Credit Card**. Details
                </p>


                              <div className='flex justify-center'>
  <button className=" border-solid bg-[#0058a3] hover:bg-[#003c70] border-gray-200 hover:border-black text-white px-7 py-4 rounded-md flex items-center space-x-32 w-[490px] h-[110px]">
    <p className='font-bold'>Continue to Checkout</p>
    <ArrowRightCircleIcon className='h-11 w-11 text-gray-900 fill-white ' />
                  </button>

                </div>
                <a href="">
                  <p className='underline font-semibold py-7 flex gap-2 items-center'>  < HeartIcon className='h-5 w-5 text-black fill-white font-extrabold' />365 days to change your mind</p></a>

                <a href="">
                  <p className='underline font-semibold py-7 flex gap-2 items-center'>  < Lock className='h-5 w-5 text-black fill-white font-extrabold'/>Secure shopping with SSL data encryption</p></a>
            </div>
            </div>
          </div>
        )}
      </div>
      <h2 className="font-extrabold text-center text-2xl mt-8 mb-4">Products</h2>
      <p className="font-semibold text-2xl underline p-4">Below are some products, click to add to cart:</p>
      <ul className="divide-y divide-yellow-500-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <li key={product.id} className="py-3">
            <img
              className="hover:scale-125"
              src={product.images[0]}
              width="200"
              height="200"
              alt={product.title}
            />
            <p className="font-semibold">{product.title}</p>
            <p>{product.description}</p>
            <p>Price: {product.price}/-</p>

            <div className='flex gap-4 items-baseline '>


              <button
              className="bg-[#0058a3] text-white px-2 py-2 rounded-full mt-5 hover:hover:bg-[#003c70]"
              onClick={() => addToCart(product)}
            >
               < ShoppingBasket />

              </button>

              <Link href={`/practice`}>
              <p className="text-blue-500 inline-block mt-2 hover:text-gray-600">
                < HeartIcon className='h-5 w-5 text-black fill-white font-extrabold'/></p>

            </Link>


            </div>
          </li>
        ))}




      </ul>
    </div>
  );
}
