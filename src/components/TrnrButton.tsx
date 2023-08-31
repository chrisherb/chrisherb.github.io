import { navigate } from "gatsby";
import { Button, ButtonExtendedProps } from "grommet";
import React from "react";

export interface Props extends ButtonExtendedProps {
  to: string;
}

export function TrnrButton(props: Props) {
  return (
    <Button
      data-testid="button-title"
      {...props}
      href={props.to}
      onClick={(ev) => {
        navigate(props.to);
        ev.preventDefault();
      }}
    />
  );
}
