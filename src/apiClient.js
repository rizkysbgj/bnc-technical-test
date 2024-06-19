import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: {}
});

const postData = (url, data = {}, config = {}) => {
  return apiClient.post(url, data, config);
}

export { postData };