import axios, { AxiosRequestConfig } from 'axios';

export const AXIOS_INSTANCE = axios.create({
  baseURL: 'https://storage.googleapis.com/ya-misc/interviews/front/examples',
});

export const apiAxiosInstance = <T>(
  myConfig: AxiosRequestConfig
): Promise<T> => {
  const promise = AXIOS_INSTANCE({
    ...myConfig,
  }).then(({ data }) => data);

  return promise;
};
