import { createButton, createNode, ICreateButton, renderCar, renderFlag } from '../../helper';
import { CARS_PER_PAGE, deleteCar, getCarsOnPage } from '../../api';
import { Car } from '../../types/types';
import APP_STATE from '../../state';
import { currentCarsQuantity, currentPage } from '../Cars-statistic/Cars-statistic';
import { handleStartBtn, handleStopBtn } from '../Car_control_buttons/Car-control-buttons';
import { drawCarsOnPage } from '../Garage_page/Garage_page';
import './Car-item.scss';

async function handleDeleteBtn(id?: number): Promise<void> {
  if (typeof id === 'number') {
    await deleteCar(id);
    // TODO check success
    APP_STATE.totalCars -= 1;
    currentCarsQuantity();
    if (APP_STATE.totalCars / CARS_PER_PAGE <= APP_STATE.currentPage - 1) {
      APP_STATE.currentPage -= 1;
      const { carsData } = await getCarsOnPage({
        page: APP_STATE.currentPage,
        limit: CARS_PER_PAGE,
      });
      currentPage(APP_STATE.currentPage);
      drawCarsOnPage(carsData);
    } else if (APP_STATE.currentPage < Math.ceil(APP_STATE.totalCars / CARS_PER_PAGE)) {
      const { carsData } = await getCarsOnPage({
        page: APP_STATE.currentPage,
        limit: CARS_PER_PAGE,
      });
      drawCarsOnPage(carsData);
    } else {
      const deletedItem = document.getElementById(`car-line_${id}`);
      deletedItem?.remove();
    }
  }
}

async function activateUpdateBtn(car: Car): Promise<void> {
  const formUpdate = document.getElementById('updateCarForm') as HTMLFormElement;
  const carID = formUpdate.getElementsByClassName('carIDInput')[0] as HTMLInputElement;
  carID.value = `${car.id}`;
  const carName = formUpdate.getElementsByClassName('carNameInput')[0] as HTMLInputElement;
  carName.removeAttribute('disabled');
  carName.value = car.name;
  const carColor = formUpdate.getElementsByClassName('carColorInput')[0] as HTMLInputElement;
  carColor.removeAttribute('disabled');
  carColor.value = car.color;
  const carBtn = formUpdate.getElementsByClassName('update-button')[0];
  carBtn.removeAttribute('disabled');
}

export function handleUpdate(car: Car): () => void {
  return () => activateUpdateBtn(car);
}

export default function createCarItem(car: Car): HTMLElement {
  const carLine = createNode({
    tag: 'div',
    classes: ['car-line'],
  }) as HTMLElement;
  carLine.setAttribute('id', `car-line_${car.id}`);

  const selectCarBtn: ICreateButton = {
    tag: 'button',
    name: 'select',
    classes: ['button', 'car-buttons'],
  };

  const removeCarBtn: ICreateButton = {
    tag: 'button',
    name: 'remove',
    classes: ['button', 'car-buttons'],
  };

  const selectCarButton = createButton(selectCarBtn);
  selectCarButton.classList.add('updateCarButton');
  selectCarButton.addEventListener('click', handleUpdate(car));

  const removeCarButton = createButton(removeCarBtn);
  removeCarButton.addEventListener('click', () => handleDeleteBtn(car.id));

  const carName = createNode({
    tag: 'span',
    classes: ['track-name'],
  }) as HTMLSpanElement;
  carName.innerText = car.name;

  const startCarBtn: ICreateButton = {
    tag: 'button',
    name: 'start',
    classes: ['engine-buttons', 'engine-buttons_start'],
  };

  const stopCarBtn: ICreateButton = {
    tag: 'button',
    name: 'stop',
    classes: ['engine-buttons', 'engine-buttons_stop'],
  };

  const startCarButton = createButton(startCarBtn);
  startCarButton.setAttribute('id', `start_${car.id}`);
  const stopCarButton = createButton(stopCarBtn);
  stopCarButton.setAttribute('id', `stop_${car.id}`);
  stopCarButton.setAttribute('disabled', 'true');

  const carSVG = createNode({
    tag: 'span',
    classes: ['car-SVG'],
  }) as HTMLSpanElement;
  carSVG.setAttribute('id', `car_${car.id}`);
  carSVG.innerHTML = renderCar(car.color);

  const carControlContainer = createNode({
    tag: 'div',
    classes: ['car-control-container'],
  }) as HTMLDivElement;
  carControlContainer.append(startCarButton, stopCarButton, carSVG);

  const flagSVG = createNode({
    tag: 'span',
    classes: ['flag-SVG'],
  }) as HTMLSpanElement;
  flagSVG.setAttribute('id', `flag_${car.id}`);
  flagSVG.innerHTML = renderFlag();

  const trackLine = createNode({
    tag: 'div',
    classes: ['track-line'],
  }) as HTMLDivElement;
  trackLine.append(carControlContainer, flagSVG);

  carLine.append(selectCarButton, removeCarButton, carName, trackLine);

  startCarButton.addEventListener('click', () => handleStartBtn(car.id));
  stopCarButton.addEventListener('click', () => handleStopBtn(car.id));

  return carLine;
}
