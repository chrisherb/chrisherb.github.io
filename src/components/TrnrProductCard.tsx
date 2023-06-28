import React from "react";
import {
  GatsbyImage,
  IGatsbyImageData,
  StaticImage,
} from "gatsby-plugin-image";
import { Box, Heading, Paragraph } from "grommet";
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
        <Box direction="row" justify="between">
          <Heading margin={{ top: "none", bottom: "small" }} level={2}>
            {props.product.name}
          </Heading>
          <Box direction="row" gap="xsmall" align="start">
            {isAbleton && (
              <StaticImage
                height={36}
                objectFit="scale-down"
                src="../images/static/live.svg"
                alt="Ableton Live Logo"
                title="Ableton Live version available"
              />
            )}
            {isIos && (
              <StaticImage
                height={36}
                objectFit="scale-down"
                src="../images/static/ios.svg"
                alt="iOS Logo"
                title="iOS version available"
              />
            )}
            {isVst && (
              <StaticImage
                height={36}
                objectFit="scale-down"
                src="../images/static/vst.svg"
                alt="VST Logo"
                title="VST version available"
              />
            )}
          </Box>
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
              size="xlarge"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
