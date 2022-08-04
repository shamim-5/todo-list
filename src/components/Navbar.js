import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li
        style={{ cursor: "pointer" }}
        onClick={() => {
          const anchor = document.querySelector("#complete-link");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        <Link to="#complete-link">CompletedTo-Do</Link>
      </li>
      <li
        style={{ cursor: "pointer" }}
        onClick={() => {
          const anchor = document.querySelector("#pending-link");
          anchor.scrollIntoView({ behavior: "smooth", block: "center" });
        }}
      >
        <Link to="#pending-link">PendingTo-Do</Link>
      </li>
    </>
  );
  return (
    <div>
      <div className="drawer drawer-end text-white bg-[#0A1E33]">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col ">
          <div className="w-full navbar sticky top-0 z-40  bg-[#0B1221]  px-9 lg:px-24">
            <div className="flex-1  ">
              <Link to="/">Say hII to To-Do</Link>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal  ">{menuItems}</ul>
            </div>
            <div className="flex-none lg:hidden ">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current "
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
          </div>
          <div className="px-9 lg:px-24 pt-6">{children}</div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-52 bg-[#0B1221]">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
