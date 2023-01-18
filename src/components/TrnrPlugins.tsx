import { StaticImage } from "gatsby-plugin-image";
import { Box, Heading, Anchor, ResponsiveContext } from "grommet";
import { Link } from "grommet-icons";
import React, { useContext } from "react";

export function TrnrPlugins() {
  const size = useContext(ResponsiveContext);

  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        src="../images/triplex-monitor.jpg"
        alt=""
        layout="fullWidth"
        aspectRatio={3 / 1}
        style={{ gridArea: "1/1", opacity: "0.25" }}
      />
      <Box
        style={{
          gridArea: "1/1",
          position: "relative",
        }}
        id="plugins"
        pad={{
          left: "xlarge",
          top: "medium",
          right: "xlarge",
          bottom: "xlarge",
        }}
      >
        <Box
          direction="row"
          justify="between"
          pad={{ top: "medium", bottom: "medium" }}
          margin={{ bottom: "large" }}
          border="bottom"
        >
          <Heading level="3" size="xlarge" margin="0">
            Plugins
          </Heading>
          <Anchor icon={<Link />} href="#plugins" />
        </Box>
        <Box wrap direction="row">
          <Box
            margin="small"
            border={{ size: "medium" }}
            round="xsmall"
            elevation="xlarge"
            animation="fadeIn"
          >
            <Anchor href="https://store.ternar.tech/l/triplex-classic">
              <StaticImage
                src="../images/triplex-screenshot.png"
                alt="Triplex Classic Screenshot"
                width={480}
                height={480}
                quality={100}
              />
            </Anchor>
          </Box>
          <Box
            margin="small"
            border={{ size: "medium" }}
            round="xsmall"
            elevation="xlarge"
            animation="fadeIn"
          >
            <Anchor href="https://store.ternar.tech/l/triplex-kicker">
              <StaticImage
                src="../images/kicker-screenshot.png"
                alt="Triplex Kicker Screenshot"
                width={480}
                height={480}
                quality={100}
              />
            </Anchor>
          </Box>
          <Box
            margin="small"
            border={{ size: "medium" }}
            round="xsmall"
            elevation="xlarge"
            animation="fadeIn"
          >
            <Anchor href="https://store.ternar.tech/l/triplex-snapper">
              <StaticImage
                src="../images/snapper-screenshot.png"
                alt="Triplex Snapper Screenshot"
                width={480}
                height={480}
                quality={100}
              />
            </Anchor>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
