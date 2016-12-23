
import React, { PropTypes } from 'react';
import DevTools from 'mobx-react-devtools';
import styles from './style.css';

function App({ children }) {
  return (
    <div>
      <div className={styles.header}>
        webseries.xyz
      </div>
      {children}
    </div>
  );
}

App.propTypes = {
  children: PropTypes.node,
};

export default App;
