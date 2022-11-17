import { useRouter } from 'next/router';
import { useState } from 'react';
import { CgMenuBoxed } from 'react-icons/cg';
import Sidebar from './Sidebar';
import { RiArrowLeftSLine } from 'react-icons/ri';
import Link from 'next/link';

const navLinks = [
  { title: 'HOME', to: '/' },
  {
    title: 'TOURS',
    to: '',
    subLinks: [
      { title: 'Evening Deser Safari', to: '' },
      { title: 'Morning Deser Safari', to: '' },
      { title: 'Overnight Deser Safari', to: '' },
    ],
  },
  { title: 'ABOUT US', to: '' },
  { title: 'CONTACT', to: '' },
  { title: 'TERMS', to: '' },
  { title: 'PRIVACY POLICY', to: '' },
];

const Navbar = () => {
  const [activeLink, setactiveLink] = useState(0);
  const [showSidebar, setshowSidebar] = useState(false);
  const [toursExpanded, settoursExpanded] = useState(false);
  const router = useRouter();
  return (
    <div id="navbar">
      <div className="bg-brand md:bg-white/40 md:rounded">
        {/* navbar */}
        <div className="py-2 md:py-8 lg:py-3 px-4 flex justify-between items-center">
          <CgMenuBoxed
            color="white"
            size={32}
            className="cursor-pointer lg:hidden"
            onClick={() => setshowSidebar(true)}
          />
          <img
            src="/assets/images/common/logo-text.png"
            alt=""
            className="w-[100px] cursor-pointer md:hidden"
            onClick={() => router.push('/')}
          />
          <img
            src="/assets/images/common/logo.png"
            alt=""
            className="w-[80px] cursor-pointer hidden md:block"
            onClick={() => router.push('/')}
          />
          <div>
            <div className="hidden lg:flex items-center">
              {/* links */}
              {navLinks.map((link, i) => (
                <div
                  key={i}
                  onClick={() => setactiveLink(i)}
                  className={`px-6 py-5 text-sm cursor-pointer font-bold ${
                    activeLink === i ? 'text-brand' : ''
                  }`}
                >
                  {!!link.subLinks ? (
                    <>
                      <div className="relative ">
                        <div
                          className={`flex justify-between items-center ${
                            toursExpanded ? 'text-brand' : ''
                          } transition-colors`}
                          onMouseOver={() => settoursExpanded(true)}
                        >
                          <span>{link.title}</span>
                          <RiArrowLeftSLine size={24} className="-rotate-90" />
                        </div>
                        {toursExpanded && (
                          <div
                            className="absolute -top-8 w-[200px]"
                            onMouseOver={() => settoursExpanded(true)}
                            onMouseOut={() => settoursExpanded(false)}
                          >
                            <div className="bg-transparent h-20 "></div>
                            <div className=" bg-white divide-y">
                              {link.subLinks.map((link, i) => (
                                <div
                                  key={i}
                                  className="px-6 py-5 text-sm font-[500] cursor-pointer hover:text-brand transition-colors"
                                >
                                  <Link href={link.to}>{link.title}</Link>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={link.to}
                      className="hover:text-brand transition-colors"
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* sidebar */}
        {showSidebar && (
          <Sidebar
            setshowSidebar={setshowSidebar}
            navLinks={navLinks}
            toursExpanded={toursExpanded}
            settoursExpanded={settoursExpanded}
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
