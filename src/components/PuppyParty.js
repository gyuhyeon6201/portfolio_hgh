import { useNavigate } from "react-router-dom";

const PuppyParty = () => {
  const navigate = useNavigate();
  return (
    <div className="details">
      <h1 className="title">Puppy Party!</h1>
      <h3 className="sub-title">쇼핑몰 프로젝트</h3>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/main_project/puppyparty.png`}
        />
        <div className="link-btn">
          <button onClick={() => navigate("/puppyparty-overview")}>OVERVIEW</button>
          <button onClick={()=>window.open("https://github.com/gyuhyeon6201/puppyparty_v_fin", "_blank", "noopener,noreferrer")}>GITHUB </button>
          <button onClick={()=>window.open("https://gyuhyeon6201.github.io/puppyparty_v_fin/", "_blank", "noopener,noreferrer")}>SITE </button>
        </div>
        <div className="detail-wrap">
          <p>
            ‘Puppy Party!’는 ‘Puppy(퍼피)’와 ‘Party(파티)’의 합성어로,{" "}
            <span>반려견과의 특별한 하루를 선물하고자 하는 의미</span>의
            쇼핑몰입니다.
          </p>
          <p>
            반려견의 생일이나 이벤트 등을 위한 소품·간식·의류 등{" "}
            <span>‘기념일’에 초점을 맞춘 파티 전용 상품</span>을 판매합니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>React/Router, SCSS, GIT/GitHub, Figma, Gsap, PhotoShop</li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>
                UI 디자인 방식 : Figma를 이용한 디자인 시스템 구축 후 코드 구현
              </li>
              <li>
                레이아웃 제작 방식 : Flex를 기반으로 카드 형태의 레이아웃 제작
              </li>
              <li>라이브러리 : react-slick, swiper, react-icons</li>
              <li>제작기간 : 25.07.07~25.07.11(5일)</li>
              <li>제작 참여율 : 60% (4인 참여 팀 프로젝트)</li>
              <li className="indent">
                Data Json 및 장바구니 페이지 기능 구현과 상세페이지 제작을
                주도적으로 수행
              </li>
              <li className="indent">반응형 디자인 및 문서작업을 팀원과 함께 진행</li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PuppyParty;
