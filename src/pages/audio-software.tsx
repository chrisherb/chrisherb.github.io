import { graphql, HeadFC, PageProps, useStaticQuery } from "gatsby";
import React from "react";
import { TrnrProductList } from "../components/TrnrProductList";

export default function Component(props: PageProps) {
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

  const params = new URLSearchParams(props.location.search);
  const type = params.get("type");
  const platform = params.get("platform");

  return (
    <TrnrProductList
      title={"Audio Software"}
      type={type ? type : "All"}
      platform={platform ? platform : "All"}
      products={data.allProductsJson.nodes}
      images={data.allFile.nodes}
    />
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Audio Software</title>
);
