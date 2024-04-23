import React from 'react';
import ReactDOM from 'react-dom/client';

// Components
import Routing from './routing/routing';

// Styles
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Routing />
  </React.StrictMode>,
);