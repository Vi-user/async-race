import { getCarsOnPage, CARS_PER_PAGE } from './api';

const { carsQuantity } = await getCarsOnPage({ page: 1, limit: CARS_PER_PAGE });

type AnimationID = {
  [key: number]: number;
};

interface State {
  currentPage: number;
  totalCars: number;
  winnersPage: number;
  totalWinners: number;
  animationID: AnimationID;
}

const APP_STATE: State = {
  currentPage: 1,
  totalCars: Number(carsQuantity),
  winnersPage: 1,
  totalWinners: 1,
  animationID: {},
};

export default APP_STATE;
