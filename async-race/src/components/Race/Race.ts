import { createButton, ICreateButton } from '../../helper';
import './Race.scss';
import { startCar, stopCar } from '../../api';
import { RaceData, RaceStatus } from '../../types/types';
import startCarAnimation from '../Car_control_buttons/Animation';
import { handleStopBtn } from '../Car_control_buttons/Car-control-buttons';
import APP_STATE from '../../state';

const raceBtn: ICreateButton = {
  tag: 'button',
  name: 'race',
  classes: ['race-buttons', 'race-buttons_race'],
};

const resetRaceBtn: ICreateButton = {
  tag: 'button',
  name: 'reset',
  classes: ['race-buttons', 'race-buttons_reset'],
};

export const raceButton: HTMLButtonElement = createButton(raceBtn);
raceButton.setAttribute('id', 'raceBtn');

export const resetRaceButton: HTMLButtonElement = createButton(resetRaceBtn);
resetRaceButton.setAttribute('id', 'resetRaceBtn');
resetRaceButton.disabled = true;

const getCarsIDOnPage = (): FlatArray<number[], 1>[] => {
  const carsOnPage = document.querySelectorAll('.car-line') as NodeListOf<HTMLDivElement>;
  return [...carsOnPage].map((car) => Number(car.id.split('_').slice(-1))).flat();
};

async function handleRace(): Promise<void> {
  raceButton.disabled = true;
  const buttonsStart = document.querySelectorAll(
    '.engine-buttons_start',
  ) as NodeListOf<HTMLButtonElement>;
  [...buttonsStart].map((button) => button.setAttribute('disabled', 'true'));
  const carsID = getCarsIDOnPage();
  const carsInfo = await Promise.all(
    carsID.map(async (id: number) => startCar(id, RaceStatus.START)),
  );
  await Promise.all(
    carsInfo.map(async (car: RaceData, index: number) => {
      const { velocity, distance } = car;
      // console.log(carsID[index], velocity, distance);
      await startCarAnimation(carsID[index], velocity, distance);
    }),
  );
  resetRaceButton.disabled = false;
}

async function handleResetRace(): Promise<void> {
  console.log('APP_STATE.animationID', APP_STATE.animationID);
  raceButton.disabled = false;
  resetRaceButton.disabled = true;
  const buttonsStart = document.querySelectorAll(
    '.engine-buttons_start',
  ) as NodeListOf<HTMLButtonElement>;
  [...buttonsStart].map((button) => button.removeAttribute('disabled'));
  const carsID = getCarsIDOnPage();
  await Promise.all(carsID.map(async (id: number) => stopCar(id, RaceStatus.STOP)));
  await Promise.all(
    carsID.map(async (id: number) => {
      await handleStopBtn(id);
    }),
  );
}

raceButton.addEventListener('click', handleRace);
resetRaceButton.addEventListener('click', handleResetRace);
