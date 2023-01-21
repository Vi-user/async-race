import { createNode } from '../../helper';
import { getCarsOnPage } from '../../api';
import createCarItem from '../Car-item/Car-item';
import './Garage_page.scss';
import { Car } from '../../types/types';
import { garagePageNumber, garageTitle } from '../Cars-statistic/Cars-statistic';

const { carsData } = await getCarsOnPage({ page: 1, limit: 7 });
const garageContainer = createNode({
  tag: 'div',
  classes: ['garage-container'],
}) as HTMLFormElement;

const garageRing = createNode({
  tag: 'div',
  classes: ['garage-ring'],
}) as HTMLFormElement;

garageRing.setAttribute('id', 'garage-ring');

export function drawCarsOnPage(carsArray: Car[]): void {
  const carsContainer = document.getElementById('garage-ring') as HTMLElement;
  carsContainer.innerHTML = '';
  console.log('carsContainer', carsContainer);
  carsArray.map((el) => carsContainer.append(createCarItem(el)));
}
carsData?.map((el) => garageRing.append(createCarItem(el)));

garageContainer.append(garageTitle, garagePageNumber, garageRing);

export default garageContainer;
