import { garageButton, winnersButton } from './components/Header/Header';
// import { getCarsOnPage, getCar, addCar, deleteCar, updateCar } from './api';
import './index.scss';
import createForm from './components/Garage_control_pannel/Garage_control_pannel_Create';
import { garageContainer } from './components/Garage_page/Garage_page';
import updateForm from './components/Garage_control_pannel/Garage_control_pannel_Update';

document
  ?.querySelector('body')
  ?.append(garageButton, winnersButton, createForm, updateForm, garageContainer);

// const myCar = await getCar(2);
// // const newCar = await addCar({ name: 'test2', color: 'blue23' });
//
// const updatedCar = await updateCar({ name: 'volvo', color: 'perlamutr', id: 23 });
// const { carsData, carsQuantity } = await getCarsOnPage({ page: 1, limit: 100 });
// // console.log('responseDelete', responseDelete);
// console.log('myCar', myCar); // obj
// // console.log('newCar', newCar); // obj
// console.log('updatedCar', updatedCar); // obj
// console.log('carsData', carsData);
// console.log('carsQuantity', carsQuantity);
