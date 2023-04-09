import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import s from "./PeopleNavigation.module.css";
import { API_PEOPLE } from "@constants/api";


const PeopleNavigation = ({
  getPeopleList,
  prevPage,
  nextPage,
  // counterPage,
  page,
}) => {

  const handlePrevPage = () => getPeopleList(API_PEOPLE, prevPage);
  const handleNextPage = () => getPeopleList(API_PEOPLE, nextPage);

  return (
    <div>

      <Link to={`/people/?page=${page - 1}`} className={s.link}>
        <button onClick={handlePrevPage}
         disabled={!prevPage}
          className={s.btn}>
          Previous
        </button>
      </Link>

      <Link to={`/people/?page=${page + 1}`} className={s.link}>
        <button onClick={handleNextPage}
         disabled={!nextPage}
          className={s.btn}>
          Next
        </button>
      </Link>

    </div>
  );
};

PeopleNavigation.propTypes = {
  test: PropTypes.arrayOf(
    PropTypes.shape({
      getPeopleList: PropTypes.func.isRequired,
      prevPage: PropTypes.number.isRequired,
      nextPage: PropTypes.number.isRequired,
      counterPage: PropTypes.number.isRequired,
    })
  ),
};

export default PeopleNavigation;
