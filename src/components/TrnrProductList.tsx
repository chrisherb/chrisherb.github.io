import React from "react";
import { TrnrMain } from "./TrnrMain";
import { Box, Heading, Select, Text } from "grommet";
import { TrnrLink } from "./TrnrLink";
import { TrnrProductCard } from "./TrnrProductCard";
import { IGatsbyImageData, getImage } from "gatsby-plugin-image";
import { navigate } from "gatsby";

type Props = {
  title: string;
  products: Array<any>;
  type: string;
  platform: string;
  images: any;
};

export function TrnrProductList(props: Props) {
  let type = props.type;
  let format = props.platform;

  const productsByType = props.products.filter((product: any) => {
    if (type == "All") return true;
    return product.tags.includes(type.toLowerCase());
  });
  const productsByPlatform = productsByType.filter((product: any) => {
    if (format == "All") return true;
    return product.tags.includes(format.toLowerCase());
  });

  const filter = () => {
    navigate(
      "/audio-software?type=" +
        type.replaceAll(" ", "+") +
        "&platform=" +
        format.replaceAll(" ", "+")
    );
  };

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
          align="start"
        >
          <Box direction="row">
            <TrnrLink to="/" color="control">
              Home
            </TrnrLink>
          </Box>
          <Heading margin={{ top: "none", bottom: "xsmall" }}>
            {props.title}
          </Heading>
          <Box
            direction="row"
            align="start"
            gap="small"
            border="all"
            pad={{ horizontal: "small", top: "xsmall", bottom: "small" }}
            round="xsmall"
          >
            <Box>
              <Text weight="bold" margin={{ bottom: "xsmall" }}>
                Type
              </Text>
              <Select
                width="small"
                options={[
                  "All",
                  "Instrument",
                  "Effect",
                  "Sample Pack",
                  "Legacy",
                ]}
                onChange={({ value }) => {
                  type = value;
                  filter();
                }}
                value={props.type}
              />
            </Box>
            <Box>
              <Text weight="bold" margin={{ bottom: "xsmall" }}>
                Format
              </Text>
              <Select
                width="small"
                options={["All", "Max for Live", "VST", "iOS"]}
                onChange={({ value }) => {
                  format = value;
                  filter();
                }}
                value={props.platform}
              />
            </Box>
          </Box>
        </Box>
        <Box wrap direction="row" gap="medium">
          {productsByPlatform.length == 0 && (
            <Text>Nothing to see here...</Text>
          )}
          {productsByPlatform.map((product: any) => {
            const nodes = props.images.filter((element: any) =>
              element.name.startsWith(product.custom_permalink + "__")
            );
            const images: IGatsbyImageData[] = nodes.map((img: any) =>
              getImage(img)
            );
            return (
              <TrnrProductCard
                key={product.id}
                images={images}
                product={product}
              />
            );
          })}
        </Box>
      </Box>
    </TrnrMain>
  );
}
