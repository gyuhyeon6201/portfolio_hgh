const FigmaPlanOverview = () => {
  return (
    <div className="detail-overview">
      <h1 className="title">혼잡도 마스터</h1>
      <h3 className="sub-title">OVERVIEW</h3>
      <div className="detail-wrap">
        <div className="detail">
          <p>프로젝트 목표</p>
          <ul>
            <li>
              지하철 혼잡도를 시간대별로 쉽게 확인할 수 있는{" "}
              <span>시각적 인터페이스</span> 설계
            </li>
            <li>
              사용자의 습관과 이동패턴을 고려한{" "}
              <span>개인 맞춤 알림 설정 기능</span>설계
            </li>
            <li>
              데이터 기반 혼잡도 정보를 <span>쉽게 공유</span>할 수 있는 환경
              마련
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>구현 기능</p>
          <ul>
            <li>혼잡도 조회 : 노선·시간대 선택 후 혼잡도 그래프 제공</li>
            <li>혼잡도 알림 설정 : 사용자 지정 조건에 따라 알림 예약</li>
            <li>공유 기능 : 혼잡도 정보를 링크로 손쉽게 공유 및 이미지 저장</li>
            <li>
              인터랙션 설계 : 버튼 클릭, 페이지 이동 등 실제 앱처럼 체험 가능한
              인터페이스 구성
            </li>
          </ul>
        </div>
      </div>
      <p className="sub-title">DESIGN SYSTEM</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/figmaplan_designsystem.png`}
      />

      <p className="sub-title">USER FLOW</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/figmaplan_userflow.png`}
      />
      <p className="sub-title">회고</p>
      <div className="detail-wrap">
        <div className="detail">
          <p>어려웠던 점 및 해결방법</p>
          <ul>
            <li>
              본 프로젝트를 진행하며 가장 어려웠던 점은{" "}
              <span>
                시간, 노선, 상태를 선택하는 컴포넌트를 버튼 클릭 시 하단으로
                확장되는 구조로 설계하면서 발생한 시각적 과밀 문제
              </span>
              였습니다.
            </li>
            <br />
            <li>
              초기에는 풀다운 형태를 고려했으나, 선택 항목이 늘어날 경우
              컴포넌트의 길이가 과도하게 길어져{" "}
              <span>전체 레이아웃의 밸런스를 해치고,</span> 정보 전달이 어려워질
              수 있다는 문제를 발견했습니다.
              <br />
              이를 해결하기 위해 <span>선택 항목을 단계별로 분리</span>하고,
              상태에 따라 접힘/펼침 인터랙션을 적용하는 방식으로 시각적 부담을
              줄였으며, <span>선택된 항목은 상단에 고정</span>되도록 기획해
              사용자 편의성을 고려했습니다.
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>리팩토링 포인트</p>
          <ul>
            <li>
              현재 구조는 UX 측면에서 효과적이지만, 추후 개발 시 JSON 데이터나
              Grid만으로는 유지보수가 어려울 수 있음을 고려했습니다. <br />
              따라서 <span>React 개발을 전제</span>로,{" "}
              <span>new Date() 및 날짜 관련 라이브러리를 활용</span>하여
              사용자의 현재 시간을 기반으로 자동 초기값 설정 및 유효시간 범위
              제어 기능을 추가하는 방향을 제안합니다. <br />
              또한 노선 및 상태 데이터는 <span>JSON 구조로 관리</span>하며
              map()을 통해 렌더링하고,{" "}
              <span>선택된 값은 React 상태로 관리</span>함으로써 데이터 흐름의
              명확성과 유지보수성, 확장성을 확보할 수 있을 것입니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FigmaPlanOverview;
