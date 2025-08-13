import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import PuppyParty from "./components/PuppyParty";
import TowerPick from "./components/TowerPick";
import WordGame from "./components/WordGame";
import Greenvia from "./components/Greenvia";
import FigmaPlan from "./components/FigmaPlan";


const App = () => {

  return (
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
        </Routes>
      </main>
    </div>
  );
};

export default App;
