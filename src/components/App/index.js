
import React, { PropTypes } from 'react';
import DevTools from 'mobx-react-devtools';

function App({ children }) {
  return (
    <div>
      <DevTools />
      MENU
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
