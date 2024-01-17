"use client"
import React, { useState } from 'react';

const ImageWithDynamicPrice = ({ src, alt }) => {
  const [selectedPoints, setSelectedPoints] = useState([]);
  const points = [
    { x:0 , y: 0, price: '$99.99' },
    { x: 300, y: 250, price: '$129.99' },
   
  ];

  const handleMouseOver = (point) => {
    setSelectedPoints([point]);
  };

  const handleMouseOut = () => {
    setSelectedPoints([]);
  };

  return (
    <div className="relative">
      <img src={src} alt={alt} className="w-[1300px] h-[400px] m-12" />
      {points.map((point, index) => (
        <div
          key={index}
          className="absolute z-10"
          style={{ top: point.y, left: point.x }}
          onMouseOver={() => handleMouseOver(point)}
          onMouseOut={handleMouseOut}
        >
          {selectedPoints.some((selectedPoint) => selectedPoint === point) && (
            <div className="bg-gray-900 bg-opacity-75 text-white p-2 rounded">
              <p className="text-2xl font-bold">{point.price}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ImageWithDynamicPrice;
