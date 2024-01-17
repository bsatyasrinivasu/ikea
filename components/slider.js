import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Slideshow = () => {

	const images = [

    "sp1.png",
    "sp2.png",
		"sp3.png",
    "sp4.png",


  ];

  return (
    <div className="flex overflow-x-auto  p-16 ">
      {images.map((each, index) => (
        <div key={index} className="flex-none mr-4  ">
          <img
            className="w-[400px] h-[700px] "
            src={each}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
