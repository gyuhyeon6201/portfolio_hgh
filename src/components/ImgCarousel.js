const ImgCarousel = () => {
  return (
    <div className="publishing-wrap">
      <div className="publishing-top-wrap">
        <div className="publishing-top">
          <h2>04</h2>
          <p>이미지 캐러셀</p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/publishing/imgcarousel.png`}
        />
      </div>
      <div className="detail-wrap">
        <p>
          양방향 이동 (←, →) 모두 무한 루프 가능 <br />
          상단 NAV 클릭 시 해당 인덱스로 이동 기능
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
              "https://github.com/gyuhyeon6201/project.github.io/tree/main/0527-28_img_carousel",
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
              "https://gyuhyeon6201.github.io/project.github.io/0527-28_img_carousel/index.html",
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

export default ImgCarousel;
