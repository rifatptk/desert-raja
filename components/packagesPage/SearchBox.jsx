import Link from "next/link";
import React from "react";
import Container from "../common/Container";
import {MdKeyboardArrowDown} from "react-icons/md"
import {TbCalendarTime} from "react-icons/tb"
import {AiOutlineUsergroupAdd} from "react-icons/ai"
import DateRange from "./DateRange";

const SearchBox = () => {
  return (
    <section id="search__box">
      <Container>
        <div className="py-2">
          <div className="flex items-center gap-2">
            <Link href="/"><span className="font-bold text-[14px]">Home </span></Link>
            <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
            <p className="text-[13px]">Packages</p>
          </div>

          <div className="py-[50px] lg:flex-row lg:gap-[30px] items-center justify-center gap-[10px] flex flex-col">
            <div className=" cursor-pointer w-full lg:max-w-[300px] h-[50px] bg-brand-light-gray px-3 rounded-3xl border border-gray flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TbCalendarTime />
                <p className="text-[14px] font-bold">When</p>
              </div>
              <div className="text-[27px]">
                    <MdKeyboardArrowDown />
              </div>
            </div>
            <div className=" cursor-pointer w-full lg:max-w-[300px] h-[50px] bg-brand-light-gray px-3 rounded-3xl border border-gray flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <AiOutlineUsergroupAdd />
                    <p className="text-[14px] font-bold">Guests</p>
                </div>
                <div className="text-[27px]">
                <MdKeyboardArrowDown />
                </div>
            </div>
            <div>
                <button className=" bg-brand py-[14px] px-[40px] rounded-full text-[14px] font-bold uppercase text-white transition-all duration-300 hover:translate-y-1">Search</button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SearchBox;


