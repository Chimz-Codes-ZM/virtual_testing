import { useState, useEffect } from 'react';
import { BsFillArrowRightSquareFill, BsFillArrowLeftSquareFill } from 'react-icons/bs';

const Carousel = ({ items = [], interval = 6000 }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === (items.length ?? 0) - 1 ? 0 : prevIndex + 1
      );
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? (items.length ?? 0) - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === (items.length ?? 0) - 1 ? 0 : prevIndex + 1
    );
  };

   return (
     <div className="carousel flex justify-center h-full w-full ">
       <div className="w-full justify-between items-center flex ">
         <button onClick={handlePrevClick} className="z-50">
           <BsFillArrowLeftSquareFill className="text-2xl text-white hover:text-teal-600 transition-colors hidden lg:block" />
         </button>
         <div className="carousel-item relative z-50">{items[activeIndex]}</div>
         <button onClick={handleNextClick} className="z-50">
           <BsFillArrowRightSquareFill className="text-2xl text-white hover:text-teal-600 transition-colors hidden lg:block" />
         </button>
       </div>
     </div>
   );
};

export default Carousel;