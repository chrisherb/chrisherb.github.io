import * as React from "react";
import { Box, Grommet, grommet } from "grommet";
import { TrnrFooter, TrnrHeader } from "../components";
import { deepMerge } from "grommet/utils";

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

export const TrnrMain = ({ children }: Props) => {
  return (
    <Grommet full theme={trnrTheme} themeMode="dark">
      <Box id="top">
        {/* HEADER */}
        <TrnrHeader />

        {children}

        {/* FOOTER */}
        <TrnrFooter />
      </Box>
    </Grommet>
  );
};
