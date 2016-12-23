
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';

@observer
export default class Seasons extends Component {

  refresh({routeParams: {show}}) {
    store.refreshShows();
    store.refreshSeasons({show})
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

    return (
      <section>
        <div>
          <Link to="/">Alle series</Link> > <Link to={`/${show.slug}`}>{show.title}</Link>
        </div>
        {store.seasons.filter(season => season.show == show.slug).map(season =>
          <Link to={`/${show.slug}/${season.season}`}>
            <img src={`https://img.youtube.com/vi/${season.firstYoutube}/hqdefault.jpg`} />
            {season.season}
          </Link>
        )}
      </section>
    )
  }
}
