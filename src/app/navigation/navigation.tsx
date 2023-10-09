import React from 'react';

import './navigation.css';
import { ItemList } from './item-list';

export function Navigation(): React.ReactElement {
  return (
    <div id='navigation'>
      <div id='navigation-label'>Hacks & Tricks</div>
      <hr id='navigation-divider' />

      <ItemList />
    </div>
  );
}
