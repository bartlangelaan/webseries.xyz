
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import Breadcrumbs from '../Breadcrumbs';
import ThumbnailOverview from '../ThumbnailOverview';
import Thumbnail from '../Thumbnail';

@observer
export default class Seasons extends Component {

  refresh({routeParams: {show}}) {
    store.refresh({show});
  }

  componentDidMount() {
    this.refresh(this.props);
  }

  componentWillReceiveProps(props) {
    this.refresh(props);
  }

  render() {

    const show = store.getShow(this.props.routeParams.show);

    return (
      <section>
        <Breadcrumbs show={show} />
        <ThumbnailOverview>
          {show ? show.seasons.map(season =>
            <Thumbnail
              link={`/${show.slug}/${season.season}`}
              youtube={season.firstYoutube}
              caption={`Seizoen ${season.season}`}
            />
            ) : <span>Loading...</span>}
        </ThumbnailOverview>

      </section>
    )
  }
}
