
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import Breadcrumbs from '../Breadcrumbs';

@observer
export default class Episodes extends Component {

  refresh({routeParams: {show, season}}) {
    store.refresh({show, season});
  }

  componentDidMount() {
    this.refresh(this.props);
  }

  componentWillReceiveProps(props) {
    this.refresh(props);
  }

  render() {

    const show = store.getShow(this.props.routeParams.show);

    let season;
    if(show){
      season = show.getSeason(this.props.routeParams.season);
    }

    return (
      <section>
        <Breadcrumbs show={show} season={season} />
        {season ? season.episodes.map(episode =>
            <Link to={`/${show.slug}/${season.season}/${episode.episode}`}>
              <img src={`https://img.youtube.com/vi/${episode.youtube}/hqdefault.jpg`} />
              {episode.episode}
            </Link>
          )
        : <span>Loading...</span>}
      </section>
    )
  }
}
