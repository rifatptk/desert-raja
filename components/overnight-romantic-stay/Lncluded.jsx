import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { GiTireIronCross } from "react-icons/gi";

const Lncluded = () => {
  return (
    <div className="mt-5">
      <h2 className="text-[24px] font-semibold mb-5">Included/Excluded</h2>
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        <ul className="text-[14px] text-[#768090]">
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Dinner
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Breakfast
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Pick up from your Hotel or Residence in Dubai or Sharjah
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Desert dune drive 4x4
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Sunset photographic opportunity
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Camel riding
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Shisha facility
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Photographic opportunity with Arabic costumes
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Henna designing
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            BBQ dinner (vegetarian and non-vegetarian)
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Belly dance (During Ramadan and Dry Days not Available)
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Tanura performance
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Sleeping bags and tents
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Overnight tea / coffee arrangement
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Toilet facilities for men and women
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Morning breakfast, tea and coffee
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Drop off at your Hotel
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Live BBQ
          </li>
        </ul>

        <ul>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />
            Alcoholic Drinks (Available for Pre-Purchase)
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Quad Bike
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Souvenir shop
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Sand Art
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Sheesha / Hookah (Available for Rent)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lncluded;
