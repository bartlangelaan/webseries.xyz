
import React, { Component } from 'react';
import shows from '../../stores/shows';

@observer
export default class Series extends Component {

  componentDidMount() {
    shows.refresh();
  }

  render() {
    return (
      <section>
        HOME
      </section>
    )
  }
}
