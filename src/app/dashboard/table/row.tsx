import React from 'react';

export interface RowProps<ColumnName extends string> {
  data: Record<ColumnName, string>;
  type?: 'th' | 'td';
  columns: ColumnName[];
}

export function Row<ColumnName extends string>({
  data,
  columns,
  type = 'td',
}: RowProps<ColumnName>): React.ReactElement {
  const CellElement = type === 'td' ? `td` : `th`;

  return (
    <tr>
      {columns.map((cell) => (
        <CellElement key={cell}>{data[cell]}</CellElement>
      ))}
    </tr>
  );
}
