export default class Track {
  constructor(data) {
    this.artist = data.artists[0].name;
    this.name = data.items[0].name;
    this.image = data.images[0].url;
    this.url = data.items[0].external_urls;
  }
}
