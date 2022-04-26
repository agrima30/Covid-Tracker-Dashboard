import axios from 'axios';

const url = 'https://api.covid19api.com/summary';


export const fetchData = async () => {
  try {
    const { data:{Global} } = await axios.get(url).then((result)=> result);
    return Global;
  } catch (error) {
    return error;
  }
};

// export const fetchDailyData = async () => {
//   try {
//     const { data } = await axios.get(`${url}/daily`);

//     return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));
//   } catch (error) {
//     return error;
//   }
// };

export const fetchCountries = async () => {
  try {
    const { data: { Countries } } = await axios.get(url);

    return Countries.map((Country) => Country.Country);
  } catch (error) {
    return error;
  }
};