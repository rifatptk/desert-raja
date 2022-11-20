import React from "react";
import Highilghts from "./Highilghts";
import Lncluded from "./Lncluded";
import Ltinerary from "./Ltinerary";
import Overview from "./Overview";
import {FiSettings} from "react-icons/fi"

import RiSlider from '../slider/RiSlider';
import Cancellation from "./Cancellation";
import Covid from "./Covid";
import TourFaq from "./TourFaq";



const data = [
  '/assets/images/tour/overnight/1.jpeg',
  '/assets/images/tour/overnight/2.jpg',
  '/assets/images/tour/overnight/3.jpg',
  '/assets/images/tour/overnight/4.jpg',
  '/assets/images/tour/overnight/5.jpg',
  '/assets/images/tour/overnight/6.jpg',
  '/assets/images/tour/overnight/7.webp',
  '/assets/images/tour/overnight/8.webp',
  '/assets/images/tour/overnight/9.jpg',
]


const TourLeft = () => {
  return (
    <div>
      <h2 className="text-[36px] font-semibold mb-5">
        Overnight Romantic Stay
      </h2>
      <div className="w-full h-[1px] bg-brand-light-gray"></div>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/assets/images/tour/car-1.png"
              alt=""
              className="w-[36px] h-[36px]"
            />
          </div>
          <div>
            <h5 className="text-[14px] font-bold">Pickup/Drop</h5>
            <p className="text-[14px] font-normal text-[#123a3280]">Free</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/assets/images/tour/guide.png"
              alt=""
              className="w-[36px] h-[36px]"
            />
          </div>
          <div>
            <h5 className="text-[14px] font-bold">Guide</h5>
            <p className="text-[14px] font-normal text-[#123a3280]">
              Experienced & Friendly
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/assets/images/tour/sunrise.png"
              alt=""
              className="w-[36px] h-[36px]"
            />
          </div>
          <div>
            <h5 className="text-[14px] font-bold">Sunset</h5>
            <p className="text-[14px] font-normal text-[#123a3280]">
              Photo Point
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/assets/images/tour/heart.png"
              alt=""
              className="w-[36px] h-[36px]"
            />
          </div>
          <div>
            <h5 className="text-[14px] font-bold">Romantic</h5>
            <p className="text-[14px] font-normal text-[#123a3280]">
            Intimate Setup
            </p>
          </div>
        </div>
      </div>

      {/* slyder */}
      <RiSlider items={data} />
      <Overview />
      <div className="w-full h-[2px] bg-brand-light-gray"></div>
      <Ltinerary />
      <div className="w-full h-[2px] bg-brand-light-gray"></div>
      <Lncluded />
      <div className="w-full h-[2px] bg-brand-light-gray"></div>
      <div className="mt-5">
        <h2 className="text-[16px] font-semibold mb-5">Durations</h2>
        <div className="flex items-center gap-5 mb-8">
            <FiSettings />
            <p>7 hours</p>
        </div>
      </div>
      <div className="w-full h-[2px] bg-brand-light-gray"></div>
      <Cancellation />
      <div className="w-full h-[2px] bg-brand-light-gray"></div>
      <Covid />
      <div className="w-full h-[2px] bg-brand-light-gray"></div>
      <div className="w-full h-[4px] mt-7 bg-brand-light-gray"></div>
      <TourFaq />
    </div>
  );
};

export default TourLeft;
