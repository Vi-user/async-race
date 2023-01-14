import { CreateNodeType, createNode } from '../../helper';
import { PAGES } from '../../types/types';
import './Header.scss';

const garageBtn: CreateNodeType = {
  tag: 'button',
  name: `to ${PAGES.GARAGE}`,
  classes: ['button', 'header-buttons'],
};

const winnersBtn: CreateNodeType = {
  tag: 'button',
  name: `to ${PAGES.WINNERS}`,
  classes: ['button', 'header-buttons'],
};

export const garageButton = createNode(garageBtn);
export const winnersButton = createNode(winnersBtn);
