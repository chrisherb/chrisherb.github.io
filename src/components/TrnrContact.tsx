import {
  Anchor,
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Heading,
  TextArea,
  TextInput,
} from "grommet";
import { Link } from "grommet-icons";
import React from "react";
import { useState } from "react";

export function TrnrContact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Box
      id="contact"
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
          Contact
        </Heading>
        <Anchor icon={<Link />} href="#contact" />
      </Box>
      <Box justify="center" direction="row">
        <Card
          width="large"
          height="medium"
          background="light-3"
          pad="medium"
          elevation="0"
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
                href={`mailto:info@ternär.tech?subject=Inquiry by${name}&body=${message}`}
              />
            </Box>
          </CardBody>
        </Card>
      </Box>
    </Box>
  );
}
