import 'whatwg-fetch';
import './data.json';
import './track-model';
import './track-view';

const el = document.createElement('div');
SpotifyTrack.forEach((item) => {
  const t = new Track(item);

  const view = new TrackView(t);
  view.render();
  document.body.appendChild(view.el);

}
