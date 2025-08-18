import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import SkillsTools from "./SkillsTools";
import MainProject from "./MainProject";
import Index from "./Index";
import CloneCoding from "./CloneCoding";
import Publishing from "./Publishing";
import Footer from "./Footer";

const MainPage = () => {
  return (
    <div className="main-page">
      <HomePage />
      <AboutMe />
      <SkillsTools />
      <Index />
      <MainProject />
      <CloneCoding />
      <Publishing />
      <Footer />
    </div>
  );
};

export default MainPage;
