
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import Breadcrumbs from '../Breadcrumbs';
import ThumbnailOverview from '../ThumbnailOverview';
import Thumbnail from '../Thumbnail';

@observer
export default class Series extends Component {

  componentDidMount() {
    store.refresh();
  }

  render() {
    return (
      <section>
        <Breadcrumbs />
        <ThumbnailOverview>
          {store.shows.map(show =>
            <Thumbnail
              link={`/${show.slug}`}
              youtube={show.firstYoutube}
              caption={show.title}
              key={show.slug}
            />
          )}
        </ThumbnailOverview>
      </section>
    )
  }
}
