const PuppyPartyOverview = () => {
  return (
    <div className="detail-overview">
      <h1 className="title">Puppy Party!</h1>
      <h3 className="sub-title">OVERVIEW</h3>
      <div className="detail-wrap">
        <div className="detail">
          <p>프로젝트 목표</p>
          <ul>
            <li>
              배너, 인기 상품, 누적 판매량 등 사용자 구매 유도를 위한{" "}
              <span>콘텐츠 구조 설계 및 시각적 효과</span> 적용
            </li>
            <li>
              기기별(모바일·태블릿·데스크탑) 반응형 구성 및{" "}
              <span>컬러·정렬 기반의 사용자 맞춤형 화면</span> 제공
            </li>
            <li>
              JSON 데이터 기반 구조 설계와 <span>컴포넌트 재사용성</span>을
              고려하여 구현
            </li>
            <li>
              상품 옵션 선택, 수량 조절, 장바구니 담기 및 관리 등{" "}
              <span>구매 흐름 전반의 핵심 기능을 안정적</span>으로 구현
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>내가 맡은 역할</p>
          <ul>
            <li>Json 데이터 구현</li>
            <li>장바구니 페이지 및 관련 컴포넌트 개발</li>
            <li>파티 용품 카테고리 상세페이지 제작</li>
          </ul>
        </div>
        <div className="detail">
          <p>구현 기능</p>
          <ul>
            <li>장바구니 기능 80% 구현</li>
            <li>아이템 옵션 선택 기능 100% 구현</li>
          </ul>
        </div>
      </div>
      <p className="sub-title">DESIGN SYSTEM</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/puppyparty_designsystem.png`}
      />

      <p className="sub-title">USER FLOW</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/puppyparty_userflow.png`}
      />
      <p className="sub-title">반응형 디자인</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/puppyparty_cart.png`}
      />
      <p className="sub-title">회고</p>
      <div className="detail-wrap">
        <div className="detail">
          <p>어려웠던 점 및 해결방법</p>
          <ul>
            <li>
              본 프로젝트를 진행하며 가장 어려웠던 점은{" "}
              <span>소스 병합과정</span>이었습니다.
            </li>
            <br />
            <li>
              초기에는 각자 컴포넌트를 작업 후 병합하는 방식으로 진행하여 Git
              충돌과 구조 혼란이 잦았습니다. <br />
              이를 해결하기 위해 <span>최상위 페이지는 마스터가 일괄 관리</span>
              하고, <br />
              <span>개별 컴포넌트는 분담 작업</span>하되, 수정과 병합의 우선
              순위를 정하여
              <br />
              <span>수정 → 업로드 → 내려받기 → 이어 작업</span> 흐름으로 협업
              방식을 정리하면서{" "}
              <span>구조 혼란과 병합 오류를 줄일 수 있었습니다.</span>
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>리팩토링 포인트</p>
          <ul>
            <li>
              장바구니 페이지의 모든 로직과 UI가 한 컴포넌트에 집중되어 있어{" "}
              <span>코드가 복잡하고 유지보수가 어려웠습니다.</span> <br />
              이를 <span>상품/결제 정보 영역</span>으로 분리해{" "}
              <span>상위 컴포넌트에서 통합</span>하는 구조로 리팩토링한다면{" "}
              <span>가독성과 유지보수성이 향샹</span>될 것이라 생각합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PuppyPartyOverview;
