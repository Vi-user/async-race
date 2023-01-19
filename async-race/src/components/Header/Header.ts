import { ICreateButton, createButton } from '../../helper';
import { PAGES } from '../../types/types';
import './Header.scss';

const garageBtn: ICreateButton = {
  tag: 'button',
  name: `to ${PAGES.GARAGE}`,
  classes: ['button', 'header-buttons'],
};

const winnersBtn: ICreateButton = {
  tag: 'button',
  name: `to ${PAGES.WINNERS}`,
  classes: ['button', 'header-buttons'],
};

export const garageButton = createButton(garageBtn);
export const winnersButton = createButton(winnersBtn);
