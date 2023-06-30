import {
  Box,
  Button,
  DropButton,
  List,
  MaskedInput,
  ResponsiveContext,
  Text,
} from "grommet";
import { Checkmark, FormDown } from "grommet-icons";
import React, { useContext, useState } from "react";
import useIsClient from "./TrnrHooks";

interface TrnrCartButtonProps {
  product?: any;
  price: number;
  isNameYourPrice: boolean;
}

export function TrnrCartButton(props: TrnrCartButtonProps) {
  const [price, setPrice] = useState<string>(props.price.toString());
  const { isClient, key } = useIsClient();

  const variants: Array<any> = props.product.variants;
  const hasVariants = variants.length > 0;

  const getHref = (price: string, variant?: string) => {
    const referrer = isClient ? window.location.href : "";

    let href =
      props.product?.short_url! +
      "?wanted=true&referrer=" +
      referrer +
      "&price=" +
      price;
    if (variant) href += "&variant=" + variant.replaceAll(" ", "%20");
    return href;
  };

  const screenSize = useContext(ResponsiveContext);

  // CHOOSE OPTION
  if (hasVariants) {
    return (
      <DropButton
        primary
        fill="horizontal"
        dropAlign={{ top: "bottom", left: "left" }}
        label={
          <Box background="control" direction="row" justify="between">
            <Text>Add to Cart</Text>
            <FormDown />
          </Box>
        }
        dropContent={
          <List
            pad={"small"}
            color="control"
            border={false}
            background="control"
            onClickItem={(event: {
              item?: any;
              index?: number | undefined;
            }) => {
              if (isClient)
                window.location.replace(
                  getHref(
                    (event.item.price_difference / 100).toString(),
                    event.item.name
                  )
                );
            }}
            data={variants[0].options}
            primaryKey={(item) => <Text key={item.name}>{item.name}</Text>}
            secondaryKey={(item: any) => (
              <Text key={item.price_difference} weight="bold">
                {item.price_difference / 100} €
              </Text>
            )}
          />
        }
      />
    );
    // NAME YOUR PRICE
  } else if (props.isNameYourPrice) {
    return (
      <DropButton
        primary
        fill="horizontal"
        label={"Add to Cart"}
        dropAlign={{ top: "bottom", left: "left" }}
        dropContent={
          <Box
            background="control"
            width={screenSize == "small" ? undefined : "small"}
            pad="xsmall"
          >
            <Text weight="bold" margin={{ bottom: "xsmall" }}>
              Name your Price:
            </Text>
            <Box direction="row">
              <MaskedInput
                reverse
                icon={<Text>€</Text>}
                mask={[
                  {
                    length: [1, 2],
                    placeholder: "0",
                    regexp: /^[0-9]{1,3}$/,
                  },
                ]}
                value={price}
                onChange={(event) => setPrice(event.target.value)}
              />
              <Button icon={<Checkmark />} href={getHref(price)} />
            </Box>
          </Box>
        }
      />
    );
  } else {
    return (
      <Button
        primary
        fill="horizontal"
        label={"Add to Cart"}
        href={getHref(price)}
      />
    );
  }
}
