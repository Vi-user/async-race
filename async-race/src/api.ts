import { PAGES, Car, RaceData, RaceStatus, Winner, DriveCheck } from './types/types';

const BASE_URL = 'http://127.0.0.1:3000';
export const CARS_PER_PAGE = 7;
export const WINNERS_PER_PAGE = 10;
export const garagePageUrl = `${BASE_URL}/${PAGES.GARAGE}`;
export const engineUrl = `${BASE_URL}/engine`;
export const winnersUrl = `${BASE_URL}/${PAGES.WINNERS}`;

enum Methods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

enum StatusCodes {
  OK = 200,
  NOT_FOUND = 404,
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

export const checkEngine = async (id: number, status: RaceStatus): Promise<DriveCheck> => {
  try {
    const response = await fetch(`${engineUrl}/?id=${id}&status=${status}`, {
      method: Methods.PATCH,
    });
    const res = await response.json();
    return res;
  } catch (e) {
    return { success: false };
  }
};

export const stopCar = async (id: number, status: RaceStatus): Promise<RaceData> => {
  const response = await fetch(`${engineUrl}/?id=${id}&status=${status}`, {
    method: Methods.PATCH,
  });
  const raceData = await response.json();
  return raceData;
};

export type GetWinnersParams = {
  page: number;
  limit: number;
};

export type GetWinnersResponse = {
  winnersData: Winner[];
  winnersQuantity: string;
};

export const getWinnersOnPage = async ({
  page,
  limit = WINNERS_PER_PAGE,
}: GetWinnersParams): Promise<GetWinnersResponse> => {
  const response = await fetch(`${winnersUrl}?_page=${page}&_limit=${limit}`);
  const winnersData = await response.json();
  const winnersQuantity = response.headers.get('X-Total-Count') || '1';
  return { winnersData, winnersQuantity };
};

function checkResponse<T>(response: Response): Promise<T> | null {
  const { status } = response;

  switch (status) {
    case StatusCodes.OK:
      return response.json();
    case StatusCodes.NOT_FOUND:
      return null;
    default:
      return null;
  }
}

export const getWinner = async (id: number): Promise<Winner | null> => {
  const response = await fetch(`${winnersUrl}/${id}`);
  return checkResponse<Winner>(response);
};

export const addWinner = async ({ id, wins, time }: Winner): Promise<Winner> => {
  const response = await fetch(`${winnersUrl}`, {
    method: Methods.POST,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ id, wins, time }),
  });
  const newWinner = await response.json();
  return newWinner;
};

export const updateWinner = async ({ wins, time, id }: Winner): Promise<Winner> => {
  const response = await fetch(`${winnersUrl}/${id}`, {
    method: Methods.PUT,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ wins, time }),
  });
  const updatedWinner = await response.json();
  return updatedWinner;
};

export const deleteWinner = async (id: number): Promise<void> => {
  const response = await fetch(`${winnersUrl}/${id}`, {
    method: Methods.DELETE,
  });
  const responseStatus = await response.json();
  return responseStatus;
};
