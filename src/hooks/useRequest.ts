import useSWR from 'swr';
import qs from 'qs';

const underscore = (obj: Record<string, any>) => {
  const result = {};
  Object.keys(obj).forEach((key) => {
    result[key.replace(/[A-Z]/g, (c) => `${c.toLowerCase()}`)] = obj[key];
  });
  return result;
};

export default function useRequest(
  path: string,
  params?: Record<string, any>,
  options?: RequestInit,
  config = {}
) {
  return useSWR(
    path + (params ? JSON.stringify(params) : ''),
    async () => {
      const config = {
        ...options,
        headers: {
          ['Accept']: 'application/json',
          ['Authorization']: `Bearer ${process.env.API_ACCESS_TOKEN}`,
          ['Content-Type']: 'application/json',
          ...options?.headers
        }
      };

      let url = `https://api.themoviedb.org/3${path}`;

      if (params) {
        params = underscore(params);
        if (/POST|PACTH/i.test(options?.method) && params) {
          config.body = JSON.stringify(params);
        } else {
          url += '?' + qs.stringify(params);
        }
      }

      const response = await fetch(url, config);
      const data = await response.json();

      return data;
    },
    config
  );
}
