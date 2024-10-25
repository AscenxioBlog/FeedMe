import React, { useEffect, useRef } from 'react'
import Slider from "react-slick";

function SliderComponent() {
    var settings = {
        dots: true,
        infinite: true,
        // speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        // cssEase: "linear"
      };
     
  return (
    <div className=' h-[400px] w-[90%] bg-[] '>
       
        <Slider {...settings}>
        <div className="colaa  h-[400px] w-full bg-[cadetblue] flex justify-center items-center">
            <h1 className='text-white text-[2rem] font-bold'>ADVERT BILL BOARD</h1>
        </div>

        <div className="cream h-[400px] w-full bg-[#69a05f] flex justify-center items-center">
        <h1 className='text-white text-[2rem] font-bold'>ADVERT BILL BOARD</h1>

        </div>

        <div className="coke h-[400px] w-full bg-[#705fa0] flex justify-center items-center">
        <h1 className='text-white text-[2rem] font-bold'>ADVERT BILL BOARD</h1>

        </div>

        <div className="code h-[400px] w-full bg-[#adef32] flex justify-center items-center">
        <h1 className='text-white text-[2rem] font-bold'>ADVERT BILL BOARD</h1>

        </div>
      

        </Slider>
    </div>
  )
}

export default SliderComponent
