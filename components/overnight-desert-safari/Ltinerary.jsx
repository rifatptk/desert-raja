import React from "react";
import {MdKeyboardArrowUp} from "react-icons/md"

const Ltinerary = () => {
  return (
    <div className="mt-5 mb-8">
      <h2 className="text-[24px] font-semibold mb-5">Itinerary</h2>
      <div className=" border border-l-green-400 border-l-4 border-brand-light-gray bg-[#FCFCFC] py-8 px-5">
        <div className="w-full text-[24px] flex items-end justify-end mb-5"><MdKeyboardArrowUp /></div>
        <ul className="text-[14px]">
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
          You will be picked up from your hotel in Dubai or Sharjah at around 7:30 PM.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
             After reaching, you will enjoy the dune bashing ride in a 4by4.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            Stop at the sunset point where you can capture the beautiful sunset over the vast desert.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            Engage in other activities like Henna Designing, Camel Safari, and Sandboarding if you still feel that you can take more adrenaline or if you seek thrill and adventure, unlike any other experience.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            Enjoy BBQ Dinner inclusive of Starters, Salads, Main Course, Barbeque Station, Desserts and Drinks.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            Relax as you enjoy an array of entertainment shows (Belly dance, fire show & Tanoura show) and spend a peaceful sleep in tents under the beautiful starry skies in a desert.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            Conclude your trip by waking up to a beautiful sunrise and delicious breakfast in the morning.
          </li>
          <li className="mb-4">
            <img
              src="/assets/images/tour/2705.svg"
              alt=""
              className="w-[14px] h-[14px] inline-block"
            />{" "}
            Once done with the breakfast then you???ll get dropped back to your hotel or residence by 8:30 am
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Ltinerary;
