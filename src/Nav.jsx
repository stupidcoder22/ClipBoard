import React from "react";

const Nav = ({ hidetext }) => {
  return (
    <ul
      className={`${hidetext} text-2xl text-center space-y-5 justify-center md:flex md:flex-row md:justify-end md:space-x-5 md:text-xl md:font-semibold md:mt-0 md:space-y-0`}
    >
      <li className="text-[#51C8B6] hover:text-[#51C8B6]">Home</li>
      <li className="hover:text-[#51C8B6]">Product</li>
      <li className="hover:text-[#51C8B6]">Services</li>
      <li className="hover:text-[#51C8B6]">Help</li>
    </ul>
  );
};

export default Nav;
