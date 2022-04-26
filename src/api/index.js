import axios from 'axios';

const url = 'https://api.covid19api.com/summary';

export const fetchData = async () => {
  try {
    const { data } = await axios.get(url).then((result)=> result);
    return data;
  } catch (error) {
    return error;
  }
};

export const fetchCountries = async () => {
  try {
    const { data: { Countries } } = await axios.get(url);

    return Countries.map((Country) => Country.Country);
  } catch (error) {
    return error;
  }
};