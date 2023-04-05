import { useState, useEffect } from "react";
import PeopleList from "../../components/PeoplePage/PeopleList";
import { getApiResource } from "../../utils/network";
import { API_PEOPLE } from "../../constants/api";
import { getPeopleId, getPeopleImg } from "../../services/getPeopleData";
import { withErrorApi } from "../../hoc-helpers/withErrorApi";
// import s from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [people, setPeople] = useState(null);

  const getPeopleList = async (url) => {
    // дожидаемся данных
    const res = await getApiResource(url);

    if (!res) {
      return setErrorApi(true);
    }

    // отрисовываем
    const peopleList = res.results.map(({ name, url }) => {
      const id = getPeopleId(url);
      const img = getPeopleImg(id);
      return {
        id,
        name,
        img,
      };
    });

    setPeople(peopleList);
    setErrorApi(false);
  };

  useEffect(() => {
    getPeopleList(API_PEOPLE);
    // getPeopleList(API_PEOPLE + 5);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
};

export default withErrorApi(PeoplePage);
