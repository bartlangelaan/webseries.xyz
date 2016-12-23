
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { withRouter } from 'react-router';
import Breadcrumbs from '../Breadcrumbs';
import YouTube from 'react-youtube';

@withRouter
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

  onVideoEnd(event) {
    const info = this.findInfo();

    if(info.nextEpisode){
      this.props.router.push(`/${info.show.slug}/${info.season.season}/${info.nextEpisode.episode}`)
    }
  }

  findInfo() {

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

    const episodesInThisShow = store.episodes.filter(episode => episode.show == show.slug);

    const nextEpisode = episodesInThisShow[episodesInThisShow.indexOf(episode) + 1];

    return {show, season, episode, nextEpisode};
  }

  render() {

    const info = this.findInfo();

    return (
      <section>
        <Breadcrumbs show={info.show} season={info.season} episode={info.episode} />
        <YouTube
          videoId={info.episode.youtube}
          opts={{
            playerVars: {
              autoplay: 1
            }
          }}
          onEnd={this.onVideoEnd.bind(this)}
        />
      </section>
    )
  }
}
