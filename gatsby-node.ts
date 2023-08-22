import { reporter } from "gatsby-cli/lib/reporter/reporter";
import { downloadAlbumData } from "./scripts/bandcamp";
import { downloadGumroadData } from "./scripts/gumroad";

exports.onPreBootstrap = async () => {
  await downloadAlbumData("https://ternar.bandcamp.com");
  reporter.success("Downloading Bandcamp data");

  const token = process.env.GUMROAD_TOKEN;

  if (token) {
    await downloadGumroadData(token);
    reporter.success("Downloading Gumroad data");
  } else {
    reporter.error("Error downloading Gumroad data: token not found");
  }
};
