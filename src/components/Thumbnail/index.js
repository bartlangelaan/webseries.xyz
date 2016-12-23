import React from 'react';
import { Link } from 'react-router';

export default function({link, youtube, caption}) {
  return <Link to={link}>
    <img src={`https://img.youtube.com/vi/${youtube}/hqdefault.jpg`} />
    {caption}
  </Link>
}
