import { Anchor, Box, Heading } from "grommet";
import { Link } from "grommet-icons";
import React from "react";
import { StaticImage } from "gatsby-plugin-image";

export function TrnrDevices() {
  return (
    <Box
      id="devices"
      pad={{ left: "xlarge", top: "medium", right: "xlarge", bottom: "xlarge" }}
      background="brand"
    >
      <Box
        direction="row"
        justify="between"
        pad={{ top: "medium", bottom: "medium" }}
        margin={{ bottom: "large" }}
        border="bottom"
      >
        <Heading level="3" size="xlarge" margin="0">
          Ableton Live Devices
        </Heading>
        <Anchor icon={<Link />} href="#devices" />
      </Box>
      <Box wrap direction="row">
        <Box margin={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/retrosampler">
            <StaticImage
              src="../images/retrosampler2.png"
              alt="RetroSampler Screenshot"
            />
          </Anchor>
        </Box>
        <Box margin={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/retrosampler-pro">
            <StaticImage
              src="../images/retrosampler2-pro.png"
              alt="RetroSampler Pro Screenshot"
            />
          </Anchor>
        </Box>
        <Box margin={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/channelstrip">
            <StaticImage
              src="../images/channelstrip.png"
              alt="ChannelStrip Screenshot"
            />
          </Anchor>
        </Box>
        <Box margin={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/channelstrip-pro">
            <StaticImage
              src="../images/channelstrip-pro.png"
              alt="ChannelStrip Pro Screenshot"
            />
          </Anchor>
        </Box>
        <Box margin={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/combine">
            <StaticImage src="../images/combine.png" alt="Combine Screenshot" />
          </Anchor>
        </Box>
        <Box margin={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/kickster">
            <StaticImage
              src="../images/kickster.png"
              alt="Kickster Screenshot"
            />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/bitecho">
            <StaticImage src="../images/bitecho.png" alt="BitEcho Screenshot" />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/bitecho-pro">
            <StaticImage
              src="../images/bitecho-pro.png"
              alt="BitEcho Pro Screenshot"
            />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/hatster">
            <StaticImage src="../images/hatster.png" alt="Hatster Screenshot" />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://store.ternar.tech/l/hatster-pro">
            <StaticImage
              src="../images/hatster-pro.png"
              alt="Hatster Pro Screenshot"
            />
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}
