
import React, { PropTypes } from 'react';

function App({ children }) {
  return (
    <div>
      MENU
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
