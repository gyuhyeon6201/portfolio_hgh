const Publishing = () => {
  return (
    <div className="publishing">
      <h1 className="title">PRACTICAL PUBLISHING</h1>
      {/* 북스토어 */}
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
      {/* 갤러리 */}
      <div className="publishing-wrap">
        <div className="publishing-top-wrap">
          <div className="publishing-top">
            <h2>02</h2>
            <p>갤러리</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/publishing/gallery.png`}
          />
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
      {/* 그리드 */}
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
      {/* 이미지 캐러셀 */}
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
            onClick={() => window.open("https://github.com/gyuhyeon6201/project.github.io/tree/main/0527-28_img_carousel", "_blank", "noopener,noreferrer")}
          >
            GITHUB{" "}
          </button>
          <button
            onClick={() => window.open("https://gyuhyeon6201.github.io/project.github.io/0527-28_img_carousel/index.html", "_blank", "noopener,noreferrer")}
          >
            SITE{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publishing;
