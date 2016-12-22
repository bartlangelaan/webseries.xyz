import {observable} from 'mobx-react';

class Show {
  @observable title = "";
}

class Shows {
  @observable shows = [];

  refresh() {

  }

}

export default new Shows();
