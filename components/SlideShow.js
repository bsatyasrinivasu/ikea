import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Slideshow = () => {

	const images = [

    "pip.png",
    "pip1.png",
		"pip2.png",
		"pip3.png",
    "pip4.png",
		"pip5.png",
		"pip6.png",
    "pip7.png",
		"pip8.png"



  ];

  return (
    <div className="flex overflow-x-auto  ">
      {images.map((each, index) => (
        <div key={index} className="flex-none mr-4  ">
          <img
            className="max-w-xs h-[273px]"
            src={each}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
