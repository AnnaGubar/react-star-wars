//? res.ok, res.status

/**
 * Отправляет запрос Fetch
 * @param {String} url для запроса
 * @returns {Promise} Promise с результатом запроса
 */

export const getApiResource = async (url) => {
  try {
    // запрос по URL
    const res = await fetch(url);

    // обработать неправильный URL, false отправляет в метод catch
    if (!res.ok) {
      console.log("There is some problem with URL.", res.status);
      return false;
    }

    // правильный URL - отдаем данные в json-формате
    return await res.json();

  } catch (error) {
    console.error("Failed to fetch.", error.message);

    return false;
  }
};

// (async () => {
//   // распаковка данных с json-формата
//   const result = await getApiResource(SWAPI_BASE_URL + SWAPI_PEOPLE_SEARCH);
//   console.log(result);
// })();
