import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Sliderimg = () => {

	const images = [

    "p.png",
    "p1.png",
    "p2.png",
		"p3.png",
    "p4.png",
		"p5.png",
		"p6.png",




  ];

  return (
    <div className="flex overflow-x-auto  ">
      {images.map((each, index) => (
        <div key={index} className="flex mr-4  ">
          <img
            className="max-w-xs h-[300px]"
            src={each}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default  Sliderimg;
