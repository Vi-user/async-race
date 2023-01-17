import { createButton, createNode, ICreateNode } from '../../helper';
import { deleteCar } from '../../api';
import { Car } from '../../types/types';
import './Car-item.scss';

async function handleDeleteBtn(id: number) {
  const deletedItem = document.getElementById(`car_${id}`);
  await deleteCar(id);
  deletedItem?.remove();
}

async function activateUpdateBtn(car: Car) {
  console.log(typeof car.id);
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

export default function createCarItem(car: Car): HTMLElement {
  const trackLine = createNode({
    tag: 'div',
    classes: ['track-line'],
  }) as HTMLElement;
  trackLine.setAttribute('id', `car_${car.id}`);

  const selectCarBtn: ICreateNode = {
    tag: 'button',
    name: 'select',
    classes: ['button', 'car-buttons'],
  };

  const removeCarBtn: ICreateNode = {
    tag: 'button',
    name: 'remove',
    classes: ['button', 'car-buttons'],
  };

  const selectCarButton = createButton(selectCarBtn);
  selectCarButton.addEventListener('click', () => activateUpdateBtn(car));

  const removeCarButton = createButton(removeCarBtn);
  removeCarButton.addEventListener('click', () => handleDeleteBtn(car.id || 0)); // TODO WTH 0?!

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
