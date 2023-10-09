import React from 'react';
import { Table } from '../table';

export function TableTile(): React.ReactElement {
  return (
    <div id='dashboard-table' className='dashboard-tile'>
      <div className='dashboard-tile-header'>Table tile</div>
      <div>
        <Table
          columns={[
            { field: 'name', label: 'Name' },
            { field: 'occupation', label: 'Occupation' },
            { field: 'age', label: 'Age' },
          ]}
          rows={[
            { age: '1', name: 'asdf', occupation: 'test' },
            { age: '1', name: 'asdf', occupation: 'test' },
            { age: '1', name: 'asdf', occupation: 'test' },
            { age: '1', name: 'asdf', occupation: 'test' },
          ]}
        />
      </div>
    </div>
  );
}
