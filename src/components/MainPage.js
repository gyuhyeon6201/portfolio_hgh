import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import SkillsTools from "./SkillsTools";
import MainProject from "./MainProject";
import Index from "./Index";
import CloneCoding from "./CloneCoding";
import Netflix from "./Netflix";
import MyDay from "./MyDay";
import Airbnb from "./Airbnb";
import Tesla from "./Tesla";
import Publishing from "./Publishing";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  const navigate = useNavigate();
  return (
    <div className="main-page">
      <HomePage />
      <AboutMe />
      <SkillsTools />
      <Index />
      <MainProject />
      {/* <PuppyParty />
      <TowerPick />
      <WordGame />
      <Greenvia />
      <FigmaPlan /> */}
      <CloneCoding />
      <Netflix />
      <MyDay />
      <Airbnb />
      <Tesla />
      <Publishing />
      <Footer />
    </div>
  );
};

export default MainPage;