import React, { useState } from "react";
import { menuNavItems } from "../../utils/constants";
import { Link } from "react-router-dom";

function Dropdown() {
  return (
    <>
      <ul className="services-submenu">
        {menuNavItems.map((item) => {
          return (
            <li className="dropdown__li" key={item.id}>
              <Link to={item.path} className={item.className}>
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
