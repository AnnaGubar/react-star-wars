import { Route, Routes } from "react-router-dom";
import routesConfig from "@routes/routesConfig";
import Header from "@components/Header";
import s from "./App.module.css";

const App = () => {
  return (
    <div className={s.wrapper}>
      <Header />
      <Routes>
        {routesConfig.map(({ path, element }) => (
          <Route key={element} path={path} element={element()} />
        ))}
      </Routes>
    </div>
  );
};

export default App;
