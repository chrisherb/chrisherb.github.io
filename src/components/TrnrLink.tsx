import { Link } from "gatsby";
import { ThemeContext, ThemeType } from "grommet";
import { normalizeColor } from "grommet/utils";
import React, { useState } from "react";
import { useContext } from "react";

type Props = {
  children?: string;
  color: "brand" | "control" | "text";
  to: string;
};

export function TrnrLink(props: Props) {
  const theme = useContext<ThemeType>(ThemeContext);
  const [hover, setHover] = useState(false);

  return (
    <Link
      activeStyle={{ textDecoration: theme.anchor?.hover?.textDecoration }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        color: normalizeColor(props.color, theme),
        fontWeight: theme.anchor?.fontWeight,
        textDecoration: hover
          ? theme.anchor?.hover?.textDecoration
          : theme.anchor?.textDecoration,
      }}
      to={props.to}
    >
      {props.children}
    </Link>
  );
}
