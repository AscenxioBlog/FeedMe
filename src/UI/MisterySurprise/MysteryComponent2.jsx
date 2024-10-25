import React from 'react'
import gift2 from '../../Files/gift2.jpg'
import gift1 from '../../Files/gift.jpg'
import gift3 from '../../Files/gift3.jpg'
import gift4 from '../../Files/gift4.jpg'
import Slider from "react-slick";

function MysteryComponent2() {
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
    <div className=' min-h-[500px] w-full bg-[#E7F0DC] flex justify-center items-center pt-3 pb-3 lg:p-0' >
        <div className=" min-h-[400px] w-[98%] md:w-[90%] bg-[] grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div className="h-[400px] bg-[#5F8670] text-white flex flex-col items-center justify-center">
                <h1 className=' text-[25px] font-bold '>Need a gift?</h1>
                <section className=' flex flex-col md:flex-row lg:flex-col items-center md:text-[18px] lg:text-[20px]'>
                <span>Treat yourself, or someone else, to a fantastic mystery </span>
                <span>gift box filled with presents!</span>
                </section>

                <section className=' flex flex-col items-center'>
                <p className='  md:text-[18px] lg:text-[20px]'>We are currently dispatching boxes on the same, </p>
                <span className='md:text-[18px] lg:text-[20px]'>or next working day!</span>
                </section>
            </div>
            <div className="h-[400px] bg-red-400 overflow-hidden">
            <Slider  {...settings}>
        <div className="  h-[400px] w-full bg-[cadetblue] flex justify-center items-center">
                <img src={gift2} alt="" />

            {/* <h1 className='text-white text-[2rem] font-bold'>ADVERT BILL BOARD</h1> */}
        </div>

        <div className=" h-[400px] w-full bg-[#69a05f] flex justify-center items-center">
        <img src={gift1} alt="" />

        </div>

        <div className=" h-[400px] w-full bg-[#705fa0] flex justify-center items-center">
        <img src={gift3} alt="" />

        </div>

        <div className=" h-[400px] w-full bg-[#adef32] flex justify-center items-center">
        <img src={gift4} alt="" />

        </div>
      
    </Slider>
                {/* <img src={gift2} alt="" /> */}
            </div>
        </div>
      
    </div>
  )
}

export default MysteryComponent2
