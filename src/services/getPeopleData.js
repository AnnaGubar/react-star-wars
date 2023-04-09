import {
  SWAPI_BASE_URL,
  SWAPI_PEOPLE,
  GUIDE_IMG_EXTENTION,
  GUIDE_IMG_PERSON,
} from "@constants/api";

const getId = (url, category) => {
  // /\//g - избавляет от слешей вокруг id - /5/
  // https://starwars-visualguide.com/assets/img/characters/5/
  return url.replace(SWAPI_BASE_URL + category, "").replace(/\//g, "");
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
export const getPeopleImg = (id) => `${GUIDE_IMG_PERSON}${id}${GUIDE_IMG_EXTENTION}`;


