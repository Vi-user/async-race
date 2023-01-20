import { createNode } from '../../helper';
import APP_STATE from '../../state';

export const garageTitle = createNode({
  tag: 'p',
  classes: ['garage-title'],
}) as HTMLFormElement;
garageTitle.innerText = `Garage (${APP_STATE.totalCars})`;

export function currentCarsQuantity(): HTMLElement {
  garageTitle.innerText = `Garage (${APP_STATE.totalCars})`;
  return garageTitle;
}

export const garagePageNumber = createNode({
  tag: 'p',
  classes: ['garage-page-number'],
}) as HTMLFormElement;
garagePageNumber.innerText = `Page #${APP_STATE.currentPage}`;

export function currentPage(page: number): HTMLElement {
  garagePageNumber.innerText = `Page #${page}`;
  return garagePageNumber;
}
