import { useState } from "react";
import openM from "./icon-hamburger.svg";
import closeM from "./icon-close.svg";
const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <header className="  relative after:-z-10 after:absolute after:bg-[#eef3f6] after:right-0 after:top-0 after:rounded-bl-[5rem] after:w-1/2 lg:after:w-1/2 after:h-[530%] ">
      <div className="container flex items-center justify-between lg:w-[1111px] xl:w-[90%] md:mx-auto p-8">
        <img src="images/logo.svg" alt="logo" className="w-7 md:w-10" />
        <img
          src={open ? closeM : openM}
          // src="images/icon-hamburger.svg"
          alt="menu"
          className="cursor-pointer w-7 md:w-10 md:hidden"
          onClick={handleClick}
        />
        <nav className=" w-4/5 absolute z-20 shadow-2xl top-full bg-transparent md:shadow-none md:bg-none md:static md:w-auto md:block">
          <ul
            className={`flex-col transition-all md:p-5 md:flex-row  h-0 overflow-hidden flex items-center justify-around uppercase gap-5 md:gap-10 text-[#242942] font-bold ${
              open ? "flex-col h-[280px] p-5 " : ""
            }`}
          >
            <li className=" cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#242942] after:transition-all after:h-[1px] hover:after:w-full ">
              Product
            </li>
            <li className=" cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#242942] after:transition-all after:h-[1px] hover:after:w-full ">
              Features
            </li>
            <li className=" cursor-pointer relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#242942] after:transition-all after:h-[1px] hover:after:w-full ">
              Pricing
            </li>
            <li className="w-full h-[1px] md:w-1.5 md:h-1.5 rounded-full bg-[#a0a1ac]"></li>
            <li className=" cursor-pointer text-[#a0a1ac] relative after:absolute after:bottom-0 after:left-0 after:w-0 after:bg-[#a0a1ac] after:transition-all after:h-[1px] hover:after:w-full">
              login
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
