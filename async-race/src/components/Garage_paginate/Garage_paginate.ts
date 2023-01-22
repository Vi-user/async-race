import { ICreateButton, createButton } from '../../helper';
import APP_STATE from '../../state';
import { getCarsOnPage, CARS_PER_PAGE } from '../../api';
import './Garage_paginate.scss';
import { drawCarsOnPage } from '../Garage_page/Garage_page';
import { currentPage } from '../Cars-statistic/Cars-statistic';

const prevBtn: ICreateButton = {
  tag: 'button',
  name: 'prev',
  classes: ['button', 'pagination-buttons', 'prev-button'],
};

const nextBtn: ICreateButton = {
  tag: 'button',
  name: 'next',
  classes: ['button', 'pagination-buttons', 'next-button'],
};

export const prevButton = createButton(prevBtn) as HTMLButtonElement;
if (APP_STATE.currentPage === 1) prevButton.setAttribute('disabled', 'true');
prevButton.setAttribute('id', 'prev-btn');
export const nextButton = createButton(nextBtn) as HTMLButtonElement;
nextButton.setAttribute('id', 'next-btn');
if (APP_STATE.totalCars <= CARS_PER_PAGE) nextButton.setAttribute('disabled', 'true');

const handlePrevBTN = async (): Promise<void> => {
  APP_STATE.currentPage -= 1;
  nextButton.removeAttribute('disabled');
  if (APP_STATE.currentPage === 1) {
    prevButton.setAttribute('disabled', 'true');
  }
  const { carsData } = await getCarsOnPage({
    page: APP_STATE.currentPage,
    limit: CARS_PER_PAGE,
  });
  currentPage(APP_STATE.currentPage);
  drawCarsOnPage(carsData);
};

const handleNextBTN = async (): Promise<void> => {
  APP_STATE.currentPage += 1;
  prevButton.removeAttribute('disabled');
  const { carsData, carsQuantity } = await getCarsOnPage({
    page: APP_STATE.currentPage,
    limit: CARS_PER_PAGE,
  });
  if (APP_STATE.currentPage === Math.ceil(Number(carsQuantity) / CARS_PER_PAGE)) {
    nextButton.setAttribute('disabled', 'true');
  }
  currentPage(APP_STATE.currentPage);
  drawCarsOnPage(carsData);
};

prevButton.addEventListener('click', handlePrevBTN);

nextButton.addEventListener('click', handleNextBTN);
