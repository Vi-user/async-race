import { getCarsOnPage, CARS_PER_PAGE } from './api';

const { carsQuantity } = await getCarsOnPage({ page: 1, limit: CARS_PER_PAGE });

interface State {
  currentPage: number;
  totalCars: number;
  winnersPage: number;
  totalWinners: number;
}

const APP_STATE: State = {
  currentPage: 1,
  totalCars: Number(carsQuantity),
  winnersPage: 1,
  totalWinners: 1,
};

export default APP_STATE;
