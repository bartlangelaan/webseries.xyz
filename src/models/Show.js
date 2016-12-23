import store from './store';
import {computed} from 'mobx';

export default class Show {
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
