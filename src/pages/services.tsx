import { HeadFC } from "gatsby";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Paragraph,
} from "grommet";
import { AssistListening, Compliance, Configure } from "grommet-icons";
import React from "react";
import { TrnrLink } from "../components/TrnrLink";
import { TrnrMain } from "../components/TrnrMain";

export default function Component() {
  return (
    <TrnrMain>
      <Box
        id="music"
        pad={{
          left: "xlarge",
          top: "medium",
          right: "xlarge",
          bottom: "xlarge",
        }}
        background="brand"
      >
        <Box
          pad={{ top: "medium", bottom: "medium" }}
          margin={{ bottom: "large" }}
          border="bottom"
        >
          <Box direction="row">
            <TrnrLink to="/" color="control">
              Home
            </TrnrLink>
          </Box>
          <Heading margin="0">Services</Heading>
        </Box>
        <Box
          direction="row-responsive"
          justify="evenly"
          pad={{ bottom: "large" }}
          gap="medium"
        >
          <Card
            pad="medium"
            background="background"
            elevation="none"
            round="none"
          >
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
              <Button href="/contact" label="Get in Contact for Rates" />
            </CardFooter>
          </Card>

          <Card
            pad="medium"
            background="background"
            elevation="none"
            round="none"
          >
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
              <Button href="/contact" label="Get in Contact for Rates" />
            </CardFooter>
          </Card>

          <Card
            pad="medium"
            background="background"
            elevation="none"
            round="none"
          >
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
              <Button href="/contact" label="Get in Contact for Rates" />
            </CardFooter>
          </Card>
        </Box>
      </Box>
    </TrnrMain>
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Services</title>
);
