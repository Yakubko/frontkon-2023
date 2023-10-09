import React from 'react';

import { Row, type RowProps } from './row';

export interface BodyProps<ColumnName extends string>
  extends Pick<RowProps<ColumnName>, 'columns'> {
  rows: RowProps<ColumnName>['data'][];
}

export function Body<ColumnName extends string>({
  columns,
  rows,
}: BodyProps<ColumnName>): React.ReactElement {
  return (
    <tbody>
      {rows.map((data, index) => (
        <Row key={index} columns={columns} data={data} />
      ))}
    </tbody>
  );
}
