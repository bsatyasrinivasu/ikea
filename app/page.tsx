import React from 'react';
import Features from '../components/Features';
import Header from '../components/Header';
import OurTeam from '../components/OurTeam';
import Slideshow from '../components/SlideShow';
import Sliderimg from '../components/Sliderimg';
import Slider from '../components/slider';
import Slider1 from '../components/Slider1';
import { ScanSearch } from 'lucide-react';
import ImageHover from '../components/ImageHover';
import ImageHove from '../components/img1';
import ImageHov from '../components/img2';
import ImageHo from '../components/img3';
import Clock from '../components/Clock';


export default function Home() {
  return (

    <>

      <div className=' p-11 m-[76px] w-[1300px] h-[240px] bg-[#007CC1] text-white items-center px-12 items-center'>

        <h1 className='font-bold text-3xl p-2'>Free delivery? Yes, please!</h1>
        <p className='left-5'>IKEA Family members get free delivery on purchases over $299 when shopping now through Feb 3 *</p>
        <button className='text-sm border rounded-full text-black font-semibold w-[150px] h-[38px] bg-white px-5'>Start Shopping</button>
      </div>
      <div className='m-10'>

        <div>

        </div>
        <div className='p-9'>
          <h1 className='text-2xl font-bold '>Hurry, the Winter Sale ends soon!</h1>
                  <h1>1/16/24 is the last day to save up to 70% on storage, dressers, comforters, TV units, pet accessories and more.
          </h1>
                  <p className='flex gap-[500px]'> Get closer to your 2024 home upgrade goals and do it now for less.

            <button className=' text-sm border rounded-full text-black border-black font-semibold w-[150px] h-[38px] ] '>Shop winter sale</button>
        </p>

</div>

      </div>

       <div className='flex   px-[70px]'>

        <div className="grid grid-cols-2 ">
  <div className="">
            <img src="a5.png" alt="" className=" " />

  </div>

  <div className=" grid grid-cols-2 gap-0 ">
    <div className=""><ImageHover /></div>
    <div className=""><ImageHove /></div>
    <div className=""><ImageHov /></div>
    <div className=""><ImageHo /></div>
  </div>
        </div>
      </div>
       <div>

    </div>







      <div className='flex gap-5  p-14'>

        <span className=''><h1 className='border w-[200px] h-[270px] bg-[#e7131d]  text-white font-bold p-2'>Save upto 70% at the Ikea Winter Sale</h1></span>


<Slideshow />

      </div>

      <div className=' p-11 m-[76px] w-[1300px] h-[240px] bg-[#e7131d] text-white items-center px-12 items-center'>

        <h1 className='font-bold text-3xl p-2'>Save up to 70% off in-store!</h1>
        <p className='left-5'>Save in-store and take it home today. Find more great offers at your local store. The season of thanks has <span className=''>begun!</span></p>
        <button className='text-sm border rounded-full text-black font-semibold w-[150px] h-[38px] bg-white px-5'>Find your store</button>
      </div>


      <div><h1 className='font-bold text-2xl px-20 '>Right now at IKEA</h1>
        <div className='px-8'>
                  <Slider />

        </div>


        <div className='px-16'>
           <Sliderimg  />
        </div>
      </div>


      <div className=' p-11 m-[76px] w-[1300px] h-[240px] bg-[#007CC1] text-white items-center px-12 items-center'>

        <h1 className='font-bold text-3xl p-2'>Important IKEA Family benefit change 2/1/24</h1>
        <p className='left-5'>Effective February 1, 2024, IKEA Family Members will no longer receive 5% off in-store on all furniture and décor. </p>
        <button className='text-sm border rounded-full text-black font-semibold w-[150px] h-[38px] bg-white px-5'>Learn More</button>
      </div>
      <h1 className='font-bold px-[110px] text-2xl'>
             Popular categories
          </h1>

      <div className='grid grid-cols-5 gap-5 px-[110px] ' >


        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/couch_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Sofas & Sectionals</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/bed_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Beds & Mattresses</p>
        </span>

        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/bookshelf_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Bookcases & Shelving</p>
        </span>

        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/cabinet_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>TV & Media Furniture</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/wardrobe_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Storage & Organization</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/table_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Tables & Desks</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/lamp_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm px-9'>Lighting</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/bathroom_sink_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm px-9'>Bathroom</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/rug_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm px-11'>Rugs</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/cod_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm px-9'>Dressers</p>
        </span>

        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/octopus_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Children & Nursery</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/pot_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Cookware & Tableware</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/fridge_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm'>Kitchen & Appliances</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/watering_can_11-03-23.jpg" alt="" className='w-[130px] h-[150px] hover:' />
          <p className='hover:underline text-sm px-7'>Home Décor</p>
        </span>
        <span>
          <img src="https://www.ikea.com/ext/us/images/featured-categories/deals.jpg" alt="" className='w-[160px] h-[110px] hover:' />
          <p className='hover:underline text-sm p-9'>Deals</p>
        </span>
      </div>
      <div>

        <h1 className='text-2xl font-bold px-[110px]'>Services to help you shop</h1>


        <img src="lg.png" alt="" />
      </div>

      <div className='px-[110px] '>

        <h1  className='text-2xl font-bold '>As seen on Instagram</h1>
        <p className='text-sm  py-0 p-0'>See how our products look in real homes! Share your photos on Instagram with #MyIKEAUSA or tag @IKEAUSA for a chance to be seen here.</p>

         <Slider1  />


      </div>

      <div className='flex gap-0 px-[110px]'>

        <img src="https://www.ikea.com/images/storage-containger-faa7e2547681722b55faaccc22fcb567.jpg?f=xl" alt=""className='h-[450px] w-[900px]' />
        <div className='border w-[500px] bg-[#00853E] text-white py-[50px]  items-center'>
          <h1 className='text-2xl font-bold px-[20px] ml-[31px] mr-[30px]'>Less waste, more great eats in 2024</h1>
          <p className='text-sm ml-[50px] mr-[30px] py-[10px]'>Want to enjoy every bite rather than wastefully feed the landfill? Start sustainably with reusable food storage containers for easier, healthier meal planning.</p>
          <button className='text-[12px] border rounded-full text-black font-semibold w-[150px] h-[38px] bg-white ml-[50px] mr-[30px] py-[10px] font-semibold'>Shop food storage</button>

        </div>


      </div>

      <div>
        <Clock />

        <h1>

        </h1>
      </div>




       <span>
          <h1 className='font-bold text-xl p-10 px-[110px]'>This is IKEA</h1>
      </span>




      <div className='grid grid-cols-3 gap-5 px-28 text-gray-700 text-sm '>

        <span>
          <h1 className='font-bold px-
          '>Sustainable everyday</h1>
          <p className='py-2'>How sustainable is IKEA? Well, more sustainable every day. With products like veggie hot dogs, and energy-saving solutions, we’re paving the way for more sustainable homes for the many. </p>
          <a href="" className='underline'>Learn more</ a >
        </span>
        <span>
          <h1 className='font-bold px-
          '>Climate and environment</h1>
          <p className='py-2' >Find out how IKEA invests, inspires and acts to tackle environmental issues, reduce carbon footprints and drive positive change on a global scale. </p>
           <a href=""className='underline' >Learn more</a>
        </span>
        <span>
          <h1 className='font-bold px-
          '>Work with us</h1>
          <p className='py-2' >Coming from all over the world, our IKEA co-workers share a special set of values and a vision to enable people to live a better, more sustainable everyday life. They come together within diverse, inclusive, open IKEA work environments, where each of them offers something unique.</p>
           <a href="" className='underline'>Learn more</a>
        </span>

      </div>
      <div className=' ml-[110px] mr-[550px] text-gray-800'>
        <h1 className='font-bold text-2xl py-5 '>Furniture and inspiration for a better everyday life at home </h1>
        <p>Welcome to IKEA, where you will always find affordable furniture, stylish home décor and innovative modern home solutions, as well as design inspiration and unique home ideas! If you are online furniture shopping or if you are visiting a local IKEA store near you, you can expect super low prices on a wide variety of exciting home essentials that are perfect for larger homes and small space living. So what are you waiting for? Refresh your home with affordable options for the living room, bed, bath and beyond today!

If you want to save even more money when you are shopping at IKEA, be sure to join IKEA Family so you can take advantage of our regular furniture sales, amazing deals on home furnishings and special offers on home accessories. Get ready for big savings whether you are refreshing your space with small upgrades, like new curtains or sheets, or planning bigger home renovation projects, like remodeling your kitchen or doing a DIY bathroom makeover!

So, now you are probably wondering, “How do I find an IKEA furniture store near me?” Check out the IKEA Store Locator and we hope to see you soon! IKEA also has many new ways to shop. Want to shop online from the comfort of your sofa? No problem, we’ve made shopping online at IKEA easier than ever. Browse our full store experience online to find affordable home goods for every room, including home office, living room, kitchen, bathroom, bedroom and outdoor furniture, and get deliveries straight to your doorstep! We also offer Click-and-collect where you can buy online and pick-up in store for even faster and easier shopping. </p>


      </div>




      <Header />

          <Features />
      <OurTeam />
    </>
  );
}
