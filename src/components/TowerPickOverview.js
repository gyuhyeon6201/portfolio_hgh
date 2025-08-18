const TowerPickOverview = () => {
  return (
    <div className="detail-overview">
      <h1 className="title">Tower Pick</h1>
      <h3 className="sub-title">OVERVIEW</h3>
      <div className="detail-wrap">
        <div className="detail">
          <p>프로젝트 목표</p>
          <ul>
            <li>
              <span>직관적이고 일관성 있는 UI/UX</span>와{" "}
              <span>실시간 잔여석 확인</span>이 가능한 사용자 편의 기능을 구현
            </li>
            <li>
              <span>React와 DB</span>를 연결하는 구조를 활용한 기능을 구현
            </li>
            <li>
              <span>컴포넌트 재사용성</span>을 고려하여 구현
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>내가 맡은 역할</p>
          <ul>
            <li>조장</li>
            <li className="indent">전체 UI 설계 및 레이아웃 구성</li>
            <li className="indent">메인 페이지 설계</li>
            <li className="indent">
              스타일링을 통해 디자인 일관성과 재사용성을 확보
            </li>
            <li className="indent">코드 취합 및 페이지간 연결</li>
          </ul>
        </div>
        <div className="detail">
          <p>구현 기능</p>
          <ul>
            <li>일반권 및 정기권 시스템의 모든 기능 50% 구현(2인 동시)</li>
            <li>예약 선택 박스 관련 컴포넌트 50% 구현 (2인 동시)</li>
          </ul>
        </div>
      </div>
      <p className="sub-title">DESIGN SYSTEM</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/towerpick_designsystem.png`}
      />

      <p className="sub-title">USER FLOW</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/towerpick_userflow.png`}
      />
      <p className="sub-title">회고</p>
      <div className="detail-wrap">
        <div className="detail">
          <p>어려웠던 점 및 해결방법</p>
          <ul>
            <li>
              본 프로젝트를 진행하며 가장 어려웠던 점은 <span>DB연결 작업</span>
              이었습니다.
            </li>
            <br />
            <li>
              처음 DB를 활용한 협업 프로젝트에서 하나의 ID로 여러 작업자가
              동시에 접근하면서 예약·취소 테스트 중 데이터 충돌 문제가
              발생하였습니다. <br />
              이를 해결하기 위해 DB 데이터를 초기화하고,{" "}
              <span>작업자별 ID를 분리해 각기 다른 테스트 시나리오를 구성</span>
              했으며, 중간중간 데이터를 점검 및 정리하여{" "}
              <span>안정적인 개발 환경을 유지</span>할 수 있었습니다.
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>리팩토링 포인트</p>
          <ul>
            <li>
              API 담당자의 DB로 개발부터 병합, 테스트까지 모두 진행하면서 ID별도
              생성과 데이터 중간 관리 같은 <span>불필요한 작업이 추가</span>
              되었습니다.
              <br />
              이를 <span>개발용 DB와 API 담당자 DB를 분리</span>하는 구조로
              리팩토링한다면,
              <br />
              중간 단계에서 발생할 수 있는 데이터 누락이나 덮어쓰기 문제를
              방지하고 보다 <span>안정적인 협업 환경을 구축</span>할 수 있을
              것이라 생각합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TowerPickOverview;
