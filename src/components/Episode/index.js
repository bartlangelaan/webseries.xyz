
import React, { Component } from 'react';
import store from '../../models/store';
import {observer} from 'mobx-react';
import { withRouter } from 'react-router';
import Breadcrumbs from '../Breadcrumbs';
import YouTube from 'react-youtube';
import styles from './styles.css';

@withRouter
@observer
export default class Episode extends Component {

  refresh({routeParams: {show, season}}) {
    store.refresh({show, season});
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

    const show = store.getShow(this.props.routeParams.show);

    let season;
    if(show){
      season = show.getSeason(this.props.routeParams.season);
    }

    let episode, nextEpisode;
    if(season){
      episode = season.getEpisode(this.props.routeParams.episode);
      nextEpisode = season.episodes[season.episodes.indexOf(episode) + 1]
    }

    return {show, season, episode, nextEpisode};
  }

  render() {

    const info = this.findInfo();

    return (
      <section>
        <Breadcrumbs show={info.show} season={info.season} episode={info.episode} />
        {info.episode ? <YouTube
            videoId={info.episode.youtube}
            opts={{
              playerVars: {
                autoplay: 1
              }
            }}
            onEnd={this.onVideoEnd.bind(this)}
            className={styles.youtube}
          /> : <span>Loading...</span>}
      </section>
    )
  }
}
