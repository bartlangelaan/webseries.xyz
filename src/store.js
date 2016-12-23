import {observable, computed} from 'mobx';

const BASE_URL = 'https://shielded-shore-55917.herokuapp.com'
// const BASE_URL = 'http://localhost:3000'

class Show {
  constructor({slug, title, firstYoutube}) {
    this.slug = slug;
    this.title = title;
    this.firstYoutube = firstYoutube;
  }

  @computed
  get seasons() {
    return store.seasons.filter(season => season.show == this.slug);
  }

  getSeason(seasonSearch) {
    return this.seasons.find(season => season.season == seasonSearch);
  }
}

class Season {
  constructor({show, season, firstYoutube}) {
    this.show = show;
    this.season = season;
    this.firstYoutube = firstYoutube;
  }

  @computed
  get episodes() {
    return store.episodes.filter(season => season.show == this.show && season.season == this.season);
  }

  getEpisode(episodeSearch) {
    return this.episodes.find(episode => episode.episode == episodeSearch);
  }
}

class Episode {
  constructor({show, season, episode, youtube}) {
    this.show = show;
    this.season = season;
    this.episode = episode;
    this.youtube = youtube;
  }
}

class Store {
  @observable shows = [];
  @observable seasons = [];
  @observable episodes = [];

  getShow(slug) {
    return this.shows.find(show => show.slug == slug);
  }

  refresh({show, season} = {}) {
    /**
     * Refresh shows
     */
    fetch(`${BASE_URL}/shows`).then(res => res.json()).then(json => {
      this.shows = json.map(show => new Show(show));
    });

    /**
     * Refresh seasons
     */
    if(show) {
      fetch(`${BASE_URL}/shows/${show}/seasons`).then(res => res.json()).then(json => {
        this.seasons = this.seasons.filter(season => season.show != show)
        this.seasons.push(...json.map(season => new Season(season)));
      });
    }

    /**
     * Refresh episodes
     */
    if(season) {
      fetch(`${BASE_URL}/shows/${show}/seasons/${season}/episodes`).then(res => res.json()).then(json => {
        this.episodes = this.episodes.filter(episode => episode.show != show || episode.season != season)
        this.episodes.push(...json.map(episode => new Episode(episode)));
      });
    }
  }


}

const store = new Store()
export default store;
