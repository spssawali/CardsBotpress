import axios from 'axios';

const BASE_URL = 'https://api.magicthegathering.io/v1';

export const fetchCards = async (page, limit, name) => {
    console.log("ye to me name oe aa gya", name,page,limit);
  try {
    const response = await axios.get(`${BASE_URL}/cards?page=${page}&pageSize=${limit}&name=${name}`);
   
    let res=response.data.cards;
    console.log('res', res);
    return res;
  } catch (error) {
    console.error('Error fetching cards:', error);
    return [];
  }
};