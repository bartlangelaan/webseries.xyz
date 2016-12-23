import React from 'react';
import { Link } from 'react-router';
import styles from './styles.css';

export default function({link, youtube, caption}) {
  return <Link to={link} className={styles.thumbnail}>
    <img src={`https://img.youtube.com/vi/${youtube}/hqdefault.jpg`} />
    {caption}
  </Link>
}
