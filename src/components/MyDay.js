const MyDay = () => {
  return (
    <div className="clone">
      <div className="clone-title-wrap">
        <h2 className="number">02</h2>
        <div>
          <p className="clone-title">MYDAY</p>
          <p className="clone-subtitle">(MOMENTUM)</p>
        </div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/clone_coding/myday_desktop.png`}
        />

        <div className="detail-wrap">
          <p>
            ‘OpenWeatherMap API’를 연동한 실시간 날씨 출력, 로컬 스토리지를
            활용한 로그인·ToDo 기능, useEffect 기반 시간대별 멘트 출력 기능 등을
            React 컴포넌트로 구현한 Momentum 클론 프로젝트입니다.
          </p>
          <p>
            ‘OpenWeatherMap API’ 연동으로 실시간 날씨와 시간 기반 UI 변화를
            구현하고, React 상태 관리와 로컬 저장소 활용법을 익혀 사용자 경험을
            효과적으로 지속시키는 웹 앱 개발 역량을 키웠습니다.
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
                Chrome 확장 프로그램인 Momentum의 UI 패턴을 참고하여 Figma를
                이용한 디자인 시스템을 구축 후 컴포넌트 단위로 코드 구현
              </li>
              <li>레이아웃 제작 방식</li>
              <li className="indent">
                Flex를 활용해 중앙 정렬 및 세로 방향의 레이아웃 구성
              </li>
              <li className="indent">
                Position 속성을 사용해 시간·날씨·명언·할 일·로그인 정보를
                상하좌우에 적절히 배치
              </li>
              <li className="indent">
                모든 기능은 독립된 컴포넌트 단위로 분리해 유지보수성과 재사용성
                확보
              </li>
              <li>제작기간 : 25.06.17~25.06.19 (3일)</li>
              <li>제작 참여율 : 100% (개인 프로젝트)</li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDay;
