import { MdLocationOn } from "react-icons/md";
import { FaSearchLocation } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { FaCcMastercard, FaTruck } from "react-icons/fa6";

export default function HowItWorks() {
    const steps = [
      {
        id: 1,
        icon: <FaSearchLocation className=" inline text-[#5F8670]"/>,
        title: "Choose a Restaurant",
        description: "Find all restaurants available in your zone.",
      },
      {
        id: 2,
        icon: <IoFastFood className=" inline text-[#5F8670]"/>,
        title: "Order Your Food",
        description: "Browse through 1000s of menus online.",
      },
      {
        id: 3,
        icon: <FaCcMastercard className=" inline text-[#5F8670]"/>,
        title: "Pay by Card or Cash",
        description: "It's quick, easy, and totally secure. Be rest assured.",
      },
      {
        id: 4,
        icon: <FaTruck className=" inline text-[#5F8670]"/>,
        title: "Delivery or Takeaway",
        description: "Relax while we bring your food to you.",
      },
    ];
  
    return (
      <section className="bg-[#E7F0DC]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            How FeedMe Works
          </h2>
          <p className="text-gray-600 text-lg">
            Ordering your favorite meals is easy! Just follow these simple steps.
          </p>
        </div>
        
        <div className="mt-10 flex flex-wrap justify-center gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="bg-white p-6 w-64 rounded-xl shadow-md text-center transition hover:shadow-lg"
            >
              <div className="text-4xl">{step.icon}</div>
              <h3 className="font-semibold text-lg mt-4">{step.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{step.description}</p>
              <div className="mt-4  bg-[#5F8670] text-white font-bold w-8 h-8 flex items-center justify-center rounded-full">
                {step.id}
                {/* <MdLocationOn /> */}
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  