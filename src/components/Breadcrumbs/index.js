import React from 'react';
import {Link} from 'react-router';

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
      display: season.season
    });
  }

  if(episode) {
    links.push({
      to: `/${show.slug}/${season.season}/${episode.episode}`,
      display: episode.episode
    });
  }

  return (<div>
    {links.map(({to, display}, i) =>
      <span key={i}>
        <Link to={to}>{display}</Link>{i < links.length - 1 ? ` > ` : ''}
      </span>
    )}
  </div>)
}