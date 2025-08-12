import { GoHomeFill } from "react-icons/go";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Menu from "./Menu";
import { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 홈 아이콘 클릭
  const handleHomeClick = () => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // 메뉴 아이콘 클릭 - 메뉴창 열기
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // X 아이콘 클릭 - 메뉴창 닫기
  const closeMenu = ()=>{
    setIsMenuOpen(false);
  }

  return (
    <div className="header">
      <GoHomeFill className="home-icon" onClick={handleHomeClick} />
      <HiOutlineMenuAlt3 className="menu-icon" onClick={toggleMenu} />
      <Menu menuOpen={isMenuOpen} closeMenu={closeMenu} />
      {/* <HiMenuAlt3 /> */}
    </div>
  );
};

export default Header;
