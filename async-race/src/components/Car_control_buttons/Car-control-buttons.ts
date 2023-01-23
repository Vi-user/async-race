import { startCar, stopCar } from '../../api';
import { RaceStatus } from '../../types/types';
import startCarAnimation from './Animation';
import APP_STATE from '../../state';

export async function handleStartBtn(id?: number): Promise<void> {
  if (typeof id === 'number') {
    const startCarButton = document.getElementById(`start_${id}`) as HTMLButtonElement;
    startCarButton.disabled = true;
    const stopCarButton = document.getElementById(`stop_${id}`) as HTMLButtonElement;
    stopCarButton.disabled = false;
    const { velocity, distance } = await startCar(id, RaceStatus.START);
    await startCarAnimation(id, velocity, distance);
  }
}

export async function handleStopBtn(id?: number): Promise<void> {
  if (typeof id === 'number') {
    cancelAnimationFrame(APP_STATE.animationID[id]);
    const startCarButton = document.getElementById(`start_${id}`) as HTMLButtonElement;
    startCarButton.disabled = false;
    const stopCarButton = document.getElementById(`stop_${id}`) as HTMLButtonElement;
    stopCarButton.disabled = true;

    await stopCar(id, RaceStatus.STOP);
    const car = document.getElementById(`car_${id}`) as HTMLSpanElement;
    car.style.transform = 'translateX(0)';
  }
}
