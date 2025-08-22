import { HashRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import PuppyParty from "./components/PuppyParty";
import TowerPick from "./components/TowerPick";
import WordGame from "./components/WordGame";
import Greenvia from "./components/Greenvia";
import FigmaPlan from "./components/FigmaPlan";
import FigmaPlanOverview from "./components/FigmaPlanOverview";
import PuppyPartyOverview from "./components/PuppyPartyOverview";
import TowerPickOverview from "./components/TowerPickOverview";
import WordGameOverview from "./components/WordGameOverview";
import GreenviaOverview from "./components/GreenviaOverview";
import Netflix from "./components/Netflix";
import MyDay from "./components/MyDay";
import Airbnb from "./components/Airbnb";
import Tesla from "./components/Tesla";
import Publishing from "./components/Publishing";

const App = () => {
  return (
    <HashRouter>
      <div id="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />}></Route>
            <Route path="/puppyparty" element={<PuppyParty />}></Route>
            <Route path="/towerpick" element={<TowerPick />}></Route>
            <Route path="/wordgame" element={<WordGame />}></Route>
            <Route path="/greenvia" element={<Greenvia />}></Route>
            <Route path="/figmaplan" element={<FigmaPlan />}></Route>
            <Route
              path="/puppyparty-overview"
              element={<PuppyPartyOverview />}
            ></Route>
            <Route
              path="/towerpick-overview"
              element={<TowerPickOverview />}
            ></Route>
            <Route
              path="/wordgame-overview"
              element={<WordGameOverview />}
            ></Route>
            <Route
              path="/greenvia-overview"
              element={<GreenviaOverview />}
            ></Route>
            <Route
              path="/figmaplan-overview"
              element={<FigmaPlanOverview />}
            ></Route>
            <Route path="/netflix" element={<Netflix />}></Route>
            <Route path="/myday" element={<MyDay />}></Route>
            <Route path="/airbnb" element={<Airbnb />}></Route>
            <Route path="/tesla" element={<Tesla />}></Route>
            <Route path="/publishing" element={<Publishing />}></Route>
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default App;
