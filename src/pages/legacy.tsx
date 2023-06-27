import { graphql, HeadFC, useStaticQuery } from "gatsby";
import React from "react";
import { TrnrProductList } from "../components/TrnrProductList";

export default function Component() {
  const data: any = useStaticQuery(graphql`
    query TrnrDevices {
      allProductsJson {
        nodes {
          id
          name
          description
          tags
          price
          custom_permalink
          short_url
          productsPath: gatsbyPath(
            filePath: "/audio-software/{ProductsJson.custom_permalink}"
          )
        }
      }
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              quality: 100
              height: 300
              width: 550
              placeholder: BLURRED
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    }
  `);
  const filteredData = data.allProductsJson.nodes.filter((product: any) => {
    const filteredProducts = product.tags.filter((tag: any) => tag == "legacy");
    return filteredProducts.length > 0;
  });

  return (
    <TrnrProductList
      title={"Legacy"}
      products={filteredData}
      images={data.allFile.nodes}
    />
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Legacy</title>
);
