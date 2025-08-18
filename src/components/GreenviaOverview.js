const GreenviaOverview = () => {
  return (
    <div className="detail-overview">
      <h1 className="title">Greenvia</h1>
      <h3 className="sub-title">OVERVIEW</h3>
      <div className="detail-wrap">
        <div className="detail">
          <p>프로젝트 목표</p>
          <ul>
            <li>
              Greenvia 브랜드의 <span>전문성과 신뢰감</span>을 전달할 수 있는
              구조와 디자인 설계
            </li>
            <li>
              쉽게 정보를 탐색하고 서비스를 신청할 수 있도록{" "}
              <span>직관적인 UI</span> 제공
            </li>
            <li>
              SCSS 변수와 믹스인을 활용한 <span>재사용성 높은 스타일</span> 설계
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>구현 기능</p>
          <ul>
            <li>상단 헤더 및 GNB 메뉴 구성</li>
            <li>슬라이드 형식의 메인 배너</li>
            <li>서비스 소개 섹션 (아이콘 + 설명 카드)</li>
            <li>서비스 신청 영역 (정보 입력 UI 포함)</li>
            <li>하단 고객센터 및 푸터 정보 정리</li>
            <li>미디어쿼리를 활용한 반응형 레이아웃</li>
          </ul>
        </div>
      </div>
      <p className="sub-title">DESIGN SYSTEM</p>
      <img
        src={`${process.env.PUBLIC_URL}/images/main_project/greenvia_designsystem.png`}
      />
      <p className="sub-title">회고</p>
      <div className="detail-wrap">
        <div className="detail">
          <p>어려웠던 점 및 해결방법</p>
          <ul>
            <li>
              본 프로젝트를 진행하며 가장 어려웠던 점은{" "}
              <span>
                배너 이미지 위치 조정 문제와 기술 소개 카드 섹션 레이아웃 구성의
                한계
              </span>
              였습니다.
            </li>
            <br />
            <li>
              초기 배너는 <span>여러 이미지를 조합</span>해 구성해야 했는데,
              각각의 위치를 HTML과 SCSS에서 <span>정밀하게 조정</span>하기
              어려웠습니다. <br />
              이를 해결하기 위해 <span>포토샵을 활용</span>해 여러 이미지들을
              하나의 배경 이미지로 합쳐 디자인하고, 텍스트는 HTML로 삽입, SCSS의
              positon 속성을 이용해 적절한 위치에 배치하여 문제를
              해결하였습니다.
            </li>
            <br />
            <li>
              또한 기술 소개 카드 섹션은 Flex를 사용할 경우 뷰포트 크기에 따라
              카드의 위치가 <span>자연스럽게 조정되지 않는 문제</span>가
              발생하였습니다. <br />
              이에 따라 <span>Grid로 재구성</span>하여 보다 유연하고 일관성 있는
              레이아웃을 구현할 수 있었습니다.
            </li>
          </ul>
        </div>
        <div className="detail">
          <p>리팩토링 포인트</p>
          <ul>
            <li>
              현재 배너 영역은 이미지와 텍스트를 분리하여 삽입하였기 때문에,
              뷰포트 크기 변경 시 텍스트가 깨지는 현상이 발생하고 있습니다.{" "}
              <br />
              이를 개선하기 위해, 텍스트와 이미지를 포토샵으로 함께 디자인해
              <span>하나의 배경 이미지로 삽입</span>하고 버튼 요소만 Html로
              구현한다면 다양한 화면에서도 안정적인 출력이 가능할 것으로
              보입니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GreenviaOverview;
