import { createButton, createNode, ICreateNode } from '../../helper';
import { deleteCar } from '../../api';
import { Car } from '../../types/types';
import './Car-item.scss';

async function handleDeleteBtn(id: number) {
  const deletedItem = document.getElementById(`car_${id}`);
  await deleteCar(id);
  deletedItem?.remove();
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
  selectCarButton.addEventListener('click', () => console.log('update'));

  const removeCarButton = createButton(removeCarBtn);
  // removeCarButton.addEventListener('click', () => deleteCar(car.id || 0));
  removeCarButton.addEventListener('click', () => handleDeleteBtn(car.id || 0));

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
