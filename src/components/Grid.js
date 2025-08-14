const Grid = () => {
  return (
    <div className="publishing-wrap">
      <div className="publishing-top-wrap">
        <div className="publishing-top">
          <h2>03</h2>
          <p>그리드 상세페이지</p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/publishing/grid.png`} />
      </div>
      <div className="detail-wrap">
        <p>
          ‘Black&White Hair Illustration’을 보여주는 컨셉으로 정해진 규칙
          (홀수/짝수/전체)에 따라 이미지 데이터를 보여주기 위한 기능
        </p>
        <div className="detail">
          <p>제작에 사용된 스킬</p>
          <ul>
            <li>HTML5, CSS3, JavaScript</li>
          </ul>
        </div>
        <p>배포방식 : GitHub</p>
      </div>
      <div className="link-btn">
        <button
          onClick={() =>
            window.open(
              "https://github.com/gyuhyeon6201/project.github.io/tree/main/0521_group_grid",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          GITHUB{" "}
        </button>
        <button
          onClick={() =>
            window.open(
              "https://gyuhyeon6201.github.io/project.github.io/0521_group_grid/index.html",
              "_blank",
              "noopener,noreferrer"
            )
          }
        >
          SITE{" "}
        </button>
      </div>
    </div>
  );
};

export default Grid;
