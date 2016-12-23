import store from './store';
import {computed} from 'mobx';

export default class Season {
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
