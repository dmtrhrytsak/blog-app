export const request = async <T>(
  url: string,
  options?: RequestInit,
): Promise<T> => {
  const response = await fetch(url, options);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response.json() as Promise<T>;
};

export const requestWithQuery = async <T>(
  url: string,
  query: Record<string, string>,
  options?: RequestInit,
): Promise<T> => request<T>(`${url}?${makeQuery(query)}`, options);

const makeQuery = (query: Record<string, string>) =>
  Object.keys(query)
    .map((key) => key + '=' + query[key])
    .join('&');
