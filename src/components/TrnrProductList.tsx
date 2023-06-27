import React from "react";
import { TrnrMain } from "./TrnrMain";
import { Box, Heading, RadioButtonGroup } from "grommet";
import { TrnrLink } from "./TrnrLink";
import { TrnrProductCard } from "./TrnrProductCard";
import { getImage } from "gatsby-plugin-image";

type Props = {
  title: string;
  products: any;
  images: any;
};

export function TrnrProductList(props: Props) {
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
          <Heading margin="0">{props.title}</Heading>
          {/* <RadioButtonGroup
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
              /> */}
        </Box>
        <Box wrap direction="row" gap="medium">
          {props.products.map((product: any) => {
            const fileName = product.custom_permalink + ".png";
            const node = props.images.find(
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
