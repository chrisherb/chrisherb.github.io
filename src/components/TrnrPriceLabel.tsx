import { Text } from "grommet";
import React from "react";

export function TrnrPriceLabel(props: {
  price: number;
  priceMax?: number | null;
  demo: boolean;
  size: string;
}) {
  let priceString = props.price !== 0 ? (props.price / 100).toFixed(2) : "0";
  if (props.priceMax != undefined) {
    const priceMaxString =
      props.priceMax !== 0 ? (props.priceMax / 100).toFixed(2) : "0";
    priceString += "-" + priceMaxString;
    debugger;
  } else if (props.price == 0 && !props.demo) {
    priceString += "+";
  }

  return (
    <Text weight={"bold"} color="control" size={props.size}>
      {priceString + " €"}
    </Text>
  );
}
