import { Route, Routes } from "react-router-dom";
import "./app.scss";
import Header from "./components/Header";
import MainPage from "./components/MainPage";


const App = () => {

  return (
    <div id="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </main>
    </div>
  );
};

export default App;
