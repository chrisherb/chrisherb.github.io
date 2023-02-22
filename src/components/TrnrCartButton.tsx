import {
  Box,
  Button,
  DropButton,
  MaskedInput,
  ResponsiveContext,
  Text,
} from "grommet";
import { Add, Cart } from "grommet-icons";
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
  let href: string = "";
  if (isClient) {
    href =
      props.product?.short_url! +
      "?wanted=true&referrer=" +
      window.location.href +
      "&price=" +
      price;
  }

  const screenSize = useContext(ResponsiveContext);

  if (props.isNameYourPrice) {
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
              <Button icon={<Add />} href={href} />
            </Box>
          </Box>
        }
      />
    );
  } else {
    return (
      <Button primary fill="horizontal" label={"Add to Cart"} href={href} />
    );
  }
}
