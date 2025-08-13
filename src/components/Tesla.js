const Tesla = () => {
  return (
    <div className="clone">
      <div className="clone-title-wrap">
        <h2 className="number">04</h2>
        <div>
          <p className="clone-title">테슬라</p>
          <p className="clone-subtitle">(TESLA)</p>
        </div>
      </div>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/clone_coding/tesla_desktop.png`}
        />

        <div className="detail-wrap">
          <p>
            테슬라 공식 홈페이지를 참고해 주요 섹션의 구조와 스타일을 HTML5와
            SS3로 클론한 웹 프로젝트입니다.
          </p>
          <p>
            미디어쿼리를 활용해 화면 크기에 따라 이미지 크기, 텍스트 배치,
            네비게이션 구조 등을 유동적으로 조정하며 다양한 디바이스 환경에
            최적화된 반응형 웹 구현 방법을 배웠습니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>HTML5, CSS3, GIT/GitHub, Figma</li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>UI 디자인 방식</li>
              <li className="indent">
                테슬라 홈페이지의 UI 패턴을 참고하여 Figma를 이용한 디자인
                시스템을 구축 후 컴포넌트 단위로 코드 구현
              </li>
              <li>레이아웃 제작 방식</li>
              <li className="indent">
                Flex를 활용해 섹션별 콘텐츠 배치를 구현
              </li>
              <li className="indent">
                모바일 사이즈를 기준으로 레이아웃을 설계한 뒤, 믹스인을 활용해
                데스크탑 환경에서도 요소들이 자연스럽게 변화하도록 반응형
                레이아웃을 구현
              </li>
              <li>제작기간 : 25.04.17~25.04.18 (2일)</li>
              <li>제작 참여율 : 100% (개인 프로젝트)</li>
              <li>배포방식 : GitHub</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tesla;
