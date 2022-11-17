import Link from 'next/link';
import { RiArrowLeftSLine } from 'react-icons/ri';
import RiBackdrop from './Backdrop';

const Sidebar = ({
  setshowSidebar,
  settoursExpanded,
  navLinks,
  toursExpanded,
}) => {
  return (
    <RiBackdrop close={() => setshowSidebar(false)}>
      <div
        className="fixed top-0 left-0 bottom-0 w-[300px] bg-white divide-y"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-brand-light-gray px-4 py-3">
          <RiArrowLeftSLine
            size={24}
            className="text-brand-gray cursor-pointer"
            onClick={() => setshowSidebar(false)}
          />
        </div>

        {/* links */}
        {navLinks.map((link, i) => (
          <div key={i} className="px-6 py-5 text-sm font-[500] cursor-pointer">
            {!!link.subLinks ? (
              <>
                <div className="flex justify-between items-center">
                  <span>{link.title}</span>
                  <RiArrowLeftSLine
                    size={24}
                    className="text-brand-gray -rotate-90"
                    onClick={() => settoursExpanded(!toursExpanded)}
                  />
                </div>
                {toursExpanded && (
                  <div className="divide-y">
                    {link.subLinks.map((link, i) => (
                      <div
                        key={i}
                        className="px-6 py-5 text-sm font-[500] cursor-pointer"
                      >
                        <Link href={link.to}>{link.title}</Link>
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <Link href={link.to}>{link.title}</Link>
            )}
          </div>
        ))}
        {/* auth */}
        <div className="flex justify-center gap-5 pt-20 font-bold border-t-0">
          <Link
            href=""
            className="hover:underline bg-brand-light-gray px-6 py-2 rounded-full"
          >
            Login
          </Link>
          <Link
            href=""
            className="hover:underline bg-brand-light-gray px-6 py-2 rounded-full"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </RiBackdrop>
  );
};

export default Sidebar;
