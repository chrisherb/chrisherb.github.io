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
          variants {
            title
            options {
              name
              price_difference
            }
          }
          productsPath: gatsbyPath(
            filePath: "/audio-software/{ProductsJson.custom_permalink}"
          )
        }
      }
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        nodes {
          name
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
  const images = data.allFile.nodes.toSorted((a: any, b: any) =>
    a.name > b.name ? 1 : -1
  );

  return (
    <TrnrProductList
      title={"Audio Software"}
      type={type ? type : "All"}
      platform={platform ? platform : "All"}
      products={data.allProductsJson.nodes}
      images={images}
    />
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Audio Software</title>
);
