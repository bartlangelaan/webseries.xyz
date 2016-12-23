import {observable} from 'mobx';

const BASE_URL = 'https://shielded-shore-55917.herokuapp.com'
// const BASE_URL = 'http://localhost:3000'

class Store {
  @observable shows = [];
  @observable seasons = [];
  @observable episodes = [];

  refreshShows() {
    fetch(`${BASE_URL}/shows`).then(res => res.json()).then(json => {
      this.shows = json;
    });
  }

  refreshSeasons({show}) {
    fetch(`${BASE_URL}/shows/${show}/seasons`).then(res => res.json()).then(json => {
      this.seasons = this.seasons.filter(season => season.show != show)
      this.seasons.push(...json);
    });
  }

  refreshEpisodes({show, season}) {
    fetch(`${BASE_URL}/shows/${show}/seasons/${season}/episodes`).then(res => res.json()).then(json => {
      this.episodes = this.episodes.filter(episode => episode.show != show || episode.season != season )
      this.episodes.push(...json);
    });
  }

}

export default new Store();
