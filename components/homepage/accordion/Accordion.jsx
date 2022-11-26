import React, { useState } from 'react';
import Container from '../../common/Container';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

const Accordion = () => {
  const [select, setSelect] = useState(null);

  const trogle = (i) => {
    if (select === i) {
      setSelect(null);
    } else {
      setSelect(i);
    }
  };
  const dataEven = [
    {
      id: 1,
      que: 'What is a desert safari?',
      ans: 'The typical planning of activities within a Bedouin-style camp is known as Desert Safari Dubai, which includes belly dancing, sandboarding, camel rides, henna tattoos, costume captures, as well as other entertainment shows and rides.',
    },
    {
      id: 2,
      que: 'How many people can sit in a car for Dune bashing?',
      ans: 'It is possible to sit with 4 to 5 people in a car for dune bashing. However, it totally depends on the car type and size, like a land cruiser has a capacity of around 7-8 people. Also, carrying too much luggage or having many people (more than capacity) in the car may result in an unsatisfying safari trip.',
    },
    {
      id: 3,
      que: 'What is a desert safari? Do you offer quad biking, camel riding, BBQ dinner in your desert safari packages?',
      ans: 'Yes absolutely. We offer camel riding, a delicious BBQ dinner, quad biking, sand skiing, and tickets to selected traditional Arab programs such as belly dance, fire shows, and tanoura dance. All these are included in our premium, VIP, or luxury Dubai desert safari packages. We can also arrange it at your request with additional charges.',
    },
    {
      id: 4,
      que: 'Is Dune bashing safe for a pregnant lady?',
      ans: 'Desert safari Dubai is a great adventure and memorable thing to do with your family and loved ones. However, Dune bashing is an integral part of this trip where people inside the SUV, Jeep, or land cruiser may experience unstoppable shaking. It sounds unsafe for a pregnant lady or infant. You can skip this part and try other things for the safety purpose of your family or child.',
    },
    {
      id: 5,
      que: 'What to wear during the desert safari Dubai tour?',
      ans: "Wearing a regular comfortable outfit is suggested. When you're dune bashing and sand skiing, you'll feel much more at ease. Also, it's a lot better if you wear sandals rather than shoes since the sand gets inside them and cause trouble.",
    },
    {
      id: 6,
      que: 'What do I need to carry on my desert safari Dubai trip?',
      ans: 'It is highly recommended to keep only essentials with you. More bulky items and things may cause inconvenience in your trip. To take videos and photos, you may carry a camera, mobile, and better to keep a small backpack for essential commodities.',
    },
  ];

  const dataOdd = [
    {
      id: 7,
      que: 'How to do desert safari booking in Dubai?',
      ans: 'Book online by clicking on the Book Now button',
    },
    {
      id: 8,
      que: 'Will I get vegetarian food on my desert safari trip in Dubai?',
      ans: 'Yes! We offer foods for both vegetarians and non-vegetarian visitors in snacks as well as the main course. There are many veg dishes like Cabbage Salad, samosa, rice, soft drinks, noodles, veg curry, etc. For non-vegans, we offer chicken and lamb kebab, a BBQ buffet dinner, along with special Shisha.',
    },
    {
      id: 9,
      que: 'What should I bring with me on the Dubai desert safari tour?',
      ans: 'Only bring the things you need, such as your phone, camera, sunglasses, etc. A handbag may be used to carry your belongings.',
    },
    {
      id: 10,
      que: 'What are the timings of the Dubai desert safari?',
      ans: 'There are different timings of the safari in the desert of Dubai depending on if you want morning desert safari, evening safari, or overnight desert safari. Evening safari starts after noon before sun sets. In contrast, morning and overnight safaris begin with their respective times of morning and evening.',
    },
    {
      id: 11,
      que: 'What are the timings and ticket prices for Dubai desert safari tours?',
      ans: 'Timing and ticket prices depend on the package you select.',
    },
    {
      id: 12,
      que: 'What are the other popular Dubai activities?',
      ans: 'Here is the list of other popular Dubai activities that you can go to while on your trip to UAE:Visiting Burj Khalifa Dhow Cruise Dubai MarinThe Dubai FountainHeritage Village The Dubai Mallmany more...',
    },
    {
      id: 13,
      que: 'Can I bring an infant to desert safari?',
      ans: 'You must be happy to know that there is no age limit for desert safari Dubai; you can bring an infant. However, if an infant is too small (less than 2 years), you probably would not go with him on dune drive. Or you may skip the dune ride and try out other fun activities.',
    },
  ];

  return (
    <section id="Questions">
      <Container>
        <div className="py-[70px]">
          <div className="flex items-center justify-center mb-[50px]">
            <h2 className="text-[18px] font-[600]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-[20px]">
            <div>
              {dataOdd?.map((item) => {
                return (
                  <div key={item.id} className="mb-[10px]">
                    <div
                      className="flex items-start justify-between"
                      onClick={() => trogle(item.id)}
                    >
                      <h2 className="text-[18px] font-[600] cursor-pointer mb-[20px] mt-0">
                        {item.que}
                      </h2>
                      <button className="text-[22px] text-brand-red pt-0">
                        {select === item.id ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </button>
                    </div>
                    <div className="">
                      <p
                        className={`text-[14px] font-normal text-[#123a3280] mb-[20px] duration-300 ${
                          select === item.id ? '' : 'hidden'
                        } `}
                      >
                        {item.ans}
                      </p>
                    </div>
                    <div className="border-brand-light-gray border-dashed border-b-2 "></div>
                  </div>
                );
              })}
            </div>
            <div>
              {dataEven?.map((item) => {
                return (
                  <div key={item.id} className="mb-[10px]">
                    <div
                      className="flex items-start justify-between"
                      onClick={() => trogle(item.id)}
                    >
                      <h2 className="text-[18px] font-[600] cursor-pointer mb-[20px] mt-0">
                        {item.que}
                      </h2>
                      <button className="text-[22px] text-brand-red pt-0">
                        {select === item.id ? (
                          <IoIosArrowUp />
                        ) : (
                          <IoIosArrowDown />
                        )}
                      </button>
                    </div>
                    <div className="">
                      <p
                        className={`text-[14px] font-normal text-[#123a3280] mb-[20px] duration-300 ${
                          select === item.id ? '' : 'hidden'
                        } `}
                      >
                        {item.ans}
                      </p>
                    </div>
                    <div className="border-brand-light-gray border-dashed border-b-2 "></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Accordion;
