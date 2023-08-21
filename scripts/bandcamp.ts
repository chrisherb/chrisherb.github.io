const bandcamp = require("bandcamp-scraper");
import util from "util";
import { writeFile, existsSync, mkdirSync } from "fs";
import { downloadImage } from "./image-downloader";

export async function downloadAlbumData(artistUrl: string) {
  const getAlbumUrls = util.promisify(bandcamp.getAlbumUrls);
  const getAlbumInfo = util.promisify(bandcamp.getAlbumInfo);

  const albumUrls = await getAlbumUrls(artistUrl);
  const promises = albumUrls.map((album: any) => getAlbumInfo(album));
  const albums = await Promise.all(promises);

  writeFile("src/data/albums.json", JSON.stringify(albums), (error) => {
    if (error) throw error;
  });

  const dir = "src/images/dynamic/bandcamp/";

  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  albums.forEach((album) => {
    const imageUrl = album.imageUrl;
    const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
    downloadImage(imageUrl, dir + fileName).catch((error) => {
      console.log(error);
    });
  });
}
