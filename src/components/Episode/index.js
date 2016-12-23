
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';

@observer
export default class Episode extends Component {

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
        .find(season => season.show == this.props.routeParams.show && season.season == this.props.routeParams.season)
      || {show: this.props.routeParams.show, season: this.props.routeParams.season};

    const episode = store.episodes
        .find(episode =>
          episode.show == this.props.routeParams.show &&
          episode.season == this.props.routeParams.season &&
          episode.episode == this.props.routeParams.episode
        )
      || {
      show: this.props.routeParams.show,
        season: this.props.routeParams.season,
        episode: this.props.routeParams.episode
    };

    return (
      <section>
        <div>
          <Link to="/">Alle series</Link> > <Link to={`/${show.slug}`}>{show.title}</Link> > <Link to={`/${show.slug}/${season.season}`}>{season.season}</Link>
        </div>
        {JSON.stringify(episode)}
      </section>
    )
  }
}
