import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoLogoGithub } from "react-icons/io";
import { CgServer } from "react-icons/cg";

const Footer = () => {
  return (
    <div className="footer">
      <h1 className="footer-title">읽어주셔서 감사합니다.</h1>
      <p className="footer-sentence">
        "<span className="design">사용자 경험</span>을{" "}
        <span className="coding">고려한 설계</span>를 <br />
        실제 서비스로 전환하겠습니다."
      </p>
      <div className="my-info">
        <div>
          <IoPersonSharp className="person-icon" />
          <p>황규현</p>
        </div>
        <div>
          <FaPhone />
          <p>010-6410-9322</p>
        </div>
        <div>
          <MdEmail />
          <p>dnal303@naver.com</p>
        </div>
        <button
          onClick={() => window.open("https://github.com/gyuhyeon6201/portfolio_hgh", "_blank", "noopener,noreferrer")}
        >
          <IoLogoGithub />
          <p>GITHUB</p>
        </button>
      </div>
    </div>
  );
};

export default Footer;
