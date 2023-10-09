import React from 'react';
import { Header, type HeaderProps } from './header';
import { Body, type BodyProps } from './body';

import './table.css';

export interface TableProps<ColumnName extends string>
  extends Pick<BodyProps<ColumnName>, 'rows'>,
    Pick<HeaderProps<ColumnName>, 'columns'> {}

export function Table<Column extends string>({
  columns,
  rows,
}: TableProps<Column>): React.ReactElement {
  return (
    <table className='dashboard-tile-table'>
      <Header columns={columns} />
      <Body columns={columns.map(({ field }) => field)} rows={rows} />
    </table>
  );
}
