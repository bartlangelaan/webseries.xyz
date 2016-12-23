import {observable} from 'mobx';

class Store {
  @observable shows = [];
  @observable seasons = [];
  @observable episodes = [];

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

  refreshEpisodes({show, season}) {
    fetch(`http://localhost:3000/shows/${show}/seasons/${season}/episodes`).then(res => res.json()).then(json => {
      this.episodes = this.episodes.filter(episode => episode.show != show || episode.season != season )
      this.episodes.push(...json);
    });
  }

}

export default new Store();
