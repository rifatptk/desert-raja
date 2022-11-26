import React from "react";
import { MdMessage } from "react-icons/md";
import Container from "../common/Container";
import {BsFillPencilFill} from 'react-icons/bs'

const TestButton = () => {
  return (
    <Container>
      <div className="w-full flex items-center justify-end">
        <div className="group w-[60px] h-[60px] rounded-full button-our flex items-center justify-center text-white overflow-hidden cursor-pointer transition-all duration-500 relative">
          <button className=" text-[19px] group-hover:hidden"><MdMessage /></button>
          <button className=" bg-white w-[60px] h-[60px] absolute top-0 left-0  text-[17px] text-brand-sky scale-0  group-hover:scale-100 rounded-full transition-all duration-500"><BsFillPencilFill/></button>
        </div>
      </div>

      <button className=" bg-red-400 p-[25px] text-[17px] text-brand-sky scale-100  hover:scale-100 group-hover:flex transition-all duration-500"><BsFillPencilFill/></button>
    </Container>
  );
};

export default TestButton;
