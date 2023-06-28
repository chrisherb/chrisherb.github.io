import { navigate } from "gatsby";
import { Box, Text } from "grommet";
import { Next } from "grommet-icons";
import React, { useState } from "react";

type Props = {
  label: string;
  to: string;
  indented?: boolean;
};

export function TrnrMenuButton(props: Props) {
  const [hover, setHover] = useState(false);
  const active = window.location.pathname.startsWith(props.to);

  return (
    <Box
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      background={hover ? "black" : "none"}
      direction="row"
      justify="between"
      pad={{
        left: props.indented ? "medium" : "small",
        vertical: "medium",
        right: "medium",
      }}
      onClick={(ev) => {
        navigate(props.to);
        ev.preventDefault();
      }}
    >
      <Text
        weight={"bold"}
        style={{ textDecoration: active ? "underline" : "none" }}
      >
        {props.label}
      </Text>
      <Next size="medium" />
    </Box>
  );
}
