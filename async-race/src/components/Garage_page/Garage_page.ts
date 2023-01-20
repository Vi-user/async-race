import { createNode } from '../../helper';
import { getCarsOnPage } from '../../api';
import createCarItem from '../Car-item/Car-item';
import './Garage_page.scss';

const { carsData, carsQuantity } = await getCarsOnPage({ page: 1, limit: 100 });
export const garageContainer = createNode({
  tag: 'div',
  classes: ['garage-container'],
}) as HTMLFormElement;

const garageRing = createNode({
  tag: 'div',
  classes: ['garage-ring'],
}) as HTMLFormElement;
garageRing.setAttribute('id', 'garage-ring');

carsData?.map((el) => garageRing.append(createCarItem(el)));

garageContainer.append(garageTitle, garagePageNumber, garageRing);
