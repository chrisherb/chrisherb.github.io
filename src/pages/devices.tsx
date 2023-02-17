import { graphql, HeadFC, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Box, Heading } from "grommet";
import { RadioButtonGroup } from "grommet/components";
import React, { useState } from "react";
import { TrnrCard } from "../components/TrnrCard";
import { TrnrLink } from "../components/TrnrLink";
import { TrnrMain } from "../components/TrnrMain";

export default function Component() {
  const data: any = useStaticQuery(graphql`
    query TrnrDevices {
      allProductsJson {
        nodes {
          id
          name
          description
          tags
          custom_permalink
          productsPath: gatsbyPath(filePath: "/devices/{ProductsJson.name}")
        }
      }
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              quality: 100
              height: 250
              width: 250
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
          <Heading margin="0">Devices</Heading>
          <RadioButtonGroup
            pad={{ top: "small" }}
            name={"Filter"}
            options={["All", "VST", "Ableton", "Sample Pack"]}
            direction="row"
            value={filterValue}
            onChange={(event) => {
              setFilterValue(event.target.value);
            }}
          />
        </Box>
        <Box wrap direction="row">
          {filteredData.map((product: any) => {
            const fileName = product.custom_permalink + ".png";
            const node = data.allFile.nodes.find(
              (element: any) => element.relativePath == fileName
            );
            const image = getImage(node);
            return (
              <TrnrCard
                key={product.id}
                link={product.productsPath}
                image={image!}
                text={product.description.replace(/<\/?[^>]+(>|$)/g, "")}
                title={product.name!}
                maxLines={8}
              />
            );
          })}
        </Box>
      </Box>
    </TrnrMain>
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Devices</title>
);
