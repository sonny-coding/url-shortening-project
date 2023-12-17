import logo from "../images/logo.svg";
import MenuIcon from "../svgComponents/MenuIcon";

const Nav = () => {
  return (
    <div className="flex items-center justify-between">
      {/* <p>Shortly</p> */}
      <a href="/">
        <img src={logo} alt="logo" />
      </a>
      {/* <p>Logo</p> */}
      <div className="w-[40px] h-auto hover:cursor-pointer">
        <MenuIcon color="#9E9AA8" />
      </div>
    </div>
  );
};

export default Nav;
