import axios from 'axios';
import {getSession} from 'next-auth/react';



const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  },
});

request.interceptors.request.use(
  async config => {
    const session = await getSession(); // Get session (for client-side)

    console.log(session)

    if (session?.token) {
      // Attach token to the request header
      config.headers['Authorization'] = `Bearer ${session?.token}`;
    }

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    throw error;
  },
);

export {request};
