export default class SpotifyTrack {
  constructor(data) {
    this.data = data;

    this.el = document.createElement('div');
    this.el.classList.add('track');
    this.el.classList.add('panel-block');
    this.el.innerHTML = `
    <div class="media">
      <div class="media-left">
        <div class="track__frame">
          <img class="track__image" src="" alt="">
        </div>
      </div>
      <div class="media-content">
        <h2 class="track__artist"></h2>
        <h4 class="track__name"></h4>
      </div>
      <div class="media-right">
        <div class="track__url">
          <a class="track__link">
            <span class="fa fa-spotify fa-3x"></span>
          </a>
        </div>
      </div>
    </div>`;

    this.render();
  }
    // console.log(results);

  render() {
    this.el.querySelector('.track__artist').innerText = this.data.artist;
    this.el.querySelector('.track__name').innerText = this.data.name;
    this.el.querySelector('.track__image').src = this.data.image;
    this.el.querySelector('.track__link').href = this.data.url;
  }
}
