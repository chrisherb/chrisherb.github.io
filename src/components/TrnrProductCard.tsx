import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Box, Heading, Paragraph, Tag } from "grommet";
import { TrnrButton } from "./TrnrButton";
import { TrnrCartButton } from "./TrnrCartButton";
import { TrnrPriceLabel } from "./TrnrPriceLabel";

type Props = {
  product: any;
  image: IGatsbyImageData;
};

export function TrnrProductCard(props: Props) {
  const isDemo =
    props.product.tags?.find((tag: any) => tag == "demo")?.length! > 0;

  const isAbleton =
    props.product.tags?.find((tag: any) => tag == "max for live")?.length > 0;

  const isIos =
    props.product.tags?.find((tag: any) => tag == "ios")?.length > 0;

  const isVst =
    props.product.tags?.find((tag: any) => tag == "vst")?.length > 0;

  const variants =
    props.product.variants.length > 0
      ? props.product.variants[0].options
      : undefined;

  return (
    <Box
      background={"background"}
      margin={{ bottom: "medium" }}
      round={"none"}
      elevation="none"
      width="550px"
    >
      <GatsbyImage
        alt={props.product.name + " Screenshot"}
        image={props.image}
      />
      <Box pad={{ horizontal: "medium", top: "small", bottom: "medium" }}>
        <Box direction="row" align="start" gap="xsmall">
          <Heading margin={{ top: "none", bottom: "small" }} level={2}>
            {props.product.name}
          </Heading>
          {isAbleton && <Tag size="xsmall" value={"Live"} />}
          {isIos && <Tag size="xsmall" value={"iOS"} />}
          {isVst && <Tag size="xsmall" value={"VST"} />}
        </Box>
        <Paragraph fill margin={"none"} maxLines={4}>
          {props.product.description.replace(/<\/?[^>]+(>|$)/g, "")}
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
            to={props.product.productsPath}
          />
          <TrnrCartButton
            isNameYourPrice={props.product.price == 0 && !isDemo}
            price={props.product.price / 100}
            product={props.product}
          />
          <Box width="280px" align="end" fill="horizontal">
            <TrnrPriceLabel
              demo={isDemo}
              price={props.product.price}
              priceMax={
                variants
                  ? variants[variants.length - 1].price_difference
                  : undefined
              }
              size="xlarge"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
