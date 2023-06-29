import {
  Box,
  Button,
  DropButton,
  List,
  MaskedInput,
  ResponsiveContext,
  Text,
} from "grommet";
import { Checkmark } from "grommet-icons";
import React, { useContext, useState } from "react";
import { navigate } from "gatsby";

interface TrnrCartButtonProps {
  product?: any;
  price: number;
  isNameYourPrice: boolean;
}

export function TrnrCartButton(props: TrnrCartButtonProps) {
  const [price, setPrice] = useState<string>(props.price.toString());

  const variants: Array<any> = props.product.variants;
  const hasVariants = variants.length > 0;

  const getHref = (price: string, variant?: string) => {
    let href =
      props.product?.short_url! +
      "?wanted=true&referrer=" +
      window.location.href +
      "&price=" +
      price;
    if (variant) href += "&variant=" + variant.replaceAll(" ", "%20");
    return href;
  };

  const screenSize = useContext(ResponsiveContext);

  if (hasVariants) {
    return (
      <DropButton
        primary
        fill="horizontal"
        dropAlign={{ top: "bottom", left: "left" }}
        label={
          <Box direction="row" justify="center">
            <Text>Configure</Text>
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
              navigate(
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
  } else if (props.isNameYourPrice) {
    return (
      <DropButton
        primary
        fill="horizontal"
        label={"Add to Cart"}
        dropContent={
          <Box
            background="control"
            width={screenSize == "small" ? undefined : "small"}
            pad="small"
          >
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
