// import { createButton, createNode, ICreateButton } from '../../helper';
//
// const startCarBtn: ICreateButton = {
//   tag: 'button',
//   name: 'start',
//   classes: ['button', 'engine-buttons'],
// };
//
// const stopCarBtn: ICreateButton = {
//   tag: 'button',
//   name: 'stop',
//   classes: ['button', 'engine-buttons'],
// };
//
// const startCarButton = createButton(startCarBtn);
// const stopCarButton = createButton(stopCarBtn);
// stopCarButton.setAttribute('disabled', 'true');
//
// const carControlContainer = createNode({
//   tag: 'div',
//   classes: ['car-control-container'],
// }) as HTMLDivElement;
// carControlContainer.append(startCarButton, stopCarButton);
//
// // export default carControlContainer;

import { startCar } from '../../api';
import { RaceStatus } from '../../types/types';

function makeAnimation(id: number, velocity: number, distance: number): void {
  const car = document.getElementById(`car_${id}`) as HTMLSpanElement;
  let currentPosition = car.offsetLeft;
  const flag = document.getElementById(`flag_${id}`) as HTMLSpanElement;
  const endPosition = flag.offsetLeft;
  const framesCount = (distance / velocity / 1000) * 60;
  const step = (endPosition - currentPosition) / framesCount;

  const animation = (): void => {
    currentPosition += step;
    car.style.transform = `translateX(${currentPosition}px)`;
    if (currentPosition < endPosition) {
      requestAnimationFrame(animation);
    }
  };
  animation();
}

async function handleStartBtn(id?: number): Promise<void> {
  if (typeof id === 'number') {
    // const deletedItem = document.getElementById(`car-line_${id}`);
    const { velocity, distance } = await startCar(id, RaceStatus.START);
    console.log(velocity);
    console.log('distance', distance);
    makeAnimation(id, velocity, distance);
    // await deleteCar(id);
    // TODO check success
    // TODO check success
    // APP_STATE.totalCars -= 1;
    // currentCarsQuantity();
    // deletedItem?.remove();
  }
}

export default handleStartBtn;
