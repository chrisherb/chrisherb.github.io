import * as React from "react";
import { Box } from "grommet";
import { TrnrFooter, TrnrHeader } from "../components";

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const TrnrMain = ({ children }: Props) => {
  return (
    <Box id="top">
      {/* HEADER */}
      <TrnrHeader />

      {children}

      {/* FOOTER */}
      <TrnrFooter />
    </Box>
  );
};
