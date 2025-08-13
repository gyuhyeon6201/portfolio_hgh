const Airbnb = () => {
  return (
    <div className="clone">
      <div className="clone-title-wrap">
        <h2 className="number">03</h2>
        <div>
          <p className="clone-title">에어비앤비</p>
          <p className="clone-subtitle">(AIRBNB)</p>
        </div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/clone_coding/airbnb_desktop.png`}
        />

        <div className="detail-wrap">
          <p>
            에어비앤비의 웹사이트 구조를 분석하고, HTML과 SCSS를 활용해 모바일
            우선 기반의 반응형 웹 레이아웃을 직접 구현한 클론 프로젝트입니다.
          </p>
          <p>
            Flex와 Grid를 상황에 맞게 조합해 적용하고, 믹스인을 활용해 반응형
            레이아웃을 효율적으로 설계하는 방법을 배웠습니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>HTML5, CSS3, SCSS, GIT/GitHub, Figma</li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>UI 디자인 방식</li>
              <li className="indent">
                에어비앤비 홈페이지의 UI 패턴을 참고하여 Figma를 이용한 디자인
                시스템을 구축 후 컴포넌트 단위로 코드 구현
              </li>
              <li>레이아웃 제작 방식</li>
              <li className="indent">
                전체 구조는 Flex를 기반으로 섹션을 배치하고, 숙소 정보는 Grid
                레이아웃으로 정렬
              </li>
              <li className="indent">
                모바일 사이즈를 기준으로 레이아웃을 설계한 뒤, 미디어쿼리를
                활용해 태블릿과 데스크탑 환경에 맞추어 반응형 레이아웃을 구현
              </li>
              <li>제작기간 : 25.04.30 (1일)</li>
              <li>제작 참여율 : 100% (개인 프로젝트)</li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Airbnb;
