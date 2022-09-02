const axios = require('axios');

const axiosInstance = axios.create({
  timeout: 10000,
  maxRedirects: 5,
});

const request = async (options) => {
  const axiosResponse = await axiosInstance({
    method: 'GET',
    ...options,
  });
  return axiosResponse?.data;
};

const getHtmlContent = async (url, params) => request({ url, responseType: 'text', params });

module.exports = {
  request,
  getHtmlContent
};