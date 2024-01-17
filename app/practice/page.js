import React from 'react';
import { StarIcon, ArrowTrendingDownIcon } from '@heroicons/react/24/outline';


  async function fetchProductList() {
    let response = await fetch('https://dummyjson.com/products');
    let data = await response.json();

    return data.products;
  }


  export default async function Page() {
    let products = await fetchProductList();

    return (
      <div className="grid grid-cols-5 md:grid-cols-3 gap-6 border p-7 bg-black text-black text-center">
        <h1 className="font-bold text-3xl underline text-white space-y-4  text-center">
          Product List
        </h1>

        {products.map((item) => (
          <div key={item.id} className="border p-4 bg-white rounded-2xl hover:bg-gray-300 ">
            <img
              className="justify-center max-w-300 max-h-[250px] min-w-[200px] min-h-600"
              src={item.thumbnail}
              width="600"
              height="600"
            />

            <h1 className="font-bold underline text-center">{item.title}</h1>
            <div className='flex justify-center '>
              <ArrowTrendingDownIcon className="h-8 w-8 justify-center self-center text-green-950"  />
              <h6 className="underline font-extrabold text-green-950">
                Discount: {item.discountPercentage}%
                </h6>
              </div>

            <h3 className="font-semibold ">{item.description}</h3>

            <h3 className="font-semibold border-b">Category: {item.category}</h3>

            <p className="font-light">Brand: {item.brand}</p>
            <p className="font-extrabold text-xl ">Price: {item.price}/-</p>
            <p className="text-red-950 underline">Stock left :{item.stock}</p>

            <div className='flex justify-center  '>

              <p className="font-semibold underline">Rating</p>

            <StarRating rating={Math.round(item.rating)} />
            </div>

            <div className='flex flex-col space-y-4 ... '>
              <a href="/"> <p className="font-extrabold border p-4 underline bg-green-900 text-center rounded-full hover:bg-white">BUY NOW</p></a>

              {/* <button onClick={() => addToCart(data)}>Add to Cart</button> */}

              {/* <a href="/" onClick={() => addToCart(item)}>
                <p className="font-extrabold border p-4 underline bg-yellow-500 text-center space-y-5 rounded-full hover:bg-white">ADD TO CART</p>
              </a> */}




            </div>

          </div>
        ))}
      </div>
    );
  }

  function StarRating({ rating }) {
    const stars = [];

    for (let i = 0; i < 5; i++) {
      stars.push(
        <StarIcon
          key={i}
          className={`h-6 w-6 ${i < rating ? 'fill-yellow-400' : 'text-gray-300'}`}
        />
      );
    }

    return <div className="flex items-center">{stars}</div>;
  }
