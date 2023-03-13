import cn from "classnames";
import s from "./App.module.css";

const App = () => {
  return <h1 className={cn(s.header, s.text)}>hello</h1>;
};

export default App;
