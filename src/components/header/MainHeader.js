import { useState, useRef, useEffect } from 'react';
import Amenity from '../Amenity';
import { useRouter } from 'next/router'
import { useQueryClient } from 'react-query';
import FilterListing from '../listing/FilterListing';

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
];

const Header = () => {
  const containerRef = useRef(null);
  const router = useRouter()
  const distance = 200
  const [isLeftButtonVisible, setIsLeftButtonVisible] = useState(false);
  const [isRightButtonVisible, setIsRightButtonVisible] = useState(false);
  const queryClient = useQueryClient();
  const [openFilterModal, setOpenFilterModal] = useState(false)


  const handlePrevClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -distance,
        behavior: 'smooth'
      });
    }
  };

  const handleNextClick = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: +distance,
        behavior: 'smooth'
      });
    }
  };

  const onSelectAmenity = (amenity) => {
    router.push(`/listings?amenity=${amenity}`)
    queryClient.refetchQueries("listings");
  }

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const isOverflowing = container.scrollWidth > container.clientWidth;
      const isAtLeftEdge = container.scrollLeft === 0;
      const isAtRightEdge = container.scrollLeft === container.scrollWidth - container.clientWidth;

      setIsLeftButtonVisible(isOverflowing && !isAtLeftEdge);
      setIsRightButtonVisible(isOverflowing && !isAtRightEdge);
    }
  };

  useEffect(() => {
    handleScroll();

    if (containerRef.current) {
      containerRef.current.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const getQueryNumber = () => {
     return router.query.hasOwnProperty('isFiltering') ? Object.keys(router.query).length - 1 : 0 
  }

  return (
    <div className="px-14 sm:px-8 xs:px-4">
      <FilterListing isOpen={openFilterModal} onClose={() => setOpenFilterModal(false)} />
      <div className='flex border-t border-b my-5 items-center gap-5 relative'>
        {isLeftButtonVisible && <button
          role="left-arrow"
          className='left-bg-gradient flex items-center justify-center border w-7 h-7 border-gray-300 rounded-full'
          onClick={handlePrevClick}
        >
          <svg className="w-2 h-2 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
          </svg>
        </button>}

        <div className='flex flex-1 items-center gap-3 sm:w-[40%] overflow-x-auto no-scrollbar transition-transform duration-300 ease-in-out' ref={containerRef}>
          {amenities.map((amenity, index) => (
            <Amenity onSelect={() => onSelectAmenity(amenity)} active={router.query?.amenity?.toLowerCase() === amenity.toLowerCase()} key={index} icon={`/assets/icons/${amenity.toLowerCase()}.jpg`} title={amenity} />
          ))}
        </div>

        {isRightButtonVisible && <button
          role='right-arrow'
          className='right-bg-gradient flex items-center justify-center border w-7 h-7 border-gray-300 rounded-full'
          onClick={handleNextClick}
        >
          <svg className="w-2 h-2 text-gray-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
          </svg>
        </button>}

        <div className=''><button onClick={() => setOpenFilterModal(true)} className={`flex relative items-center justify-center gap-3 ${getQueryNumber() > 0 ? 'border-gray-900 border-2':'border-gray-300 border'} rounded-md min-w-[120px] min-h-[45px] font-semibold`} >
          <svg className="w-5 h-5 text-gray-900 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25" />
          </svg>
          <span>Filter</span>
          {getQueryNumber() > 0 && <span className='h-5 w-5 text-white rounded-full text-[13px] absolute bottom-8 right-0 bg-black'>{getQueryNumber()}</span>}
        </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
