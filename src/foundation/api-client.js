import axios from 'axios';

function createApiClient(baseURL) {
  const apiClient = axios.create({
    baseURL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  apiClient.interceptors.request.use(config => {
    // Add authentication headers here
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  return apiClient

}

const ApiClient = createApiClient(import.meta.env.VITE_API_URL)

export default ApiClient;
