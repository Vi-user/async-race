import { createNode } from '../../helper';
import { getCarsOnPage } from '../../api';
import createCarItem from '../Car-item/Car-item';
import './Garage_page.scss';

const { carsData, carsQuantity } = await getCarsOnPage({ page: 1, limit: 100 });
export const garageContainer = createNode({
  tag: 'div',
  classes: ['garage-container'],
}) as HTMLFormElement;

export const garageTitle = createNode({
  tag: 'p',
  classes: ['garage-title'],
}) as HTMLFormElement;
garageTitle.innerText = `Garage (${carsQuantity})`;

const garagePageNumber = createNode({
  tag: 'p',
  classes: ['garage-page-number'],
}) as HTMLFormElement;
garageTitle.innerText = 'Page #1';

const garageRing = createNode({
  tag: 'div',
  classes: ['garage-ring'],
}) as HTMLFormElement;

carsData?.map((el) => garageRing.append(createCarItem(el)));

garageContainer.append(garageTitle, garagePageNumber, garageRing);
