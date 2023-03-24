import fetch from 'isomorphic-fetch';
import { BASE_URL } from "@/constants";

type ConfigType = {
  data?: any,
  method?: string
}

const API = {
  call: async (url: string, {data, method = 'GET'}: ConfigType = {}) => {
    const URL = `${BASE_URL}${url}`;
    const config = {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    return fetch(URL, config).then(res => res.json())
  }
}

export default API;