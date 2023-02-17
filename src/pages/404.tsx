import { HeadFC } from "gatsby";
import { Box, Heading, Text } from "grommet";
import { DocumentMissing } from "grommet-icons";
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
          <Heading margin="0">404</Heading>
        </Box>
        <Box direction="row-responsive" pad={{ bottom: "large" }} gap="medium">
          <DocumentMissing size="large" />
          <Text size="xlarge">We're Sorry, we couldn't find the Page :(</Text>
        </Box>
      </Box>
    </TrnrMain>
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | 404 Not found</title>
);
