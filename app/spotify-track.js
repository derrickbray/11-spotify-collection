
export default class SpotifyTrack {
  constructor(data) {
    this.data = data;


    this.el = document.createElement('div');
    this.el.classList.add('track');
    this.el.innerHTML = `
      <p class="track__artist"></p>
      <p class="track__name"></p>
      <p class="track__image"></p>
      <p class="track__url"></p>`;
  }

  render() {
    this.el.querySelector('.track__artist').innerText = this.data.artist;
    this.el.querySelector('.track__name').innerText = this.data.name;
    this.el.querySelector('.track__image').innerText = this.data.image;
    this.el.querySelector('.track__url').innerText = this.data.url;
  }
}
