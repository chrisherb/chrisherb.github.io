import * as React from "react";
import type { HeadFC } from "gatsby";
import { Box, grommet, Grommet } from "grommet";
import {
  TrnrContact,
  TrnrDevices,
  TrnrFooter,
  TrnrHeader,
  TrnrPlugins,
  TrnrServices,
  TrnrTitle,
} from "../components";
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

const IndexPage = () => {
  return (
    <Grommet full theme={trnrTheme} themeMode="dark">
      <Box id="top">
        {/* HEADER */}
        <TrnrHeader />

        {/* TITLE */}
        <TrnrTitle />

        {/* PLUGINS */}
        <TrnrPlugins />

        {/* DEVICES */}
        <TrnrDevices />

        {/* SERVICES */}
        <TrnrServices />

        {/* CONTACT */}
        <TrnrContact />

        {/* FOOTER */}
        <TrnrFooter />
      </Box>
    </Grommet>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
