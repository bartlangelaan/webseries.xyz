
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import Breadcrumbs from '../Breadcrumbs';

@observer
export default class Series extends Component {

  componentDidMount() {
    store.refresh();
  }

  render() {
    return (
      <section>
        <Breadcrumbs />
        {store.shows.map(show =>
          <Link to={`/${show.slug}`}>
            <img src={`https://img.youtube.com/vi/${show.firstYoutube}/hqdefault.jpg`} />
            {show.title}
          </Link>
        )}
      </section>
    )
  }
}
