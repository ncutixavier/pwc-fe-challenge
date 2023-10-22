import React, { useState, useRef, useEffect } from 'react';
import Amenity from '../Amenity';
import { useRouter } from 'next/router'

const Header = () => {
  const amenities = [
    'Amazing views',
    'breakfasts',
    'Countryside',
    'Castles',
    'Lake',
    'Iconic cities',
    'Tropical',
    'Amazing views',
    'breakfasts',
    'Countryside',
    'Castles',
    'Lake',
    'Iconic cities',
    'Tropical',
    'Amazing views',
    'breakfasts',
    'Countryside',
    'Castles',
    'Lake',
    'Iconic cities',
    'Tropical',
  ];

  const [startIndex, setStartIndex] = useState(0);
  const containerRef = useRef(null);
  const router = useRouter()

  useEffect(() => {
    setStartIndex(0); // Reset the start index
  }, [containerRef]);

  const handlePrevClick = () => {
    setStartIndex(Math.max(startIndex - 1, 0));
  };

  const handleNextClick = () => {
    setStartIndex(Math.min(startIndex + 1, amenities.length - 1));
  };

  return (
    <div className="px-14 sm:px-8 xs:px-4">
      <div className='flex border-t border-b my-5 items-center gap-5 relative'>
        <button
          role="left-arrow"
          className='left-bg-gradient flex items-center justify-center border w-7 h-7 border-gray-300 rounded-full'
          onClick={handlePrevClick}
        >
          <svg className="w-2 h-2 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
          </svg>
        </button>
        <div className='flex flex-1 items-center gap-3 sm:w-[40%] overflow-x-auto no-scrollbar transition-transform duration-300 ease-in-out' ref={containerRef}>
          {amenities.slice(startIndex).map((amenity, index) => (
            <Amenity to={`/listings?amenity=${amenity}`} active={router.query?.amenity?.toLowerCase() === amenity.toLowerCase()} key={index} icon={`/assets/icons/${amenity.toLowerCase()}.jpg`} title={amenity} />
          ))}
        </div>
        <button
          role='right-arrow'
          className='right-bg-gradient flex items-center justify-center border w-7 h-7 border-gray-300 rounded-full'
          onClick={handleNextClick}
        >
          <svg className="w-2 h-2 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
          </svg>
        </button>
        <div className=''>
          <div className=''><button className='flex items-center justify-center gap-3 border border-gray-300 rounded-md min-w-[120px] min-h-[45px] font-semibold'>
            <svg className="w-5 h-5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
            </svg>        <span>Filter</span>
          </button></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
