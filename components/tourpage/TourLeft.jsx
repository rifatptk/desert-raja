import React from "react";
import Highilghts from "./Highilghts";
import Overview from "./Overview";

const TourLeft = () => {
  return (
    <div>
      <h2 className="text-[36px] font-semibold mb-5">Evening Desert Safari Dubai – Desert Raja</h2>
      <div className="w-full h-[1px] bg-brand-light-gray"></div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center gap-2">
          <div>
            <img src="/assets/images/tour/car-1.png" alt="" className="w-[36px] h-[36px]"/>
          </div>
          <div>
            <h5 className="text-[14px] font-bold">Pickup/Drop</h5>
            <p className="text-[14px] font-normal text-[#123a3280]">
                Free
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <img src="/assets/images/tour/guide.png" alt="" className="w-[36px] h-[36px]"/>
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
            <img src="/assets/images/tour/sunrise.png" alt="" className="w-[36px] h-[36px]"/>
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
            <img src="/assets/images/tour/barbeque.png" alt="" className="w-[36px] h-[36px]"/>
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
      <div className="h-[700px] bg-black">

      </div>
      <Overview />
      <Highilghts />
    </div>
  );
};

export default TourLeft;
