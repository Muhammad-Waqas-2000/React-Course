import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="flex ">
        <ul className="flex gap-3 w-[100%] mr-5 justify-end cursor-pointer">
          <li className="">
            <NavLink to="/"
                className={({isActive})=>

                  ` ${
                    isActive? "bg-orange-400 text-lg font-medium":
                    "bg-white-700"
                  }
                  `
                }
            >Home</NavLink>
          </li>
          <li>
           <NavLink to="/services"
            className={({isActive})=>
          
                `${
                  isActive?"bg-orange-400 text-lg font-medium":
                  "bg-white-700"
                }`
          } 
           >Services</NavLink>
          </li>
          <li>
            <NavLink to="/contacts"
            className={({isActive})=>
              `${
                isActive?"bg-orange-400 text-lg font-medium":
                "bg-white-700"
              }`
          }
            >Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
