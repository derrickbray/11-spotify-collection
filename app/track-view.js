export default class SpotifyTrack {
  constructor(data) {
    this.data = data;

    this.el = document.createElement('div');
    this.el.classList.add('track');
    this.el.innerHTML = `
      <p class="track__artist"></p>
      <p class="track__name"></p>
      <a class="track__url"></a>
      <img class="track__image"/>`;
  }

  render() {
    this.el.querySelector('.track__artist').innerText = this.data.artist;
    this.el.querySelector('.track__name').innerText = this.data.name;
    this.el.querySelector('.track__image').src = this.data.image;
    this.el.querySelector('.track__url').innerText = this.data.url;
  }
}
