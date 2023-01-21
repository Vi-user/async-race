import { PAGES, Car, RaceData, RaceStatus } from './types/types';

const BASE_URL = 'http://127.0.0.1:3000';
export const CARS_PER_PAGE = 7;
export const garagePageUrl = `${BASE_URL}/${PAGES.GARAGE}`;
export const engineUrl = `${BASE_URL}/engine`;

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export type GetCarsParams = {
  page: number;
  limit: number;
};

export type GetCarsResponse = {
  carsData: Car[];
  carsQuantity: string;
};

export const getCarsOnPage = async ({
  page,
  limit = CARS_PER_PAGE,
}: GetCarsParams): Promise<GetCarsResponse> => {
  const response = await fetch(`${garagePageUrl}?_page=${page}&_limit=${limit}`);
  const carsData = await response.json();
  const carsQuantity = response.headers.get('X-Total-Count') || '1';
  return { carsData, carsQuantity };
};

export const getCar = async (id: number): Promise<Car> => {
  const response = await fetch(`${garagePageUrl}/${id}`);
  const carData = await response.json();
  return carData;
};

export const addCar = async ({ name, color }: Car): Promise<Car> => {
  const response = await fetch(`${garagePageUrl}`, {
    method: Methods.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, color }),
  });
  const newCar = await response.json();
  return newCar;
};

export const updateCar = async ({ name, color, id }: Car): Promise<Car> => {
  const response = await fetch(`${garagePageUrl}/${id}`, {
    method: Methods.PUT,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, color }),
  });
  const updatedCar = await response.json();
  return updatedCar;
};

export const deleteCar = async (id: number): Promise<void> => {
  // try {
  const response = await fetch(`${garagePageUrl}/${id}`, {
    method: Methods.DELETE,
  });
  const responseStatus = await response.json();
  return responseStatus;
  // } catch (err) { throw new Error(`${err}`);}
};

export const startCar = async (id: number, status: RaceStatus): Promise<RaceData> => {
  const response = await fetch(`${engineUrl}/?id=${id}&status=${status}`, {
    method: Methods.PATCH,
  });
  const raceData = await response.json();
  return raceData;
};

export const checkEngine = async (id: number, status: RaceStatus): Promise<RaceData> => {
  const response = await fetch(`${engineUrl}/?id=${id}&status=${status}`, {
    method: Methods.PATCH,
  });
  const res = await response.json();
  return res;
};

export const stopCar = async (id: number, status: RaceStatus): Promise<RaceData> => {
  const response = await fetch(`${engineUrl}/?id=${id}&status=${status}`, {
    method: Methods.PATCH,
  });
  const raceData = await response.json();
  return raceData;
};
