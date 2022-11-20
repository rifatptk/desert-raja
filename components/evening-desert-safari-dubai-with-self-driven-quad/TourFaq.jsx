import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {RiQuestionnaireLine} from "react-icons/ri"

const TourFaq = () => {
  const data = [
    {
      que: "What type of dressing is recommended in this Dubai desert safari?",
      ans: "Wear what makes you the most comfortable. However, for women, avoid wearing shorts and skirts and if possible replace them by loose pants or capris. For men, it will be respectful if instead of a vest, wear a loose t-shirt and whatever suits you below. And a major advise, wear sandals instead of shoes to let your feet breathe and not feel stuffed by sand.",
    },
    {
        que:"Which vehicle will be provided to us for Dubai desert safari?",
        ans:"A 4x4 vehicle, either a Toyota Land Cruiser or Fortuner is most commonly used for the safaris. If not it shall be any other vehicle fully air conditioned, comfortable and spacious enough to let you skid and slip freely."
    },
    {
        que:"Which activities are included in Dubai desert safari?",
        ans:"The desert safari is comprised of the dune bashing, that is a 4x4 vehicle adventure on sand dunes and also a brief camel ride. Followed by, a lavish barbeque dinner and some art forms. You also get to treat your eyes along with your taste buds while watching the belly dance performed by some great artists."
    }
  ];


  const [select, setSelect] = useState(null)

  const trogle = (i)=>{
      if(select === i){
          setSelect(null)
      }else{
          setSelect(i)
      }
      
  }

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
                <RiQuestionnaireLine className=" inline-block text-[25px] mr-2"/> {item.que}
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
