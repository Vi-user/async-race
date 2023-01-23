import { createNode, renderCar } from '../../helper';
import { MergedData } from '../../types/types';
import './Winners_table.scss';

const renderRow = (data: MergedData, i: number): string => `
      <div class="table-item">${i + 1}</div>
      <div class="table-item">${renderCar(data.color)}</div>
      <div class="table-item">${data.name}</div>
      <div class="table-item">${data.wins}</div>
      <div class="table-item">${data.time}</div>
  `;

function drawWinnersTable(mergedArr: MergedData[]): HTMLElement {
  const table = createNode({ tag: 'div', classes: ['result-container'] });
  const tableHeader = createNode({ tag: 'div', classes: ['table-row', 'table-header'] });
  const tableColumns = ['№', 'Car image', 'Car name', 'Wins number', 'Best time in seconds'];
  tableColumns.forEach((el) => {
    const headerItem = createNode({ tag: 'div', classes: ['table-item'] });
    headerItem.textContent = el;
    tableHeader.append(headerItem);
  });
  table.append(tableHeader);

  for (let i = 0; i < mergedArr.length; i += 1) {
    const tableRow = createNode({ tag: 'div', classes: ['table-row', 'table-body'] });
    tableRow.innerHTML += renderRow(mergedArr[i], i);
    table.append(tableRow);
  }
  return table;
}

export default drawWinnersTable;
