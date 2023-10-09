import React from 'react';

import { Row, type RowProps } from './row';

export interface HeaderProps<ColumnName extends string> {
  columns: { field: ColumnName; label: string }[];
}

export function Header<ColumnName extends string>({
  columns: rawColumns,
}: HeaderProps<ColumnName>): React.ReactElement {
  const data = rawColumns.reduce<Pick<RowProps<string>, 'columns' | 'data'>>(
    (acc, cell) => {
      acc.columns.push(cell.field);
      acc.data[cell.field] = cell.label;
      return acc;
    },
    { columns: [], data: {} },
  );

  return (
    <thead>
      <Row type='th' {...data} />
    </thead>
  );
}
