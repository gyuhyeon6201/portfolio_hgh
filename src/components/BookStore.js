const BookStore = () => {
  return (
    <div className="publishing-wrap">
      <div className="publishing-top-wrap">
        <div className="publishing-top">
          <h2>01</h2>
          <p>북스토어 상세페이지</p>
        </div>
        <img
          src={`${process.env.PUBLIC_URL}/images/publishing/bookstore.png`}
        />
      </div>
      <div className="detail-wrap">
        <p>
          온라인 서점(YES24) 사이트와 같이 책 사진 위에 마우스를 올리면 측면을
          보여주고, 클릭 시 책 이미지가 뒷면을 보여주는 rotate 기능
        </p>
        <div className="detail">
          <p>제작에 사용된 스킬</p>
          <ul>
            <li>HTML5, CSS3</li>
          </ul>
        </div>
        <p>배포방식 : GitHub</p>
      </div>
      <div className="link-btn">
        <button
          onClick={() =>
            window.open(
              "https://github.com/gyuhyeon6201/project.github.io/tree/main/0422_Bookstore",
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
              "https://gyuhyeon6201.github.io/project.github.io/0422_Bookstore/index.html",
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

export default BookStore;
