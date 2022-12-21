import axios from 'axios';

export const getGoodsApi = async (url: string) => {
  const { data } = await axios({
    method: 'get',
    url,
  });
  return data;
};
