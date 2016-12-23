
import React, { Component } from 'react';
import store from '../../store';
import {observer} from 'mobx-react';
import { Link } from 'react-router';
import Breadcrumbs from '../Breadcrumbs';

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

        {show ? show.seasons.map(season =>
          <Link to={`/${show.slug}/${season.season}`}>
            <img src={`https://img.youtube.com/vi/${season.firstYoutube}/hqdefault.jpg`} />
            {season.season}
          </Link>
        ) : <span>Loading...</span>}
      </section>
    )
  }
}
