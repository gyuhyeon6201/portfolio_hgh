import { useState } from "react";
import menuData from "../asset/menu.json";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

const Menu = ({ menuOpen, closeMenu }) => {
  // 열린 서브메뉴 인덱스 관리
  const [openIdx, setOpenIdx] = useState(null);

  const toggleSubMenu = (id) => {
    if (openIdx === id) {
      setOpenIdx(null);
    } else {
      setOpenIdx(id);
    }
  };

  return (
    <nav className={`side-menu ${menuOpen ? "menuOpen" : ""}`}>
      <IoCloseCircle className="menu-close-icon" onClick={closeMenu} />
      <div>
        <ul>
          {menuData.map((menuItem, idx) => {
            const isOpen = openIdx === menuItem.id;
            return (
              <li key={idx} className="menu-title">
                <div
                  onClick={() => {
                    menuItem.subMenu && toggleSubMenu(menuItem.id);
                  }}
                >
                  <span>{menuItem.title}</span>
                  <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
                </div>
                {menuItem.subMenu && (
                  <ul className={isOpen ? "open" : "close"}>
                    {menuItem.subMenu.map((sub, subIdx) => {
                      return (
                        <li key={subIdx} className="sub-menu">
                          {sub}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Menu;
