import 'whatwg-fetch';

import data from './data.json';
import Model from './track-model';
import TrackView from './track-view';

const results = document.querySelector('.results');

console.log(data);

data.tracks.items.forEach((item) => {
  const t = new Model(item);

  const view = new TrackView(t);
  view.render();

  results.appendChild(view.el);
});
