const TowerPick = () => {
  return (
    <div className="details">
      <h1 className="title">Tower Pick</h1>
      <p className="sub-title">주차장 관리 프로젝트</p>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/main_project/towerpick.png`}
        />
        <div className="link-btn">
          <button onClick={()=>window.open("", "_blank", "noopener,noreferrer")}>OVERVIEW</button>
          <button onClick={()=>window.open("https://github.com/gyuhyeon6201/towerpick_v_fin", "_blank", "noopener,noreferrer")}>GITHUB </button>
          <button onClick={()=>window.open("", "_blank", "noopener,noreferrer")}>SITE </button>
        </div>
        <div className="detail-wrap">
          <p>
            ‘TowerPick(타워픽)’은 복잡한 도심 속 주차 문제를 해결하기 위해
            개발된 <span>‘도심형 주차타워 전용’</span> 예약 서비스 앱
            플랫폼입니다.
          </p>
          <p>
            <span>언제 어디서나 접속 가능</span>한 모바일 앱 형태로 사용자는
            주차가 필요한 순간 <span>즉시 확인</span>하고 예약할 수 있는{" "}
            <span>실시간성과 편리함</span>을 누릴 수 있습니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>
                React/Router, SCSS, Supabase, GIT/GitHub, Figma, PhotoShop
              </li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>
                UI 디자인 방식 : Figma를 이용한 디자인 시스템 구축 후 코드 구현
              </li>
              <li>
                레이아웃 제작 방식 : Grid를 기반으로 카드 형태의 레이아웃 제작
              </li>
              <li>라이브러리 : react-icons</li>
              <li>제작기간 : 25.07.21~25.08.01 (10일)</li>
              <li>제작 참여율 :  80% (4인 참여 팀 프로젝트)</li>
              <li className="indent">
                전체 UI 설계 및 레이아웃 구성과 중복되는 스타일 컴포넌트 제작을 주도적으로 수행
              </li>
              <li className="indent">
                일반권 및 정기권 시스템 기능 구현과 반응형 디자인을 팀원과 함께 진행
              </li>
              <li className="indent">
                팀원과 Cross Check 및 QA 진행하여 코드 수정 후 배포
              </li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TowerPick;
