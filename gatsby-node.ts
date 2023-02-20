import { reporter } from "gatsby-cli/lib/reporter/reporter";
import { downloadAlbumData } from "./scripts/bandcamp";
import { downloadGumroadData } from "./scripts/gumroad";

exports.onPreBootstrap = async () => {
  await downloadAlbumData("https://ternar.bandcamp.com");
  reporter.success("Downloading Bandcamp data");

  await downloadGumroadData("M785lI8ryP08fle1fg0jB6xoz7zKks71Vdm8S5hIt7E");
  reporter.success("Downloading Gumroad data");
};
