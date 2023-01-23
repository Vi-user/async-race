import { checkEngine } from '../../api';
import { RaceStatus } from '../../types/types';
import APP_STATE from '../../state';

async function startCarAnimation(id: number, velocity: number, distance: number): Promise<void> {
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
      const animationID = requestAnimationFrame(animation);
      APP_STATE.animationID[id] = animationID;
    }
  };
  animation();

  const { success } = await checkEngine(id, RaceStatus.DRIVE);
  if (!success) cancelAnimationFrame(APP_STATE.animationID[id]);
}

export default startCarAnimation;
