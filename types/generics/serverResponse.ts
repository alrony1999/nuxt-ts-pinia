import { AxiosResponse } from "axios";

export interface ServerResponse<T> extends AxiosResponse {
  data: T;
}
