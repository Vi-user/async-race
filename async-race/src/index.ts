import { garageButton, winnersButton } from './components/Header/Header';
import { getCarsOnPage } from './api';
import './index.scss';

console.log('index.ts');

const test = (a: number, b: number): number => a + b;

console.log(test(2.3, 6));

document?.querySelector('body')?.append(garageButton, winnersButton);

const { carsData, carsQuantity } = getCarsOnPage({ 1 });
console.log(carsData);
console.log(carsQuantity);
