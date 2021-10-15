export class BaseResponse<T> {
  type: 'success'|'error';
  code: any;
  message: string;
  data: T;
  metadata: unknown;
  meta: any;
  total: number;
}
