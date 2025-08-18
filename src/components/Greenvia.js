import { useNavigate } from "react-router-dom";

const Greenvia = () => {
  const navigate = useNavigate();
  return (
    <div className="details">
      <h1 className="title">Greenvia</h1>
      <h3 className="sub-title">블로그형 웹페이지</h3>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/main_project/greenvia.png`}
        />
        <div className="link-btn">
          <button onClick={() => navigate("/greenvia-overview")}>OVERVIEW</button>
          <button onClick={()=>window.open("https://github.com/gyuhyeon6201/project.github.io/tree/main/0530_blog_Greenvia", "_blank", "noopener,noreferrer")}>GITHUB </button>
          <button onClick={()=>window.open("https://gyuhyeon6201.github.io/project.github.io/0530_blog_Greenvia/index.html", "_blank", "noopener,noreferrer")}>SITE </button>
        </div>
        <div className="detail-wrap">
          <p>
            ‘Greenvia’는 스마트 농업 솔루션 브랜드로, 농가 대상의 서비스 소개 및
            신청을 목적으로 제작된 <span>반응형 웹사이트</span>입니다.
          </p>
          <p>
            <span>HTML과 SCSS를 기반</span>으로 기획, 디자인, 퍼블리싱을 모두 직접 수행한
            프로젝트입니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>HTML5, CSS3, SCSS, GIT/GitHub, Figma, PhotoShop</li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>
                UI 디자인 방식 : Figma를 이용한 디자인 시스템 구축 후 코드 구현
              </li>
              <li>
                레이아웃 제작 방식 : Flex 및 Grid 기반의 반응형 레이아웃 제작
              </li>
              <li>라이브러리 : react-slick, swiper, react-icons</li>
              <li>제작기간 : 25.05.01~25.05.02 (2일)</li>
              <li>제작 참여율 : 100% (개인 프로젝트)</li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greenvia;