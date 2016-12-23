import React from 'react';
import {Link} from 'react-router';
import styles from './styles.css';


export default function ({show, season, episode}){

  var links = [{to: '/', display: 'Alle series'}];

  if(show) {
    links.push({
      to: `/${show.slug}`,
      display: show.title
    });
  }

  if(season) {
    links.push({
      to: `/${show.slug}/${season.season}`,
      display: `Seizoen ${season.season}`
    });
  }

  if(episode) {
    links.push({
      to: `/${show.slug}/${season.season}/${episode.episode}`,
      display: `Aflevering ${episode.episode}`
    });
  }

  return (<div className={styles.breadcrumbs}>
    {links.map(({to, display}, i) =>
      <span key={i}>
        <Link to={to}>{display}</Link>{i < links.length - 1 ? ` > ` : ''}
      </span>
    )}
  </div>)
}
