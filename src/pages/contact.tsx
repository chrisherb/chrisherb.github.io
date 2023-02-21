import { HeadFC } from "gatsby";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  TextArea,
  TextInput,
} from "grommet";
import React, { useState } from "react";
import { TrnrLink } from "../components/TrnrLink";
import { TrnrMain } from "../components/TrnrMain";

export default function Component() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
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
          <Heading margin="0">Contact</Heading>
        </Box>
        <Box
          direction="row-responsive"
          justify="evenly"
          pad={{ bottom: "large" }}
          gap="medium"
        >
          <Card
            width="large"
            height="medium"
            background="light-3"
            pad="medium"
            elevation="0"
            round="none"
          >
            <CardHeader>
              <Heading margin={{ top: "0", bottom: "medium" }} level="3">
                Get in Touch
              </Heading>
            </CardHeader>
            <CardBody>
              <Box align="center" direction="column" gap="small">
                <TextInput
                  value={name}
                  onChange={(ev) => setName(ev.target.value)}
                  placeholder="Name"
                />
                <TextArea
                  value={message}
                  onChange={(ev) => setMessage(ev.target.value)}
                  placeholder="Message..."
                />
                <Button
                  alignSelf="center"
                  primary
                  margin="small"
                  label="Send"
                  href={`mailto:info@ternär.tech?subject=Inquiry by ${name}&body=${message}`}
                />
              </Box>
            </CardBody>
          </Card>
        </Box>
      </Box>
    </TrnrMain>
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Contact</title>
);
