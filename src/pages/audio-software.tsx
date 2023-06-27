import { graphql, HeadFC, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Box, Heading } from "grommet";
import { RadioButtonGroup } from "grommet/components";
import React, { useState } from "react";
import { TrnrLink } from "../components/TrnrLink";
import { TrnrMain } from "../components/TrnrMain";
import { TrnrProductCard } from "../components/TrnrProductCard";

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
  const [filterValue, setFilterValue] = useState("All");
  const filteredData = data.allProductsJson.nodes.filter((product: any) => {
    if (filterValue == "All") {
      return true;
    } else {
      const filteredProducts = product.tags.filter(
        (tag: any) => tag == filterValue.toLowerCase()
      );
      return filteredProducts.length > 0;
    }
  });

  return (
    <TrnrMain>
      <Box
        id="music"
        pad={{
          left: "xlarge",
          top: "medium",
          right: "xlarge",
          bottom: "xlarge",
        }}
        background="brand"
      >
        <Box
          pad={{ top: "medium", bottom: "medium" }}
          margin={{ bottom: "large" }}
          border="bottom"
        >
          <Box direction="row">
            <TrnrLink to="/" color="control">
              Home
            </TrnrLink>
          </Box>
          <Heading margin="0">Audio Software</Heading>
          <RadioButtonGroup
            pad={{ top: "small" }}
            name={"Filter"}
            options={[
              { label: "All", value: "All" },
              { label: "VST", value: "VST" },
              { label: "Max for Live", value: "Ableton" },
              { label: "Sample Pack", value: "Sample Pack" },
            ]}
            direction="row"
            value={filterValue}
            onChange={(event) => {
              setFilterValue(event.target.value);
            }}
          />
        </Box>
        <Box wrap direction="row" gap="medium">
          {filteredData.map((product: any) => {
            const fileName = product.custom_permalink + ".png";
            const node = data.allFile.nodes.find(
              (element: any) => element.relativePath == fileName
            );
            const image = getImage(node);
            const price = product.price!;
            const demo =
              product.tags?.find((tag: any) => tag == "demo")?.length! > 0;
            return (
              <TrnrProductCard
                name={product.name}
                description={product.description}
                image={image!}
                price={product.price}
                product={product}
                productsPath={product.productsPath}
                demo={demo}
              />
            );
          })}
        </Box>
      </Box>
    </TrnrMain>
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Audio Software</title>
);
