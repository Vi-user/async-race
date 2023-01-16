import { PAGES, Car } from './types/types';

const BASE_URL = 'http://127.0.0.1:3000';

export const garagePageUrl = `${BASE_URL}/${PAGES.GARAGE}`;

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
}

export type GetCarsParams = {
  page: number;
  limit: number;
};

export type GetCarsResponse = {
  carsData: Car[];
  carsQuantity: string | null;
};

export const getCarsOnPage = async ({
  page,
  limit = 7,
}: GetCarsParams): Promise<GetCarsResponse> => {
  const response = await fetch(`${garagePageUrl}?page=${page}&_limit=${limit}`);
  const carsData = await response.json();
  const carsQuantity = response?.headers?.get('X-Total-Count');
  return { carsData, carsQuantity };
};

export const getCar = async (id: number): Promise<Car> => {
  const response = await fetch(`${garagePageUrl}/${id}`);
  const carData = await response.json();
  return carData;
};

export const addCar = async ({ name, color }: Car): Promise<Car> => {
  const response = await fetch(`${garagePageUrl}?name=${name}&color=${color}`, {
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
