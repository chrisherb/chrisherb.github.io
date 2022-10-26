import { StaticImage } from "gatsby-plugin-image";
import {
  Box,
  Text,
  List,
  Heading,
  Anchor,
  Grid,
  Button,
  ResponsiveContext,
} from "grommet";
import { Link, Windows, Apple, Diamond } from "grommet-icons";
import React from "react";

export function TrnrPlugins() {
  return (
    <ResponsiveContext.Consumer>
      {(size) => (
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
            <Grid
              gap="small"
              columns={{
                count: size === "large" ? 3 : size === "medium" ? 2 : 1,
                size: "auto",
              }}
            >
              <Box direction="column" gap="medium">
                <Heading
                  level="4"
                  size="xlarge"
                  margin={{ top: "none", bottom: "xsmall" }}
                >
                  Triplex Classic (Early Access)
                </Heading>
                <Text>
                  Classic FM sounds with a modern twist! Triplex Classic takes
                  inspiration from famous digital synthesizers of the 80s and
                  puts them in an easy-to-use, accessible interface. The synth
                  engine was developed from the ground up to facilitate sounds
                  ranging from pristine modern FM sounds to crunchy bit-crushed
                  mayhem - with everything in between.
                </Text>
                <Text>
                  You now have the chance to buy the plugin for a reduced price
                  while it is still in early access. VST3 versions for 64 bit
                  Windows and Mac systems are readily available while we work on
                  the AU and AAX versions. Controlling parameters via MIDI is
                  also a feature that is still under development.
                </Text>
                <Box direction="row-responsive" gap="medium">
                  <Windows />
                  <Apple />
                  <Button
                    label="Download Demo"
                    href="https://store.ternar.tech/l/triplex-classic-demo"
                  />
                  <Button
                    primary
                    label="Buy Full Version"
                    href="https://store.ternar.tech/l/triplex-classic"
                  />
                </Box>
              </Box>
              <Box>
                <Box
                  width={{ min: "small", max: "500px" }}
                  height={{ min: "small", max: "500px" }}
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
                    />
                  </Anchor>
                </Box>
              </Box>
              <Box direction="column">
                <Heading
                  level="4"
                  size="xlarge"
                  margin={{ top: "none", bottom: "medium" }}
                >
                  Features:
                </Heading>
                <List
                  data={[
                    "4 voice, 3 operator FM synth engine",
                    'Macro controls over FM amount, harmonicity, phase and bit resolution (labeled "redux"), attack, decay/release and sustain',
                    "Sine wave LFO with user-definable destination",
                    "Chorus",
                    "Output filter with two different flavours",
                  ]}
                  primaryKey={(datum) => (
                    <Box gap="medium" direction="row">
                      <Diamond size="medium" />
                      <Text>{datum}</Text>
                    </Box>
                  )}
                ></List>
              </Box>
            </Grid>
          </Box>
        </div>
      )}
    </ResponsiveContext.Consumer>
  );
}
