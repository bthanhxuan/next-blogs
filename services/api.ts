import fetch from 'isomorphic-fetch';
import { BASE_URL } from "@/constants";

type ConfigType = {
  data?: any | undefined,
  method?: string,
  token?: string,
}

type ConfigFormType = {
  data: FormData,
  method?: string,
  token: string,
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
    // return fetch(URL, config).then(res => res.json())
    return fetch(URL, config).then(res => {
      return {
        total: res.headers.get('x-wp-total'),
        totalPage: res.headers.get('x-wp-totalpages'),
        data: res.json()
      }
    })
  },
  callOrg: async (url: string, {data, method = 'GET'}: ConfigType = {}) => {
    const URL = `${BASE_URL}${url}`;
    const config = {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    return fetch(URL, config).then(res => res.json())
    // return fetch(URL, config).then(res => {
    //   return {
    //     total: res.headers.get('x-wp-total'),
    //     totalPage: res.headers.get('x-wp-totalpages'),
    //     data: res.json()
    //   }
    // })
  },
  callWithToken: async (url: string, {data, method = 'GET', token}: ConfigType ) => {
    const URL = `${BASE_URL}${url}`;
    const config = {
      method,
      headers: {
        "Content-Type": "application/json",
        "Authorization": 'Bearer ' + token
      },
      body: JSON.stringify(data)
    }
    return fetch(URL, config).then(res => res.json())
  },
  callFormData: async (url: string, {data, method = "POST", token}: ConfigFormType) => {
    const URL = `${BASE_URL}${url}`;
    const config = {
      method,
      headers: {
        "Authorization": `Bearer ${token}`
      },
      body: data,
    }
    return fetch(URL, config).then(res => res.json())
  },
  callJson: async (url: string, data: any | undefined, method = 'GET') => {
    const URL = `${BASE_URL}${url}`
    const config = {
      method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    return fetch(URL, config).then(res => res.json())
  },
}

export default API;