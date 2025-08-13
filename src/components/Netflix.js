

const Netflix = () => {
  return (
    <div className="clone">
      <div className="clone-title-wrap">
        <h2 className="number">01</h2>
        <div>
          <p className="clone-title">넷플릭스</p>
          <p className="clone-subtitle">(NETFLIX)</p>
        </div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/clone_coding/netflix_desktop.png`}
        />

        <div className="detail-wrap">
          <p>
            ‘TMDB API’를 연동하여 실시간 콘텐츠 데이터를 가져오고, React
            컴포넌트를 활용해 넷플릭스 스타일의 메인 페이지를 재현한 클론
            프로젝트입니다.
          </p>
          <p>
            외부 API 연동을 처음 경험하며, 데이터를 효과적으로 처리하고 컴포넌트
            기반 라우팅과 슬라이드 UI 구현에 필요한 라이브러리 활용법을
            익혔습니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>React/Router, SCSS, GIT/GitHub, Figma</li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>UI 디자인 방식</li>
              <li className="indent">
                넷플릭스 홈페이지의 UI 패턴을 참고하여 Figma를 이용한 디자인
                시스템을 구축 후 컴포넌트 단위로 코드 구현
              </li>
              <li>레이아웃 제작 방식</li>
              <li className="indent">
                Flex와 Grid를 활용해 반응형 카드 레이아웃을 설계
              </li>
              <li className="indent">
                슬라이드와 그리드형 콘텐츠 영역을 상황에 따라 적절히 조합하여
                구현
              </li>
              <li>
                라이브러리 : axios, react-icons, slick-carousel, react-slick
              </li>
              <li>제작기간 : 25.06.23~25.06.25 (3일)</li>
              <li>제작 참여율 : 100% (개인 프로젝트)</li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Netflix;
