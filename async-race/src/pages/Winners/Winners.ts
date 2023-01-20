import { createNode } from '../../helper';
import APP_STATE from '../../state';
import './Winners.scss';

export const winnersTitle = createNode({
  tag: 'h2',
  classes: ['winners-title'],
}) as HTMLFormElement;
winnersTitle.innerText = `Winners (${APP_STATE.totalWinners})`;

export const winnersPageNumber = createNode({
  tag: 'p',
  classes: ['garage-page-number'],
}) as HTMLFormElement;
winnersPageNumber.innerText = `Page #${APP_STATE.winnersPage}`;
