import { Anchor, Box, Heading, Image } from "grommet";
import { Link } from "grommet-icons";
import React from "react";
import retroSampler from "../images/retrosampler.png";
import bitEcho from "../images/bitecho.png";
import bitEchoPro from "../images/bitecho-pro.png";
import hatster from "../images/hatster.png";
import hatsterPro from "../images/hatster-pro.png";

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
          <Anchor href="https://trnr.gumroad.com/l/retrosampler">
            <Image
              src={retroSampler}
              fill="horizontal"
              alt="RetroSampler Screenshot"
            />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://trnr.gumroad.com/l/bitecho">
            <Image src={bitEcho} fill="horizontal" alt="BitEcho Screenshot" />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://trnr.gumroad.com/l/bitecho-pro">
            <Image
              src={bitEchoPro}
              fill="horizontal"
              alt="BitEcho Pro Screenshot"
            />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://trnr.gumroad.com/l/hatster">
            <Image src={hatster} fill="horizontal" alt="Hatster Screenshot" />
          </Anchor>
        </Box>
        <Box pad={{ right: "small", bottom: "small" }}>
          <Anchor href="https://trnr.gumroad.com/l/hatster-pro">
            <Image
              src={hatsterPro}
              fill="horizontal"
              alt="Hatster Pro Screenshot"
            />
          </Anchor>
        </Box>
      </Box>
    </Box>
  );
}
