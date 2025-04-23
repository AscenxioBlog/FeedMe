import React from "react";
import { MdAddBusiness } from "react-icons/md";
import { RiEBike2Fill } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa6";
import { Link } from "react-router-dom";


const BusinessWork = () => {
  const working = [
    {
      id: 1,
      icon: <MdAddBusiness  className=" inline text-[#5F8670]" />,
      title: "Add your Restaurant",
      description: "Expand your reach and grow your business by joining our platform. Connect with thousands of hungry customers today!",
    },
    {
      id: 2,
      icon: <FaHandshake  className=" inline text-[#5F8670]" />,
      title: "Partner With Us",
      description: "Let's work together to bring the best food experiences to our customers. Join us as a trusted partner and grow with us!",
    },
    {
      id: 3,
      icon: <RiEBike2Fill  className=" inline text-[#5F8670]" />,
      title: "Become a Driver",
      description: "Earn on your schedule! Deliver food, enjoy flexibility , make money, and be your own boss. Start driving with us today!"
    },
  ];

  return (
    <section className=" bg-[#E7F0DC] py-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 ">
            Let's Join Hands
          </h2>
        </div>
        
        <div className="mt-5 flex flex-wrap justify-center gap-6">
          {working.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 w-[300px] rounded-xl shadow-md text-center transition hover:shadow-lg"
            >
              <div className="text-4xl">{step.icon}</div>
              <h3 className="font-semibold text-lg mt-4">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
              {/* <Link>
                <button className="">read more</button>
              </Link> */}
              <div className=" flex justify-center">
                <div className=" mt-2 border-2 border-gray-400 rounded-[30px] bg-[#5F8670] px-4 w-[40%] cursor-pointer py-2 text-[0.8rem] text-white font-bold">
                    <Link to="/restaurant">read more</Link>
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </section>
  )
};

export default BusinessWork;
