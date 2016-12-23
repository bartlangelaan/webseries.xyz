import React from 'react';
import styles from './styles.css';

export default function({children}) {
  return <div className={styles.wrapper}>{children}</div>
}
