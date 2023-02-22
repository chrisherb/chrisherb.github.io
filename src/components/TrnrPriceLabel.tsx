import { Text } from "grommet";
import React from "react";

export function TrnrPriceLabel(props: {
  price: number;
  demo: boolean;
  size: string;
}) {
  let priceString = props.price != 0 ? (props.price / 100).toFixed(2) : "0";
  if (props.price == 0 && !props.demo) {
    priceString += "+";
  }

  return (
    <Text weight={"bold"} color="control" size={props.size}>
      {"€ " + priceString}
    </Text>
  );
}
