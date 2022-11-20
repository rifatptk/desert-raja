import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { RiQuestionnaireLine } from "react-icons/ri";

const TourFaq = () => {
  const data = [
    {
      que: "How cold does it get at night in the desert?",
      ans: "The air over a desert is extremely dry and the humidity is very low as well. To moderate the temperature of the earth, the most significant greenhouse gas is water vapor. Because the desert has so little water, the ground is unable to retain its heat. This makes the desert cooler by up to 7 degrees Celsius at night as compared to the coast.",
    },
    {
      que: "What type of dressing is recommended in this safari?",
      ans: "Loose, comfortable clothing is recommended for an overnight desert safari in Dubai. Cotton pants or shots are ideal for men while women would be most comfortable in pants and a T-shirt or salwar kameez. If you are visiting in the winter, you should carry a light jacket too.",
    },
    {
      que: "Which vehicle will be provided for us for safari?",
      ans: "4-wheel drive vehicles are used in desert safaris as they are able to sustain the pressure and thrust that comes with driving on the desert. For those who want to experience the thrill of dune bashing, luxury 4x4 drive vehicles are provided. Because safety is the most important aspect of this exciting activity, tour operators use only the best vehicles like Toyota Land Cruiser, Hummer and Prado.",
    },
    {
      que: "What are the timings of the Overnight Desert Safari?",
      ans: "The timings for the overnight desert safari are 7:30 p.m. to 8:30 a.m.",
    },
    {
      que: "What is the batch size of the Safari?",
      ans: "Due to COVID-19 safety protocols, we have reduced the batch size to 30 to 35 passengers in SIC / 6 to 7 passengers in 4*4",
    },
    {
      que: "What is the duration of the Safari?",
      ans: "The duration of the marvelous overnight desert safari is 12 hours.",
    },
  ];

  const [select, setSelect] = useState(null);

  const trogle = (i) => {
    if (select === i) {
      setSelect(null);
    } else {
      setSelect(i);
    }
  };

  return (
    <div className="py-8">
      <h2 className="text-[24px] font-semibold mb-5">FAQs</h2>

      <div className=" grid grid-cols-1 gap-[20px]">
        {data?.map((item, i) => {
          return (
            <div key={i} className="mb-[10px]">
              <div
                className="flex items-start justify-between"
                onClick={() => trogle(i)}
              >
                <h2 className="text-[18px] font-[600] cursor-pointer mb-[20px] mt-0">
                  <RiQuestionnaireLine className=" inline-block text-[25px] mr-2" />{" "}
                  {item.que}
                </h2>

                <button className="text-[22px] text-brand-gray pt-0">
                  {select === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              <div className="">
                <p
                  className={`text-[14px] font-normal text-[#123a3280] mb-[20px] duration-300 ${
                    select === i ? "" : "hidden"
                  } `}
                >
                  {item.ans}
                </p>
              </div>
              <div className="border-brand-light-gray border border-b-2 "></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TourFaq;
