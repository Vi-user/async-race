import { createButton, createNode, ICreateButton } from '../../helper';
import { deleteCar } from '../../api';
import { Car } from '../../types/types';
import './Car-item.scss';

async function handleDeleteBtn(id?: number): Promise<void> {
  if (typeof id === 'number') {
    const deletedItem = document.getElementById(`car_${id}`);
    await deleteCar(id);
    deletedItem?.remove();
  }
}

async function activateUpdateBtn(car: Car) {
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

export function handleUpdate(car: Car) {
  return () => activateUpdateBtn(car);
}

export default function createCarItem(car: Car): HTMLElement {
  const trackLine = createNode({
    tag: 'div',
    classes: ['track-line'],
  }) as HTMLElement;
  trackLine.setAttribute('id', `car_${car.id}`);

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
  }) as HTMLFormElement;
  carName.innerText = car.name;

  const carSVG = createNode({
    tag: 'div',
    classes: ['car-SVG'],
  }) as HTMLFormElement;
  carName.innerText = car.name;
  carSVG.style.background = car.color;

  trackLine.append(selectCarButton, removeCarButton, carName, carSVG);

  return trackLine;
}
