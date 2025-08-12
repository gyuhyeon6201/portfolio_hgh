

const HomePage = () => {
  return (
    <div className="home-page">
      <img src={`${process.env.PUBLIC_URL}/images/homepage_mark.png`} />
      <p className="homepage-sentence">"<span className="design">디자인</span>과 <span className="coding">개발</span>, 그 사이를 잇다."</p>
      <p className="homepage-main-sentence">웹퍼블리셔 && 프론트엔드 개발자</p>
      <h3 className="my-name">황규현</h3>
    </div>
  );
};

export default HomePage;