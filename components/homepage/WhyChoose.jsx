import React from "react";
import Container from "../common/Container";

const WhyChoose = () => {
  return (
    <section id="WhyChoose">
      <Container>
        <div className="lg:flex items-center justify-between py-[100px] lg:relative">
          <div className="flex-[3] flex items-center justify-start flex-col lg:items-start">
            <div className="lg:absolute lg:top-[100px] lg:left-0">
              <h2 className="text-[23px] font-caveat font-bold text-brand-teal">About Us</h2>
            </div>
            <img src="/assets/images/home/CoE-500x500-removebg-preview-400x300.png" alt="" />
          </div>
          <div className="flex-[2]">
            <p className="text-[14px] font-normal text-[#123a3280] leading-[20px] mb-[20px]">
              There are many service providers of desert safari in Dubai, but
              not all are the best. We don’t boast, but with more than 10000
              trusted customers, we feel proud of our desert safari services.
              Here are the reasons why you choose us to experience the best
              desert safari in Dubai:
            </p>
            <h2 className="text-[20px] font-[500] text-brand-dark-blue mb-[40px]">Why Choose Dubai’s #1 Best Desert Safari Company</h2>
            <p className="text-[14px] mb-[20px] font-normal">Book our tour to know why we got the ” Badge of Excellence ” Award from Viator and TripAdvisor.</p>
            <p className="text-[14px] mb-[20px] font-normal">We have more than 5 years of experience in planning and organising desert safari trips.</p>
            <p className="text-[14px] mb-[20px] font-normal">To this day, we have planned more than 7000 desert safaris in Dubai.</p>
            <p className="text-[14px] mb-[20px] font-normal">More than 100+ 4X4 Vehicles never let you wait for your desert safari ride.</p>
            <p className="text-[14px] mb-[20px] font-normal">We offer you a free hotel pickup and drop facility and the best guidance throughout your desert safari.</p>
            <p className="text-[14px] mb-[20px] font-normal">It is easy to start with us, and there are no additional fees or hidden charges.</p>
            <p className="text-[14px] mb-[20px] font-normal">Our 50+ desert safari planners are experts at planning your safari trip.</p>

            <button className=" border-brand-red border-dashed border-b-2 text-[14px] font-[600] mt-3 text-brand-red">MORE ABOUT US</button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyChoose;
