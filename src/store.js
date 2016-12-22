import {observable} from 'mobx';

class Store {
  @observable shows = [];

  refreshShows() {
    fetch('http://localhost:3000/shows').then(res => res.json()).then(json => {
      this.shows = json;
    })
  }

}

export default new Store();
