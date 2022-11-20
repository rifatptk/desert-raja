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
            Pickup and Drop to Hotel within Dubai city limits.
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Desert driving and dune bashing in a safe vehicle driven by professionals.
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Sandboarding
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Camel trekking and camel riding.
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Reaction video during desert safari.
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Mineral water
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Coffee and Dates
          </li>
         
        </ul>

        <ul>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />
            Quad Biking
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Fire Show
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Belly Dance
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Food and Beverages such as soft drinks
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lncluded;
