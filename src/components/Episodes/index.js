
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';

@observer
export default class Episodes extends Component {

  refresh({routeParams: {show, season}}) {
    store.refreshShows();
    store.refreshSeasons({show});
    store.refreshEpisodes({show, season});
  }

  componentDidMount() {
    this.refresh(this.props);
  }

  componentWillReceiveProps(props) {
    this.refresh(props);
  }

  render() {

    const show = store.shows
        .find(show => show.slug == this.props.routeParams.show)
      || {slug: this.props.routeParams.show};

    const season = store.seasons
        .find(season => season.season == this.props.routeParams.season)
      || {show: this.props.routeParams.show, season: this.props.routeParams.season};

    return (
      <section>
        <div>
          <Link to="/">Alle series</Link> > <Link to={`/${show.slug}`}>{show.title}</Link> > <Link to={`/${show.slug}/${season.season}`}>{season.season}</Link>
        </div>
        {store.episodes
          .filter(episode => episode.show == show.slug && episode.season == season.season)
          .map(episode =>
            <Link to={`/${show.slug}/${season.season}/${episode.episode}`}>
              <img src={`https://img.youtube.com/vi/${episode.youtube}/hqdefault.jpg`} />
              {episode.episode}
            </Link>
          )
        }
      </section>
    )
  }
}
