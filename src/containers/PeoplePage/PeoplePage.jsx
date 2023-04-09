import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import PropTypes from "prop-types";

import PeopleList from "@components/PeoplePage/PeopleList";
import PeopleNavigation from "@components/PeoplePage/PeopleNavigation";
import { API_PEOPLE } from "@constants/api";
import { withErrorApi } from "@hoc-helpers/withErrorApi";
import { getApiResource } from "@utils/network";
import { getPeopleId, getPeopleImg } from "@services/getPeopleData";

// import s from "./PeoplePage.module.css";

const PeoplePage = ({ setErrorApi }) => {
  const [searchParams] = useSearchParams();
  const [people, setPeople] = useState(null);
  const [prevPage, setPrevPage] = useState(null);
  const [nextPage, setNextPage] = useState(null);
  // const [counterPage, setCounterPage] = useState(null);

  const page = Number(searchParams.get("page"));
  // console.log("⭐ ~ page:", prevPage, page, nextPage); 

  const getPeopleList = async (url, page) => {
    // дожидаемся данных
    const res = await getApiResource(url + page);
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

    page === 1
      ? setPrevPage(null)
      : setPrevPage(Number(res.previous.replace(API_PEOPLE, "")));

    !res.next
      ? setNextPage(null)
      : setNextPage(Number(res.next.replace(API_PEOPLE, "")));

    // setCounterPage(page);

    setErrorApi(false);
  };

  useEffect(() => {
    getPeopleList(API_PEOPLE, page); // correct url
    // getPeopleList(API_PEOPLE + 5); // invalid url
  }, [page]);

  return (
    <>
      <PeopleNavigation
        getPeopleList={getPeopleList}
        prevPage={prevPage}
        nextPage={nextPage}
        // counterPage={counterPage}
        page={page}
      />
      {people && <PeopleList people={people} />}
    </>
  );
};

PeoplePage.propTypes = {
  setErrorApi: PropTypes.func.isRequired,
};

export default withErrorApi(PeoplePage);
