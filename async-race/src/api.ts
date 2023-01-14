import { PAGES, Car } from './types/types';

const BASE_URL = 'http://127.0.0.1:3000';

// enum methods {
//   'GET' = 'GET',
//   'POST' = 'POST',
//   'PATCH' = 'PATCH',
//   'DELETE' = 'DELETE',
// }

export const garagePageUrl = `${BASE_URL}/${PAGES.GARAGE}`;

export type getCarsParams = {
  page: number;
  limit: number;
}

export type getCarsResponse = {
  carsData: Car[];
  carsQuantity: string | null;
}

export const getCarsOnPage = async ({ page, limit = 7 }: getCarsParams): getCarsResponse => {
// export const getCarsOnPage = async () => {
  const response = await fetch(garagePageUrl);
  const carsData = await response.json();
  const carsQuantity = await response?.headers?.get('X-Total-Count');
  return { carsData, carsQuantity };
};
