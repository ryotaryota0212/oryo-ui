import ApiClient from "@/foundation/api-client.js";
import { API_PATHS } from "@/foundation/api-path.js";

class ApiService {
  static request(apiClient, method, url, data = {}, config = {}) {
    return apiClient[method](url, data, config)
     .then((response) => {
       if (response.status >= 200 && response.status < 300) {
         return response.data;
       } else {
         return Promise.reject('Invalid status code: ' + response.status)
       }
     })
     .catch((error) => {
       console.error(error);
       throw error;
     });
  }

  static getUser() {
    return this.request(ApiClient, "get", API_PATHS.USERS)
  }
}

export default ApiService;
