import React from "react";
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid'

const Slidesho = () => {

	const images = [

    "https://www.ikea.com/ext/ingkadam/m/2df4dbbd69a3edb2/original/UGC100000361.jpg?f=m",
    "https://www.ikea.com/ext/ingkadam/m/142f50c30d62384e/original/UGC100033944.jpg?f=m",
		"https://www.ikea.com/ext/ingkadam/m/7c583c1507f7d59/original/UGC100019908.jpg?f=m",
    "https://www.ikea.com/ext/ingkadam/m/1387faf9194ff21d/original/UGC100034277.jpg?f=m",
    "https://www.ikea.com/ext/ingkadam/m/40bdcf8727a8fe51/original/UGC100028270.jpg?f=m",
"https://www.ikea.com/ext/ingkadam/m/450286a4845cd6b6/original/UGC100001391.jpg?f=m",
    "https://www.ikea.com/ext/ingkadam/m/6ac52b4f602c4ccb/original/UGC100038266.jpg?f=m",
    "https://www.ikea.com/ext/ingkadam/m/1d49c1850d63ee14/original/UGC100000706.jpg?f=m",
    "https://www.ikea.com/ext/ingkadam/m/275d93c20da2ac90/original/UGC100000471.jpg?f=m",
    "https://www.ikea.com/ext/ingkadam/m/774a904723baac14/original/UGC100028166.jpg?f=m",




  ];

  return (
    <div className="flex overflow-x-auto  p-16 ">
      {images.map((each, index) => (
        <div key={index} className="flex-none mr-4  ">
          <img
            className="w-[400px] h-[500px] "
            src={each}
            alt={`Slide ${index}`}
          />
        </div>
      ))}
    </div>
  );
};

export default Slidesho;
