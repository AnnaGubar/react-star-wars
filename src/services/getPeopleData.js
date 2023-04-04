import {
  SWAPI_BASE_URL,
  SWAPI_PEOPLE,
  GUIDE_IMG_EXTENTION,
  GUIDE_IMG_PERSON,
} from "../constants/api";

const getId = (url, category) => {
  // /\//g - избавляемся от слешей вокруг id
  const id = url.replace(SWAPI_BASE_URL + category, "").replace(/\//g, "");
  return id;
};

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE);
export const getPeopleImg = (id) => `${GUIDE_IMG_PERSON}${id}${GUIDE_IMG_EXTENTION}`;
