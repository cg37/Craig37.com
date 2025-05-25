import { AxiosRequestConfig } from "axios";
import request from './instance'

interface RequestParamsInstance {
  url: string;
  data?: Record<string, any>;
  config?: Record<string, any>;
}

export type ResponeTypeValue<T> = {
  metadata: any;
  dataset: any;
  data: T;
  code: string;
  message: string;
  seuucess: boolean;
}

export function GET<T = any>(url: string, opts?: AxiosRequestConfig):Promise<T> {
  const options : AxiosRequestConfig = {
    url,
    method: 'GET',
    ...opts,
  };
  return request(options)
    .then((result) => {
      return result as unknown as T;
    })
    .catch((err) => {
      return err as unknown as T;
    });
}

export function POST<T = any>({url, data, config}: RequestParamsInstance): ResponseType<T> {
  return request.post(url, data,config);
}
