import s from "./PeopleList.module.css";

const PeopleList = ({ people }) => {
  return (
    <ul className={s.list__container}>
      {people.map(({ id, name, img }) => (
        <li key={id} className={s.list__item}>
          <a href="/">
            <img src={img} alt={name} className={s.person__photo} />
            <p className={s.person__name}>{name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PeopleList;
