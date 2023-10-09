import React from 'react';

import './app.css';
import { Navigation } from './navigation';
import { Dashboard } from './dashboard';
import { Navbar } from './navbar';

// export const App = React.memo(function App(): React.ReactElement {
export function App(): React.ReactElement {
  return (
    <div id='container'>
      <Navigation />

      <div id='content'>
        <Navbar />

        <Dashboard />
      </div>
    </div>
  );
}
// });
