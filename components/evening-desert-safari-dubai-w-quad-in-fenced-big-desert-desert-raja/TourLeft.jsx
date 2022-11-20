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
  '/assets/images/tour/evening-desert-safari/11.webp',
  '/assets/images/tour/evening-desert-safari/8.jpg',
  '/assets/images/tour/evening-desert-safari/12 (1).jpeg',
  '/assets/images/tour/evening-desert-safari/12 (2).jpeg',
  '/assets/images/tour/evening-desert-safari/12 (1).png',
  '/assets/images/tour/evening-desert-safari/6.jpg',
  '/assets/images/tour/evening-desert-safari/1.webp',
  '/assets/images/tour/evening-desert-safari/2.jpg',
  '/assets/images/tour/evening-desert-safari/9.webp',
  '/assets/images/tour/evening-desert-safari/10.jpg',
]

const TourLeft = () => {
  return (
    <div>
      <h2 className="text-[36px] font-semibold mb-5">
      Evening Desert Safari Dubai w/ Quad in Fenced Big Desert – Desert Raja
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
              src="/assets/images/tour/barbeque.png"
              alt=""
              className="w-[36px] h-[36px]"
            />
          </div>
          <div>
            <h5 className="text-[14px] font-bold">BBQ Dinner</h5>
            <p className="text-[14px] font-normal text-[#123a3280]">
              Unlimited Food
            </p>
          </div>
        </div>
      </div>

      {/* slyder */}
      <RiSlider items={data} />
      <Overview />
      <Highilghts />
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
