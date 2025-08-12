const AboutMe = () => {
  return (
    <div className="about-me">
      <h1 className="title">ABOUT ME</h1>
      <div className="aboutme-wrap">
        <img
          src={`${process.env.PUBLIC_URL}/images/aboutme-mypicture.png`}
          className="my-picture"
        />
        <ul className="aboutme-sentence">
          <li>
            꼼꼼함과 긍정적인 태도를 바탕으로 문제를 효율적으로 해결합니다.
          </li>
          <li>
            자바스크립트와 웹 퍼블리싱을 함께 공부하며 개발·디자인 전반의 경험을
            쌓았고, <span>사용자 중심 설계</span>와 <span>협업의 가치</span>를
            실무에 녹여내고 있습니다.
          </li>
          <li>
            앞으로도 실용적인 문제 해결과 성장하는 협업을 통해 전문가로
            나아가겠습니다.
          </li>
        </ul>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/images/aboutme.png`}
        className="aboutme-keyword"
      />
    </div>
  );
};

export default AboutMe;
