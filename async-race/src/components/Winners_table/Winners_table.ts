import { createNode } from '../../helper';
import { Winner } from '../../types/types';
import './Winners_table.scss';

function drawWinnersTable(winnersData: Winner[]): HTMLElement {
  const table = createNode({ tag: 'div', classes: ['result-container'] });
  const tableHeader = createNode({ tag: 'div', classes: ['table-row', 'table-header'] });
  const keys = Object.keys(winnersData[0]);
  keys.forEach((el) => {
    const headerItem = createNode({ tag: 'div', classes: ['table-item'] });
    headerItem.textContent = el;
    tableHeader.append(headerItem);
  });
  table.append(tableHeader);

  for (let i = 0; i < winnersData.length; i += 1) {
    const tableRow = createNode({ tag: 'div', classes: ['table-row', 'table-body'] });
    const values = Object.values(winnersData[i]);
    for (let v = 0; v < values.length; v += 1) {
      // for (const [key, value] of Object.entries(winnersData[i])) {
      const tableItem = createNode({ tag: 'div', classes: ['table-item'] });
      tableItem.textContent = values[v];
      tableRow.append(tableItem);
    }
    table.append(tableRow);
  }
  return table;
}

export default drawWinnersTable;
