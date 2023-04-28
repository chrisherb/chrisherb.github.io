import { Grommet, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import React from "react";
import { TrnrCookieBanner } from "./TrnrCookieBanner";

const trnrTheme = deepMerge(grommet, {
  global: {
    breakpoints: {
      small: {
        edgeSize: {
          xlarge: "20px",
        },
      },
    },
  },
  button: {
    border: {
      radius: undefined,
    },
    padding: {
      vertical: "9px",
      horizontal: "24px",
    },
  },
  heading: {
    level: {
      2: {
        xsmall: {
          size: "18px",
          height: "30px",
        },
      },
      3: {
        xlarge: {
          size: "50px",
        },
      },
      4: {
        xlarge: {
          size: "34px",
        },
      },
    },
  },
});

type Props = {
  children?: JSX.Element | JSX.Element[];
};

export const TrnrPageWrapper = ({ children }: Props) => {
  return (
    <Grommet full theme={trnrTheme} themeMode="dark">
      {children}
      <TrnrCookieBanner />
    </Grommet>
  );
};
