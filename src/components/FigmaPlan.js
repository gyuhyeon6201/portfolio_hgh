

const FigmaPlan = () => {
  return (
    <div className="details">
      <h1 className="title">혼잡도 마스터</h1>
      <p className="sub-title">Figma 기획안</p>
      <div>
        <img
          src={`${process.env.PUBLIC_URL}/images/main_project/figmaplan.png`}
        />
        <div className="link-btn">
          <button onClick={()=>window.open("", "_blank", "noopener,noreferrer")}>OVERVIEW</button>
          <button onClick={()=>window.open("https://www.figma.com/design/Cx6lQkC19dwZVmnTiw8tlL/UI-UX%EB%94%94%EC%9E%90%EC%9D%B8?node-id=5-8&t=Hs1vCWTthpD9q7wn-0", "_blank", "noopener,noreferrer")}>Fimga </button>
        </div>
        <div className="detail-wrap">
          <p>
            ‘지하철 혼잡도 마스터’는 지하철 혼잡도를 시각적으로 확인하고, 원하는
            시간대에 혼잡도를 미리 알림 받을 수 있도록 설계한{" "}
            <span>모바일 UX 프로토타입</span> 디자인 프로젝트입니다.
          </p>
        </div>
        <div className="detail-wrap">
          <div className="detail">
            <p>제작에 사용된 스킬</p>
            <ul>
              <li>Figma, PhotoShop</li>
            </ul>
          </div>
          <div className="detail">
            <p>프로젝트 개요</p>
            <ul>
              <li>UI 디자인 방식 : 디자인 시스템 기반의 컴포넌트 단위 설계</li>
              <li>
                레이아웃 제작 방식 : Auto Layout을 활용한 프레임 구성으로 반응형
                레이아웃 설계
              </li>
              <li>제작기간 : 25.04.07~25.04.09 (3일)</li>
              <li>제작 참여율 : 100% (개인 프로젝트)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FigmaPlan;
