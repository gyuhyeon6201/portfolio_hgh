const WordGameOverview = () => {
  return (
    <div className="detail-overview">
      <h1 className="title">말의 끝, 너의 시작</h1>
      <h3 className="sub-title">OVERVIEW</h3>
      <div className="detail-wrap">
        <div className="detail">
          <p>프로젝트 목표</p>
          <ul>
            <li>
              단어 끝말잇기라는 친숙한 게임을 통해 React <span>상태 관리</span>{" "}
              및 이벤트 처리 연습
            </li>
            <li>
              <span>‘Korean Open Dictionary API’를 활용</span>하여 실제 존재하는
              단어 기반의 끝말잇기 기능 구현
            </li>
            <li>
              <span>단어 유효성 필터링</span> (하이픈 제거, 글자 수 제한, 품사
              필터링)을 통해 게임 규칙을 정교하게 구성
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>구현 기능</p>
          <ul>
            <li>사용자가 시작 단어를 입력하고 게임 시작</li>
            <li>
              단어 끝 글자를 기준으로 시작되는 단어만 입력 가능하도록 제한
            </li>
            <li>공백 또는 미입력, 잘못된 단어 시 알림창으로 안내</li>
            <li>
              입력된 시작 단어를 기준으로 Open API를 호출해, 실제 존재하는 단어
              기반의 게임 진행 구현
            </li>
            <li>AI 단어 응답을 위해 비동기 API 호출 및 로딩 메시지 출력</li>
          </ul>
        </div>
      </div>
      <p className="sub-title">DESIGN SYSTEM</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/wordgame_designsystem.png`}
      />
      <p className="sub-title">회고</p>
      <div className="detail-wrap">
        <div className="detail">
          <p>어려웠던 점 및 해결방법</p>
          <ul>
            <li>
              본 프로젝트를 진행하며 가장 어려웠던 점은 <span>API 연동</span>
              이었습니다.
            </li>
            <br />
            <li>
              API에서 전달 받은 단어 목록 중,{" "}
              <span>
                하이픈(-)이 포함된 단어와 2글자 미만의 단어가 자주 포함
              </span>
              되어 있다는 점이 문제였습니다. <br />
              이를 해결하기 위해 응답 데이터에서 ‘item.word’ 항목만 추출한 뒤,
              해당 단어 중{" "}
              <span>‘-’문자가 포함된 단어와 2글자 미만의 단어를 제거</span>하는
              코드를 추가하여 실제 게임에 사용할 수 있는{" "}
              <span>적절한 단어만 출력</span>하도록 개선 하였습니다.
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>리팩토링 포인트</p>
          <ul>
            <li>
              현재 API에서 전달받는 단어 리스트는 매번 동일하거나 상위 항목만
              반복적으로 출력되어,{" "}
              <span>한번 입·출력 되었던 단어가 다시 결과로 나오는 문제</span>
              가 발생했습니다. <br />
              이에 따라, 기존에 입·출력된 단어들을 별도로 저장하고, API 응답에서
              이들과 <span>중복되는 단어를 제외하는 필터링 로직을 추가</span>
              한다면, 동일한 단어가 반복되지 않도록 리팩토링할 수 있으며, 이를
              통해 게임의 재미와 완성도 모두를 높일 수 있을 것이라 생각합니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WordGameOverview;
