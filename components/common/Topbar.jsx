import { FaPhoneAlt } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { BsInstagram } from 'react-icons/bs';
import { TfiYoutube } from 'react-icons/tfi';
import Link from 'next/link';

const Topbar = () => {
  return (
    <div className="hidden md:block">
      <div className="flex justify-between text-sm py-6 text-brand-light-gray">
        <div className="flex gap-4">
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            <a className="hover:underline cursor-pointer">971581373584</a>
          </div>
          <div className="flex gap-2 items-center">
            <HiMail />
            <a className="hover:underline cursor-pointer">
              dubai@desertraja.com
            </a>
          </div>
        </div>

        <div className="flex gap-4 items-center">
          <div className="cursor-pointer">
            <BsInstagram />
          </div>
          <div className="cursor-pointer">
            <TfiYoutube />
          </div>
          <div className="flex gap-5 ml-5 items-center ">
            <Link href="" className="hover:underline">
              Login
            </Link>
            <Link href="" className="hover:underline">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
