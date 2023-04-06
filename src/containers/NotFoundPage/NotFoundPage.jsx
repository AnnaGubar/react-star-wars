import { useLocation } from "react-router";
import img from "./img/not-found.png"
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
let location = useLocation();

  return (<>
  <img className={s.img} src={img} alt="Not Found"/>
  <p className={s.text}>No match for <u>{location.pathname.replace("/","")}</u> url.</p>
  </>);
};

export default NotFoundPage;