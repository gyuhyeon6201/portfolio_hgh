const CloneCoding = () => {
  return (
    <div className="clone-coding">
      <h1 className="title">CLONE CODING PROJECTS</h1>
      <div className="clone-coding-wrap">
        {/* 넷플릭스 */}
        <div className="clone-wrap">
          <div className="clone-header">
            <h2>01</h2>
            <p>넷플릭스</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/clone_coding/netflix_mobile.png`}
          />
          <div className="clone-btn">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/gyuhyeon6201/netflix",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              GITHUB
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://gyuhyeon6201.github.io/netflix/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              SITE
            </button>
          </div>
        </div>
        {/* 모멘텀 */}
        <div className="clone-wrap">
          <div className="clone-header">
            <h2>02</h2>
            <p>MyDay</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/clone_coding/myday_mobile.png`}
          />
          <div className="clone-btn">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/gyuhyeon6201/myday",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              GITHUB
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://gyuhyeon6201.github.io/myday/",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              SITE
            </button>
          </div>
        </div>
        {/* 에어비앤비 */}
        <div className="clone-wrap">
          <div className="clone-header">
            <h2>03</h2>
            <p>에어비앤비</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/clone_coding/airbnb_mobile.png`}
          />
          <div className="clone-btn">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/gyuhyeon6201/project.github.io/tree/main/0430_airbnb_clone",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              GITHUB
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://gyuhyeon6201.github.io/project.github.io/0430_airbnb_clone/index.html",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              SITE
            </button>
          </div>
        </div>
        {/* 테슬라 */}
        <div className="clone-wrap">
          <div className="clone-header">
            <h2>04</h2>
            <p>테슬라</p>
          </div>
          <img
            src={`${process.env.PUBLIC_URL}/images/clone_coding/tesla_mobile.png`}
          />
          <div className="clone-btn">
            <button
              onClick={() =>
                window.open(
                  "https://github.com/gyuhyeon6201/project.github.io/tree/main/0417-18_tesla",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              GITHUB
            </button>
            <button
              onClick={() =>
                window.open(
                  "https://gyuhyeon6201.github.io/project.github.io/0417-18_tesla/index.html",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
            >
              SITE
            </button>
          </div>
        </div>
      </div>
      <p className="guide">
        ** 실무에서 널리 활용되는 사용자 인터페이스를 직접 구현함으로써,
        프론트엔드 구조적 이해와 사용자 경험 흐름에 대한 감각을 체득하고자
        하였습니다.
      </p>
      <p className="guide">
        단순한 모방을 넘어, 실제 서비스를 코드로 해석하고 재구성하는 과정을 통해
        개발 역량을 더욱 견고히 다질 수 있었습니다.
      </p>
    </div>
  );
};

export default CloneCoding;
