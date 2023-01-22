import { createNode } from '../../helper';
import APP_STATE from '../../state';
import { getWinnersOnPage } from '../../api';
import './Winners.scss';
import drawWinnersTable from '../../components/Winners_table/Winners_table';

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

const { winnersData } = await getWinnersOnPage({ page: 1, limit: 10 });

export const winnersContainer = createNode({
  tag: 'div',
  classes: ['winners-container'],
}) as HTMLDivElement;
winnersContainer.append(drawWinnersTable(winnersData));
