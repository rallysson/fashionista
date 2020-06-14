const get = (url: string) => fetch(url);

const API_BASE_URL = "https://5e9935925eabe7001681c856.mockapi.io/api/v1";

export const getProducts = async () => {
  const res = await get(`${API_BASE_URL}/catalog`);

  return res.json();
};
