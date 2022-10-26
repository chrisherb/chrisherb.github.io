import * as React from "react";
import { Box, grommet, Grommet } from "grommet";
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
