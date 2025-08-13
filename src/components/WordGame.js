const WordGame = () => {
  return(
    <div className="details">
      <h1 className="title">말의 끝, 너의 시작</h1>
      <p className="sub-title">끝말잇기 게임</p>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/main_project/wordgame.png`}
        />
        <div className="link-btn">
          <button onClick={()=>window.open("", "_blank", "noopener,noreferrer")}>OVERVIEW</button>
          <button onClick={()=>window.open("https://github.com/gyuhyeon6201/endword", "_blank", "noopener,noreferrer")}>GITHUB </button>
          <button onClick={()=>window.open("https://gyuhyeon6201.github.io/endword/", "_blank", "noopener,noreferrer")}>SITE </button>
        </div>
        <div className="detail-wrap">
          <p>
            ‘끝말잇기 게임’은 <span>단어의 끝 글자를 기준</span>으로 사용자와 AI가 번갈아가며
            <span>새로운 단어를 제시</span>하는 끝말잇기 게임 모바일 전용 웹입니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>React, SCSS, GIT/GitHub, Figma</li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>
                UI 디자인 방식 : Figma를 이용한 디자인 시스템 구축 후 코드 구현
              </li>
              <li>
                레이아웃 제작 방식
              </li>
              <li className="indent">
                StartScreen / GameScreen 화면 분리의 기능별 책임 분산 및 상태 흐름이 명확한 레이아웃 제작
              </li>
              <li>라이브러리 : react-slick, swiper, react-icons</li>
              <li>제작기간 : 25.05.22~25.05.23 (2일)</li>
              <li>제작 참여율 : 100% (개인 프로젝트)</li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordGame;
