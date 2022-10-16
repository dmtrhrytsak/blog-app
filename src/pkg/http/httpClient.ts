import { request, requestWithQuery } from './request';

const get = async <T>(url: string): Promise<T> => request<T>(url);

const post = async <T, U>(url: string, data: T): Promise<U> =>
  request<U>(url, {
    method: 'POST',
    body: JSON.stringify(data),
  });

const put = async <T, U>(url: string, data: T): Promise<U> =>
  request<U>(url, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

const putWithQuery = async <T, U>(
  url: string,
  query: Record<string, string>,
  data: T,
): Promise<U> =>
  requestWithQuery<U>(url, query, {
    method: 'PUT',
    body: JSON.stringify(data),
  });

const del = async <T>(url: string): Promise<T> =>
  request<T>(url, { method: 'DELETE' });

export const httpClient = { get, post, put, putWithQuery, del };
