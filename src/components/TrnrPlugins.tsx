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
        <Grid
          gap="small"
          columns={{
            count: size === "large" ? 3 : size === "medium" ? 2 : 1,
            size: "auto",
          }}
          margin={{ bottom: "xlarge" }}
        >
          <Box direction="column" gap="medium">
            <Heading
              level="4"
              size="xlarge"
              margin={{ top: "none", bottom: "xsmall" }}
            >
              Triplex Classic
            </Heading>
            <Text>
              Classic FM sounds with a modern twist! Triplex Classic takes
              inspiration from famous digital synthesizers of the 80s and puts
              them in an easy-to-use, accessible interface. The synth engine was
              developed from the ground up to facilitate sounds ranging from
              pristine modern FM sounds to crunchy bit-crushed mayhem - with
              everything in between.
            </Text>
            <Text>
              Available in VST3 format for both Mac and Windows 64 bit.
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
          <Box align="center">
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
                "3 operator FM synth engine with up to 8 voices",
                'Macro controls over FM amount, harmonicity, phase and bit resolution (labeled "redux"), attack, combined decay/release and sustain',
                "LFO with shape control (sine, triangle, ramp up, ramp down, square, random) and user-definable destination",
                "Chorus",
                "Drive control",
              ]}
              primaryKey={(datum) => (
                <Box gap="medium" direction="row">
                  <Diamond size="medium" />
                  <Text>{datum}</Text>
                </Box>
              )}
              itemKey={(datum) => `key-${datum}`}
            />
          </Box>
        </Grid>
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
              Triplex Kicker
            </Heading>
            <Text>
              Synthesize massive kicks and thumping toms with the Triplex retro
              FM engine! Triplex Kicker is a 3 operator FM synth specializing in
              kick and tom sounds. The sound can easily be manipulated with 6
              simple controls and the unique integrated envelope generator
              shapes the sound in a way that makes it sound like a perfectly
              compressed kick. Use the filter to do DJ-style highpass filtering,
              the LFO for experimental shape-shifting tom sounds and top it all
              off with a dash of soft clipping with the drive control.
            </Text>
            <Text>
              Available in VST3 format for both Mac and Windows 64 bit.
            </Text>
            <Box direction="row-responsive" gap="medium">
              <Windows />
              <Apple />
              <Button
                label="Download Demo"
                href="https://store.ternar.tech/l/triplex-kicker-demo"
              />
              <Button
                primary
                label="Buy Full Version"
                href="https://store.ternar.tech/l/triplex-kicker"
              />
            </Box>
          </Box>
          <Box align="center">
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
                "3 operator FM synth engine with up to 8 voices",
                'Macro controls over pitch envelope amount, pitch envelope decay, DJ-style highpass filter, attack, tail and "body"',
                "Sine wave LFO with shape control (sine, triangle, ramp up, ramp down, square, random) and user-definable destination",
                "Drive control",
              ]}
              primaryKey={(datum) => (
                <Box gap="medium" direction="row">
                  <Diamond size="medium" />
                  <Text>{datum}</Text>
                </Box>
              )}
              itemKey={(datum) => `key-${datum}`}
            />
          </Box>
        </Grid>
      </Box>
    </div>
  );
}
