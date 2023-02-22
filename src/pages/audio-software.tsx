import { graphql, HeadFC, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Box, Heading } from "grommet";
import { Button, Paragraph, RadioButtonGroup } from "grommet/components";
import React, { useState } from "react";
import { TrnrButton } from "../components/TrnrButton";
import { TrnrCartButton } from "../components/TrnrCartButton";
import { TrnrLink } from "../components/TrnrLink";
import { TrnrMain } from "../components/TrnrMain";
import { TrnrPriceLabel } from "../components/TrnrPriceLabel";

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
              <Box
                background={"background"}
                margin={{ bottom: "medium" }}
                round={"none"}
                elevation="none"
                width="550px"
              >
                <GatsbyImage
                  alt={product.name! + " Screenshot"}
                  image={image!}
                />
                <Box
                  pad={{ horizontal: "medium", top: "small", bottom: "medium" }}
                >
                  <Heading margin={{ top: "none", bottom: "small" }} level={2}>
                    {product.name!}
                  </Heading>
                  <Paragraph fill margin={"none"} maxLines={4}>
                    {product.description!.replace(/<\/?[^>]+(>|$)/g, "")}
                  </Paragraph>
                  <Box
                    direction="row-responsive"
                    margin={{ top: "medium" }}
                    gap="small"
                    align="center"
                  >
                    <TrnrButton
                      fill="horizontal"
                      label={"Details"}
                      to={product.productsPath}
                    />
                    <TrnrCartButton
                      isNameYourPrice={price == 0 && !demo}
                      price={price / 100}
                      product={product}
                    />
                    <Box width="280px" align="end" fill="horizontal">
                      <TrnrPriceLabel demo={demo} price={price} size="xlarge" />
                    </Box>
                  </Box>
                </Box>
              </Box>
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
