import { createButton, ICreateButton } from '../../helper';
import { addCar } from '../../api';
import APP_STATE from '../../state';
import { currentCarsQuantity } from '../Cars-statistic/Cars-statistic';

const GENERATE_CARS_BY_CLICK = 100;
const MODELS_BY_BRAND = 3;
const carBrands = [
  'Toyota',
  'Audi',
  'BMW',
  'Ford',
  'Honda',
  'Hyundai',
  'Kia',
  'Lada',
  'Mazda',
  'Volkswagen',
];
const carModels = [
  'Camry',
  'Highlander',
  'Hilux',
  'R8',
  'A3',
  'Q7',
  'X4',
  'M5',
  'Z4',
  'Explorer',
  'Focus',
  'Mustang',
  'Civic',
  'CR-Z',
  'Shuttle',
  'Creta',
  'Equus',
  'Sonata',
  'Rio',
  'K5',
  'Optima',
  'Vesta',
  'Granta',
  'Kalina',
  'CX-5',
  '6',
  'CX-9',
  'Jetta',
  'Tiguan',
  'Passat',
];

export function generateColor(): string {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomNum(min: number, max: number): number {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
}

export function generateName(): string {
  const brandIndex = getRandomNum(0, 9);
  const modelIndex = getRandomNum(0, 2);
  const brand = carBrands[brandIndex];
  const model = carModels[MODELS_BY_BRAND * brandIndex + modelIndex];
  return `${brand} ${model}`;
}

const generateCarsBtn: ICreateButton = {
  tag: 'button',
  name: 'generate cars',
  classes: ['button', 'header-buttons'],
};

function makeCarsArray(): string[] {
  const carArray = [];
  for (let i = 0; i < GENERATE_CARS_BY_CLICK; i += 1) {
    const carName = generateName();
    const carColor = generateColor();
    carArray.push(`${carName}&&${carColor}`);
  }
  console.log(carArray, 'carArray');
  return carArray;
}

async function generateCars() {
  const carArray = makeCarsArray();
  carArray.map(async (el) => {
    const [carName, carColor] = el.split('&&');
    await addCar({ name: `${carName}`, color: `${carColor}` });
    APP_STATE.totalCars += 1;
    currentCarsQuantity();
  });
}

export const generateCarsButton = createButton(generateCarsBtn) as HTMLButtonElement;
generateCarsButton.addEventListener('click', generateCars);

export default generateCarsButton;
