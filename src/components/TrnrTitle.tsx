import { StaticImage } from "gatsby-plugin-image";
import { Box, ResponsiveContext, Heading } from "grommet";
import React from "react";

export function TrnrTitle() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
        <Box
          id="home"
          align="center"
          pad={{
            left: "xlarge",
            top: "large",
            right: "xlarge",
            bottom: "xlarge",
          }}
          background={{ opacity: "medium" }}
        >
          <Box
            width="large"
            pad="small"
            margin={{ left: size !== "small" ? "-190px" : "" }}
          >
            <Heading level="1" margin="0">
              <StaticImage
                src="../images/ternar-music-technology.svg"
                alt="Ternär Music Technology Logo"
              />
            </Heading>
            <Heading
              level="2"
              size="xsmall"
              margin={{
                left: size !== "small" ? "165px" : "0",
                top: "small",
              }}
            >
              Software Instruments and Effects straight from Europe&rsquo;s
              heart of electronic music, Berlin.
            </Heading>
          </Box>
        </Box>
      )}
    </ResponsiveContext.Consumer>
  );
}
