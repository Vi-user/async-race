import { garageButton, winnersButton } from './components/Header/Header';
import createForm from './components/Garage_control_pannel/Garage_control_pannel_Create';
import garageContainer from './components/Garage_page/Garage_page';
import updateForm from './components/Garage_control_pannel/Garage_control_pannel_Update';
import { nextButton, prevButton } from './components/Garage_paginate/Garage_paginate';
import { createNode } from './helper';
import {
  updateWinnersContent,
  winnersContainer,
  winnersPageNumber,
  winnersTitle,
} from './pages/Winners/Winners';
import './index.scss';
import { generateCarsButton } from './components/Generate-cars-button/Generate-cars-button';
import { raceButton, resetRaceButton } from './components/Race/Race';

const header = createNode({
  tag: 'header',
  classes: ['header'],
}) as HTMLHeadElement;
header.append(garageButton, winnersButton);

const garage = createNode({
  tag: 'div',
  classes: ['garage-content'],
}) as HTMLElement;
garageButton.setAttribute('disabled', 'true');
garage.append(
  createForm,
  updateForm,
  raceButton,
  resetRaceButton,
  generateCarsButton,
  garageContainer,
  prevButton,
  nextButton,
);

const winners = createNode({
  tag: 'div',
  classes: ['winners-content', 'hidden-block'],
}) as HTMLElement;
winners.append(winnersTitle, winnersPageNumber, winnersContainer);

function togglePages(): void {
  garageButton.toggleAttribute('disabled');
  winnersButton.toggleAttribute('disabled');
  garage.classList.toggle('hidden-block');
  winners.classList.toggle('hidden-block');
}

garageButton.addEventListener('click', togglePages);
winnersButton.addEventListener('click', async () => {
  togglePages();
  await updateWinnersContent();
});

document?.querySelector('body')?.append(header, garage, winners);
