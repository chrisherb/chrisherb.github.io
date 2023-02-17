const { writeFile } = require("fs");
const { downloadImage } = require("./image-downloader");

const action = async () => {
  const response = await fetch("https://api.gumroad.com/v2/products", {
    method: "GET",
    headers: [
      ["Authorization", "Bearer M785lI8ryP08fle1fg0jB6xoz7zKks71Vdm8S5hIt7E"],
    ],
  });
  const productsJson = await response.json();
  writeFile(
    "src/data/products.json",
    JSON.stringify(productsJson.products),
    (error) => {
      if (error) throw error;
    }
  );

  const promises = productsJson.products.map((product) => {
    const imageUrl = product.preview_url;
    const fileName = product.custom_permalink;
    console.log(fileName);
    return downloadImage(imageUrl, "src/images/" + fileName + ".png");
  });

  await Promise.all(promises);

  // productsJson.products.forEach(async (product) => {
  //   console.log(product.name);
  //   const imageUrl = product.preview_url;
  //   const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1);
  //   await downloadImage(imageUrl, "src/images/" + fileName + ".png");
  // });
};

action();
