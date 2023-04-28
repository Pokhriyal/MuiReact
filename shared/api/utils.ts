import { JSON_PLACEHOLDER_BASE_URL, BASE_URL } from './constants';

export const callJsonPlaceholder = (url: string, init?: RequestInit) =>
  fetch(`${JSON_PLACEHOLDER_BASE_URL}${url}`, {
    ...init,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());

export const call = (url: string, init?: RequestInit) =>
  fetch(`${BASE_URL}${url}`, {
    ...init,
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  }).then((response) => response.json());
