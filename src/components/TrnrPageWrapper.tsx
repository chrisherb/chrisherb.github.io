import { Grommet } from "grommet";
import React from "react";
import { TrnrCookieBanner } from "./TrnrCookieBanner";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const TrnrPageWrapper = ({ children }: Props) => {
  return (
    <>
      {children}
      <TrnrCookieBanner />
    </>
  );
};
