import { createNode } from '../../helper';
import APP_STATE from '../../state';
import { getCar, getWinnersOnPage } from '../../api';
import './Winners.scss';
import drawWinnersTable from '../../components/Winners_table/Winners_table';
import { Winner } from '../../types/types';

export const winnersTitle = createNode({
  tag: 'h2',
  classes: ['winners-title'],
}) as HTMLHeadElement;
winnersTitle.innerText = `Winners (${APP_STATE.totalWinners})`;

export const winnersPageNumber = createNode({
  tag: 'h2',
  classes: ['garage-page-number'],
}) as HTMLHeadElement;
winnersPageNumber.innerText = `Page #${APP_STATE.winnersPage}`;

export const winnersContainer = createNode({
  tag: 'div',
  classes: ['winners-container'],
}) as HTMLDivElement;

export async function updateWinnersContent(): Promise<void> {
  winnersContainer.innerText = '';
  const { winnersData } = await getWinnersOnPage({ page: 1, limit: 10 });
  const carsID = winnersData.map((el: Winner) => el.id);
  const winnersCars = await Promise.all(carsID.map(async (id: number) => getCar(id)));

  const mergedArr = winnersData.map((el, index) => ({ ...el, ...winnersCars[index] }));
  winnersContainer.append(drawWinnersTable(mergedArr));
}
