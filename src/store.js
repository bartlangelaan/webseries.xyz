import {observable} from 'mobx';

class Store {
  @observable shows = [];
  @observable seasons = [];

  refreshShows() {
    fetch('http://localhost:3000/shows').then(res => res.json()).then(json => {
      this.shows = json;
    });
  }

  refreshSeasons({show}) {
    fetch(`http://localhost:3000/shows/${show}/seasons`).then(res => res.json()).then(json => {
      this.seasons = this.seasons.filter(season => season.show != show)
      this.seasons.push(...json);
    });
  }

}

export default new Store();
