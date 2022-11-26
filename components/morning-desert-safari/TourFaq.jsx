import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import {RiQuestionnaireLine} from "react-icons/ri"

const TourFaq = () => {
  const data = [
    {
      que: "Can senior citizens go for morning desert safari Dubai?",
      ans: "There is no age limit to enjoy the morning desert safari Dubai and hence senior citizens can also go for it. Also, children under 3 years of age can experience this safari for free.",
    },
    {
        que:"What meals are included in morning desert safari Dubai?",
        ans:"Since it is a 4-hour long activity, there will be no meals included in morning desert safari Dubai. However, there will be soft drinks and water served at the site to the guests."
    },
    {
        que:"What are the charges for kids for morning desert safari Dubai?",
        ans:"The charges for kids for morning desert safari Dubai is INR 2,100 which a kid can not opt for without having at least two adults going along. So, make sure to have a team of at least two adults and then a kid otherwise you won’t be able to book the package."
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
