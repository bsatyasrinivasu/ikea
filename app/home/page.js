import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link'


const Home = () => {
  return (


    <div className="bg-gray-100 ">



      <main className="p-3 bg-white">

        <div1 className='flex gap-4 '>
          <div className="h-[500px] hover:bg-white group  ">
      <video
        className=" border rounded-lg h-[700px] w-[990px] bg-gray-100 "
        autoPlay
        loop
              muted
               >
        <source
          src="https://www.ikea.com/global/en/images/yearbookstartpagefinal_4d3a80f8c6.mp4"
          type="video/mp4"
            />
            </video>
         <div className="absolute top-[730px] left-[10px] group-hover:translate-x-[70px] transition-transform duration-300  ">
              <div className=" group-hover:transition-opacity">
                <h1 className='px-[60px]'>The 2023</h1>

                <span >
                  <span className="text-[65px] font-bold text-black relative transition-transform flex gap-2 items-center  ">
                    <ArrowRight className='h-[40px] w-[40px] opacity-0 group-hover:opacity-100  transition-transform ' />

                          <Link className='px-3' href="/dashboard">
        IKEA YearBook
      </Link></span></span>  </div>
            </div>

          </div>


          <div className='grid col-span-2 '>
            <span className='border rounded-md h-[550px] w-[430px] bg-[#FFDB00] flex items-center'>

              <a className='text-[34px] font-bold px-[30px] y-[30px]' href="">Go shopping </a>
              <ArrowRight className='h-9 w-9 border ml-[50px] mt-[15px]  rounded-full border-black text-white  bg-black '/>

</span>
             <div className='border rounded-md h-[150px]  w-[430px]  bg-[#FFDB00] hover:bg-[#eae2b0] '>

            <a className='text-[17px] font-bold px-[20px] ml-[31px] mr-[30px] mt-[50px] h-[200px] flex items-ce' href="">Store : ikea.in</a>

          </div>

          </div>



        </div1>


        <div2 className='flex  mt-5 border rounded-lg h-[700px] w-[1392px] bg-[#545844] hover:bg-[#545844] group'>



          <div className='items-center mr-[30px] mt-[200px] group-hover:translate-x-[70px]  transition-transform'>

            <h1 className='text-sm text-white px-[70px]   '>
              it's here! Check out the new
            </h1>
            <div className='flex gap-2'>
              <ArrowRight className='h-[90px] w-[90px] opacity-0 group-hover:opacity-100  transition-transform text-white ' />

              <h1  className='text-[70px] m-0 px-0 text-white font-bold tracking-tight  '>
              Life at Home Report
            </h1>

            </div>


          </div>
           <img src="https://www.ikea.com/global/en/images/GC_LAHR_FY_24_Photography_Sayaka_Japan_24_fd98aa5e4d.jpg?f=xxxl" alt=""  className='h-[550px] w-[830px] ml-[20px] mr-[30px] rounded-xl mt-[60px] rounded-lg'/>
        </div2>




         <div3 className='grid grid-cols-2 py-[20px] p-[10px] '>
          <div1 className=" h-[600px] rounded-xl px-[10px]  ">
            <img src="https://www.ikea.com/global/en/images/Alex_seb_47613_09621391a4.jpg?f=g" alt=""  />
          </div1>


          <div2  className=' ' >
            <video
        className=" justify-normal h-[700px] object-none "
        autoPlay
        loop
        muted
               >
        <source
          src="https://www.ikea.com/global/en/images/IKEA_social_responsibility_intro_startpage_def4dd9e94.mp4"
          type="video/mp4"
            />
            </video>

          </div2>
        </div3>




        <div4 className='p-10' >

          <img src="https://www.ikea.com/global/en/images/PH_179651_8c30bf1254.jpg?f=g" alt="" />
        </div4>

        <div5 className='flex gap-4 '>
          <div className="h-[500px] hover:bg-white group ">

         <div className="absolute top-[730px] left-[10px]  transition-transform group-hover:translate-x-[70px] ">
              <div className=" group-hover:transition-opacity">

              </div>

            </div>


 <video
        className="object-none h-[700px] w-[650px] "
        autoPlay
            loop
            object-fit
            muted
               >
        <source
          src="https://www.ikea.com/global/en/images/klippan_startpage_73889e3fa5.mp4"
          type="video/mp4"
            />
            </video>


          </div>
             <img src="https://www.ikea.com/global/en/images/PH_194357_472d819329.jpg?f=g" alt=""  className='h-[700px] w-[700px]'/>








        </div5>


         <div6 className='flex p-4 mt-5 border rounded-lg h-[700px] w-[1392px] bg-black hover:bg-black group'>

          <div className='items-center mr-[30px] mt-[200px] group-hover:translate-x-[70px]  transition-transform'>

            <h1 className='text-sm text-white px-[30px]   '>
              The IKEA Foundation
            </h1>
            <h1  className='text-[40px] ml-[30px] text-white font-bold '>
              Reaching goals,  together
            </h1>



          </div>

          <video
        className=" h-[550px] w-[830px] ml-[100px] mr-[px]  mt-[60px]  py-[20px] rounded-xl "
        autoPlay
        loop
         muted
               >
        <source
          src="https://www.ikea.com/global/en/images/Foundation_Week_Intro_Ash_6_sec_optimised_08d04f8edc.mp4"
          type="video/mp4"
            />
          </video>




        </div6>

         <div7 className='flex gap-4 '>
          <div className="h-[500px] hover:bg-white group ">

         <div className="absolute top-[730px] left-[10px]  transition-transform group-hover:translate-x-[70px] ">
              <div className=" group-hover:transition-opacity">

              </div>

            </div>


            <img src="https://www.ikea.com/global/en/images/PH_170976_2_0226e26e88.jpg?f=g" alt=""

            className='h-[700px] w-[700px] object-center' />


          </div>
             <img src="https://www.ikea.com/global/en/images/PH_194409_50cdde45f0.jpg?f=g" alt=""  className='h-[700px] w-[700px] '/>








        </div7>










        </main>

      {/* Footer */}
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>PAGE END</p>
      </footer>
    </div>
  );
};

export default Home;
