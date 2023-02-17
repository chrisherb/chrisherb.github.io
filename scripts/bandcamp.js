const bandcamp = require("bandcamp-scraper");
const util = require("util");
const { writeFile } = require("fs");
const { downloadImage } = require("./image-downloader");

const action = async () => {
  const artistUrl = "https://ternar.bandcamp.com";
  var albums = [];

  var getAlbumUrls = util.promisify(bandcamp.getAlbumUrls);
  var getAlbumInfo = util.promisify(bandcamp.getAlbumInfo);

  const albumUrls = await getAlbumUrls(artistUrl);
  const promises = albumUrls.map((album) => getAlbumInfo(album));
  albums = await Promise.all(promises);

  writeFile("src/data/albums.json", JSON.stringify(albums), (error) => {
    if (error) throw error;
  });

  albums.forEach((album) => {
    const imageUrl = album.imageUrl;
    const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
    downloadImage(imageUrl, "src/images/" + fileName).catch((error) => {
      console.log(error);
    });
  });
};

action();
