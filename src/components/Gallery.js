const Gallery = () => {
  return (
    <div className="gallery">
      <div className="publishing-top-wrap">
        <div className="publishing-top">
          <h2>02</h2>
          <p>갤러리</p>
        </div>
        <img src={`${process.env.PUBLIC_URL}/images/publishing/gallery.png`} />
      </div>
      <div className="detail-wrap">
        <p>체크박스와 라디오 버튼으로 3D 회전 메뉴와 그리드 화면 전환 기능</p>
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
              "https://github.com/gyuhyeon6201/project.github.io/tree/main/0423_gallery",
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
              "https://gyuhyeon6201.github.io/project.github.io/0423_gallery/grid.html",
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

export default Gallery;
