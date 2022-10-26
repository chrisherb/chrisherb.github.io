import { StaticImage } from "gatsby-plugin-image";
import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Paragraph,
} from "grommet";
import { AssistListening, Compliance, Configure, Link } from "grommet-icons";
import React from "react";

export function TrnrServices() {
  return (
    <div style={{ display: "grid" }}>
      <StaticImage
        src="../images/ableton.jpg"
        alt=""
        layout="fullWidth"
        aspectRatio={3 / 1}
        style={{ gridArea: "1/1", opacity: "0.25" }}
      />
      <Box
        style={{ gridArea: "1/1", position: "relative" }}
        id="services"
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
            Services
          </Heading>
          <Anchor icon={<Link />} href="#services" />
        </Box>
        <Box
          direction="row-responsive"
          justify="evenly"
          pad={{ bottom: "large" }}
          gap="medium"
        >
          <Card pad="medium" background="light-3" elevation="large">
            <CardHeader justify="start">
              <AssistListening size="large" color="control" />
              <Heading level="3">Mix/Production Consulting</Heading>
            </CardHeader>
            <CardBody>
              <Paragraph>
                Sit down with me in person and we go over your mix to figure out
                how to get your production to the next level.
              </Paragraph>
            </CardBody>
            <CardFooter justify="center">
              <Button href="#contact" label="Get in Contact for Rates" />
            </CardFooter>
          </Card>

          <Card pad="medium" background="light-1" elevation="large">
            <CardHeader justify="start">
              <Configure size="large" color="control" />
              <Heading level="3">Audio Processing Service</Heading>
            </CardHeader>
            <CardBody>
              <Paragraph>
                Send in your audio tracks or stems and I will process them with
                analog and/or digital hardware gear.
              </Paragraph>
            </CardBody>
            <CardFooter justify="center" direction="row-responsive">
              <Button
                href="https://www.fiverr.com/trnr_tech/process-your-audio-track-with-analog-and-digital-gear"
                target="_blank"
                primary
                label="Book on Fiverr"
              />
              <Button href="#contact" label="Get in Contact for Rates" />
            </CardFooter>
          </Card>

          <Card pad="medium" background="light-1" elevation="large">
            <CardHeader justify="start">
              <Compliance size="large" color="control" />
              <Heading level="3">Mastering Service</Heading>
            </CardHeader>
            <CardBody>
              <Paragraph>
                Get the final touch for your mix with high quality software and
                hardware processing.
              </Paragraph>
            </CardBody>
            <CardFooter justify="center">
              <Button href="#contact" label="Get in Contact for Rates" />
            </CardFooter>
          </Card>
        </Box>
      </Box>
    </div>
  );
}
