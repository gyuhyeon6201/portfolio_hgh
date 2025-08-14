import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import SkillsTools from "./SkillsTools";
import MainProject from "./MainProject";
import Index from "./Index";
import CloneCoding from "./CloneCoding";
import Publishing from "./Publishing";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
  // const location = useLocation();

  // useEffect(() => {
  //   if (location.state?.scrollTo) {
  //     const target = document.getElementById(location.state.scrollTo);
  //     if (target) {
  //       target.scrollIntoView({ behavior: "smooth" });
  //     }
  //   }
  // }, [location]);

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
      {/* <Netflix />
      <MyDay />
      <Airbnb />
      <Tesla /> */}
      <Publishing />
      <Footer />
    </div>
  );
};

export default MainPage;