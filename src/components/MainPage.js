import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import SkillsTools from "./SkillsTools";
import MainProject from "./MainProject";

const MainPage = () => {
  return (
    <div className="main-page">
      <HomePage />
      <AboutMe />
      <SkillsTools />
      <MainProject />
    </div>
  );
};

export default MainPage;