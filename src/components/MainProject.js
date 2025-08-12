const MainProject = () => {
  return (
    <div className="main-project">
      <h1 className="title">
        MY WORKS <br />
        AND PROJECTS
      </h1>
      <div className="main-wrap">
        <div className="main-team">
          <p className="main-subtitle">팀 프로젝트</p>
          <div className="main-subwrap">
            <p>쇼핑몰 프로젝트</p>
            <p>Puppy Party!</p>
          </div>
          <div className="main-subwrap">
            <p>주차장 관리 프로젝트</p>
            <p>Tower Pick</p>
          </div>
        </div>
        <div className="main-team">
          <p className="main-subtitle">개인 프로젝트</p>
          <div className="main-subwrap">
            <p>끝말잇기 게임</p>
            <p>말의 끝, 너의 시작</p>
          </div>
          <div className="main-subwrap">
            <p>블로그형 웹페이지</p>
            <p>Greenvia</p>
          </div>
          <div className="main-subwrap">
            <p>Figma 기획안</p>
            <p>혼잡도 마스터</p>
          </div>
        </div>
      </div>
      <p className="guide">
        ** 실무 감각을 키우기 위해 직접 설계하고 제작한 웹 프로젝트들 입니다.
      </p>
      <p className="guide">
        기획부터 UI 디자인, 퍼블리싱, 프론트엔드 구현까지 전 과정에
        참여하였습니다.
      </p>
    </div>
  );
};

export default MainProject;
