import { useState } from 'react';
import { AiOutlineFullscreen } from 'react-icons/ai';
import { AiOutlineFullscreenExit } from 'react-icons/ai';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { RiShareForwardBoxFill } from 'react-icons/ri';

const RiSlider = ({ items }) => {
  const [selected, setSelected] = useState(0);
  const [full, setfull] = useState(false);
  const [hovered, sethovered] = useState(false);

  function goPrev() {
    if (selected < 1) {
      return;
    }
    setSelected((prev) => prev - 1);
  }
  function goNext() {
    if (selected === items.length - 1) {
      return;
    }
    setSelected((prev) => prev + 1);
  }
  return (
    <div
      className={`w-full bg-white select-none ${
        full ? 'fixed inset-0 z-50' : 'my-8'
      }`}
    >
      {/* main image */}
      <div
        className="relative w-full bg-gray-900"
        onMouseOver={() => sethovered(true)}
        onMouseLeave={() => sethovered(false)}
      >
        <img
          src={items[selected]}
          alt=""
          className={`mx-auto w-full aspect-video ${
            full ? 'h-[calc(100vh-146px)] object-contain' : ''
          }`}
        />

        {/* controller icons */}
        <div>
          <div
            className={`${
              !hovered ? 'opacity-0' : ''
            } transition-opacity absolute top-5 right-[100px] text-white p-2 rounded-full cursor-pointer bg-brand-dark-blue/80`}
          >
            <RiShareForwardBoxFill size={24} />
          </div>

          <div
            className={`${
              !hovered ? 'opacity-0' : ''
            } transition-opacity absolute top-5 right-5 text-white p-2 rounded-full cursor-pointer bg-brand-dark-blue/80`}
          >
            <MdOutlineFavoriteBorder size={24} />
          </div>

          {!!selected > 0 && (
            <div
              onClick={goPrev}
              className={`${
                !hovered ? 'opacity-0' : ''
              } transition-opacity absolute top-[45%] left-5 text-white p-2 rounded cursor-pointer bg-brand-dark-blue/80`}
            >
              <AiOutlineArrowLeft size={24} />
            </div>
          )}

          {!!(selected < items.length - 1) && (
            <div
              onClick={goNext}
              className={`${
                !hovered ? 'opacity-0' : ''
              } transition-opacity absolute top-[45%] right-5 text-white p-2 rounded cursor-pointer bg-brand-dark-blue/80`}
            >
              <AiOutlineArrowRight size={24} />
            </div>
          )}

          <div
            onClick={() => setfull(!full)}
            className={`${
              !hovered ? 'opacity-0' : ''
            } transition-opacity absolute bottom-5 right-5 text-white p-2 rounded cursor-pointer bg-brand-dark-blue/80`}
          >
            {full ? (
              <AiOutlineFullscreenExit size={24} />
            ) : (
              <AiOutlineFullscreen size={24} />
            )}
          </div>
        </div>
      </div>

      {/* slider */}
      <div
        className={`flex gap-2 py-2 overflow-auto [&::-webkit-scrollbar]:hidden ${
          full ? 'bg-gray-900' : ''
        }`}
      >
        {items.map((el, i) => (
          <img
            onClick={() => setSelected(i)}
            key={i}
            src={el}
            alt=""
            className={`w-20 md:w-[130px] aspect-square object-cover border-2 cursor-pointer ${
              i === selected ? 'border-brand' : 'border-transparent'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default RiSlider;
