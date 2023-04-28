import * as React from "react";
import type { GatsbyBrowser } from "gatsby";
import { TrnrPageWrapper } from "./src/components/TrnrPageWrapper";

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return <TrnrPageWrapper>{element}</TrnrPageWrapper>;
};
