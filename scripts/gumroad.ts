import { writeFile } from "fs";
import { downloadImage } from "./image-downloader";

export const downloadGumroadData = async (accessToken: string) => {
  const response = await fetch("https://api.gumroad.com/v2/products", {
    method: "GET",
    headers: [["Authorization", "Bearer " + accessToken]],
  });
  const productsJson = await response.json();
  writeFile(
    "src/data/products.json",
    JSON.stringify(productsJson.products),
    (error) => {
      if (error) throw error;
    }
  );

  const promises = productsJson.products.map((product: any) => {
    const imageUrl = product.preview_url;
    const fileName = product.custom_permalink;
    return downloadImage(imageUrl, "src/images/dynamic/" + fileName + ".png");
  });

  await Promise.all(promises);
};
