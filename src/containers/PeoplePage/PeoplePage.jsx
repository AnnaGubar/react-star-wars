import PropTypes from "prop-types";
import { useState, useEffect } from "react";

import { withErrorApi } from "@hoc-helpers/withErrorApi";
import PeopleList from "@components/PeoplePage/PeopleList";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";
import { API_PEOPLE } from "@constants/api";

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
    getPeopleList(API_PEOPLE); // correct url
    // getPeopleList(API_PEOPLE + 5); // invalid url
  }, []);

  return <>{people && <PeopleList people={people} />}</>;
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func.isRequired,
};

export default withErrorApi(PeoplePage);

