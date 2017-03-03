export default class Track {
  constructor(track) {
    this.artist = track.artists[0].name;
    this.name = track.name;
    this.image = track.album.images[0].url;
    this.url = track.external_urls.spotify;

    console.log(this);
  }
}
