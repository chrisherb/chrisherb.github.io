import React from "react";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import { Box, Heading, Paragraph } from "grommet";
import { TrnrButton } from "./TrnrButton";
import { TrnrCartButton } from "./TrnrCartButton";
import { TrnrPriceLabel } from "./TrnrPriceLabel";

type Props = {
  name: string;
  description: string;
  image: IGatsbyImageData;
  productsPath: string;
  price: number;
  demo: boolean;
  product: any;
};

export function TrnrProductCard(props: Props) {
  return (
    <Box
      background={"background"}
      margin={{ bottom: "medium" }}
      round={"none"}
      elevation="none"
      width="550px"
    >
      <GatsbyImage alt={props.name + " Screenshot"} image={props.image} />
      <Box pad={{ horizontal: "medium", top: "small", bottom: "medium" }}>
        <Heading margin={{ top: "none", bottom: "small" }} level={2}>
          {props.name}
        </Heading>
        <Paragraph fill margin={"none"} maxLines={4}>
          {props.description.replace(/<\/?[^>]+(>|$)/g, "")}
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
            to={props.productsPath}
          />
          <TrnrCartButton
            isNameYourPrice={props.price == 0 && !props.demo}
            price={props.price / 100}
            product={props.product}
          />
          <Box width="280px" align="end" fill="horizontal">
            <TrnrPriceLabel
              demo={props.demo}
              price={props.price}
              size="xlarge"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
