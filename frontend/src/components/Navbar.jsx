import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-start px-5 py-4 bg-zinc-900">
        <div className="logo mr-5">
          <Link to="/">
            <img
              width={80}
              src="https://files.codingninjas.in/logo_variants-white-25005.png"
              alt=""
            />
          </Link>
        </div>
        <ul className="flex text-white gap-5 text-md cursor-pointer">
          <Link to="/">
            <li>Home</li>
          </Link>
          <li>BootCamps</li>
          <li>Events</li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
