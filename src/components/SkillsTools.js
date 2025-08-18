const SkillsTools = () => {
  return (
    <div className="skills-tools">
      <h1 className="title">SKILLS&TOOLS</h1>
      {/* 임시로 이미지 삽입 -> 각각의 div로 제작하여 gird 사용 및 hover 효과 삽입 예정 */}
      {/* <img src={`${process.env.PUBLIC_URL}/images/skills_tools.png`} /> */}
      <div className="skillstools-img-wrap">
        <div className="skillstools-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/photoshop.png`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/illestrator.png`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/figma.png`}
          />
        </div>
        <div className="skillstools-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/html5.png`}
          />
          <img src={`${process.env.PUBLIC_URL}/images/skills_tools/css3.png`} />
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/javascript-es6.png`}
          />
        </div>
        <div className="skillstools-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/react.png`}
          />
          <img src={`${process.env.PUBLIC_URL}/images/skills_tools/scss.png`} />
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/supabase.png`}
          />
        </div>
        <div className="skillstools-img">
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/git-branch.png`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/github.png`}
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/skills_tools/slack.png`}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillsTools;
