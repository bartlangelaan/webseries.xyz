
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import Breadcrumbs from '../Breadcrumbs';
import ThumbnailOverview from '../ThumbnailOverview';
import Thumbnail from '../Thumbnail';

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
        <ThumbnailOverview>
          {season ? season.episodes.map(episode =>
            <Thumbnail
              link={`/${show.slug}/${season.season}/${episode.episode}`}
              youtube={episode.youtube}
              caption={`Aflevering ${episode.episode}`}
              key={episode.episode}
            />
          ) : <span>Loading...</span>}
        </ThumbnailOverview>
      </section>
    )
  }
}
