import { useState } from "react";
import menuData from "../asset/menu.json";
import { IoCloseCircle } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const Menu = ({ menuOpen, closeMenu }) => {
  const navigate = useNavigate();
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
      <IoCloseCircle
        className="menu-close-icon"
        onClick={() => {
          setOpenIdx(null);
          closeMenu();
        }}
      />
      <div>
        <ul>
          {menuData.map((menuItem, idx) => {
            const isOpen = openIdx === menuItem.id;
            return (
              <li key={idx} className="menu-title">
                <div
                  onClick={() => {
                    if (menuItem.subMenu) {
                      toggleSubMenu(menuItem.id);
                    } else if (menuItem.id === 3) {
                      navigate("/publishing");
                      setOpenIdx(null);
                      closeMenu();
                    }
                  }}
                >
                  <span>{menuItem.title}</span>
                  {/* <span>{isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}</span> */}
                  <span>{isOpen ? " ▲" : " ▼"}</span>
                </div>
                {menuItem.subMenu && (
                  <ul className={isOpen ? "open" : "close"}>
                    {menuItem.subMenu.map((sub, subIdx) => {
                      return (
                        <li
                          key={subIdx}
                          className="sub-menu"
                          onClick={() => {
                            navigate(sub.path);
                            setOpenIdx(null);
                            closeMenu();
                          }}
                        >
                          {sub.name}
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
