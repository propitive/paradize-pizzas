import React, { useState } from "react";
import { menuNavItems } from "../../utils/constants";
import { Link } from "react-router-dom";

function Dropdown() {
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <>
      <ul
        className={isDropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setIsDropdown(!isDropdown)}
      >
        {menuNavItems.map((item) => {
          return (
            <li className="dropdown__li" key={item.id}>
              <Link
                to={item.path}
                className={item.className}
                onClick={() => setIsDropdown(false)}
              >
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
