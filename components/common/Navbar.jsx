import { CgMenuBoxed } from 'react-icons/cg';

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="bg-brand">
        <div className="p-2 ">
          <CgMenuBoxed color="white" size={24} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
