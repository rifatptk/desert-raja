import React, { useState } from "react";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";

const Overview = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <div id="over_view" className="text-[#5e6d77]">
        <h1 className="mt-5 mb-8 text-[24px] font-semibold text-brand-dark-blue">
          Overview
        </h1>
        <div className={`${show ? "h-[80px]" : "h-auto"} overflow-hidden`}>
          <h2>Evening Desert Safari Dubai Overview</h2>
          <p>
            <b>Timings:</b> 02:30 PM to 09:00 PM
          </p>
          <p>
            <b>Batch size:</b> 5 to 5 passengers per 4*4 Car
          </p>
          <p>
            <b>Pick-up/ Drop locations:</b>
          </p>
          <p>Free 4*4 Pick up: Round trip transfers from hotel in a 4 *4.</p>
          <p>
            Desert Safari in Dubai is an uttermost experience that will give you
            an adrenaline rush soon as you hit the sands with a car having full
            potential in terms of torque and power. This adrenaline-inducing
            adventure is pumped up with an extensive range of activities like
            shisha smoking, Belly dance show, Tanura show, and Fire show.
            Evening desert safari tour is a combo of thrilling safari adventures
            and an experience of traditional Arabic culture.
          </p>
          <p className=" underline">
            <b>About the activity:</b>
          </p>
          <ul>
            <li>
              The operational hours of this activity are 2/3:00 pm to 9/10:00
              pm.
            </li>
            <li>Free Unlimited Tea & Coffee available in Camp.</li>
            <li>Separate facilities in the Camp side for Men and Women.</li>
            <li>
              Souvenir Shop, Sand Art Shop, Fresh juice Shop, Private Shisha at
              the table, Special Brand Tea & coffee at Boston Corner Shop and
              Long Camel safari are on extra charges.
            </li>
          </ul>
          <p className=" underline">
            <b>Don’t Miss:</b>
          </p>
          <ul>
            <li>Quad Biking in an open desert</li>
            <li>Horse Riding</li>
            <li>Falcon Photography</li>
          </ul>
          <p className=" underline">
            <b>How to Reach?</b>
          </p>
          <ul>
            <li>
              The free 4*4 shared transfers are included from the
              hotel/Apartment.
            </li>
          </ul>
        </div>
      </div>
        {
            show ?  <button
            onClick={() => setShow((priv) => !priv)}
            className="mt-5 text-brand text-[14px] hover:underline flex items-center"
          >
            View More <RiArrowDownSFill className="text-[20px]" />
          </button>:
           <button
           onClick={() => setShow((priv) => !priv)}
           className="mt-5 text-brand text-[14px] hover:underline flex items-center"
         >
           View Less <RiArrowUpSFill className="text-[20px]" />
         </button>
        }
    </div>
  );
};

export default Overview;
