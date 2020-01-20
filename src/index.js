import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './pages/welcome';

process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

ReactDOM.render(
  <div>
    <Welcome />
  </div>,
  document.getElementById('app')
);

module.hot.accept();