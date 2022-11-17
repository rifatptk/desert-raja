import React from "react";
import Container from "../common/Container";

const Discount = () => {
  return (
    <section id="discount">
      <Container>
        <div className="py-5 md:py-[100px] flex items-start justify-between">
          <div className="flex-1 flex flex-col items-center text-center md:items-start md:text-start">
            <h3 className="text-[24px] font-caveat font-bold text-brand-teal mb-[8px]">Multi-Tours</h3>
            <h2 className="text-[36px] font-[600] mb-2">Discount on Quantity</h2>
            <img src="/assets/images/home/Vector.svg" className="mb-[40px]" alt="" />
            <p className="text-[14px] font-normal text-[#123a3280] lg:pr-[120px] mb-2">
              Book a tour today and enjoy exclusive savings on any future trip
              you book! There’s no time limit or expiry date on these savings
            </p>
            <img src="/assets/images/home/discount-296-2.png" alt="" />
            <button className=" border-brand-red border-dashed border-b-2 text-[14px] font-[600] md:mt-[60px] mt-5 text-brand-red">MORE ABOUT US</button>
          </div>
          <div className="flex-1 hidden md:flex">
            <img src="/assets/images/home/discount-right-628x641.png" alt="" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Discount;
