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
            Pick up and drop back at your location(in Dubai City)
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Pick-up time between 3:00pm to 3:30pm and drop back approximately
            9:00pm
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Desert Driving & Dune bashing in 4wds by professional drivers in
            high sand dunes
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Sand Boarding & Viewing Dubai Desert Sunset
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Camel Ride
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Your Reaction Video during the safari
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Driver/guide
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Bottled water
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            On arrival at our desert campsite welcome Coffee & Tea
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Unlimited Soft Drinks and Mineral Water
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Your Reaction video during safari
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            International Buffet dinner with Barbeque (Vegetarian and
            Non-vegetarian dishes)
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Mesmerizing Belly Dance Entertainment
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Enchanting Tanoura Dance Show
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
            Fire Dance Show
          </li>
          <li className="mb-4">
            <FcCheckmark className=" inline-block mr-2 text-[24px] mt-[-8px]" />
          </li>
        </ul>

        <ul>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />
            Vip Table in the camp (Available to Upgrade)
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Self Drive Buggy/Quad Rides (Available for Rent)
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Alcoholic drinks (Available to purchase)
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Henna Painting (Available to purchase)
          </li>
          <li className="mb-4">
            <GiTireIronCross
              className=" text-red-600 inline-block mr-2 text-[20px] mt-[-8px]"
            />Sheesha (Available for rent)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Lncluded;
