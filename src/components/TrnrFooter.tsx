import { Footer, Nav, Anchor, Text } from "grommet";
import React from "react";
import { TrnrLink } from "./TrnrLink";

export function TrnrFooter() {
  return (
    <Footer
      background="control"
      pad={{ left: "xlarge", top: "large", right: "xlarge", bottom: "large" }}
    >
      <Text>© 2022 Ternär Music Technology Christopher Herb</Text>
      <Nav direction="row-responsive">
        <Anchor
          href="https://soundcloud.com/akaroid_trnr"
          label="Soundcloud"
          target="_blank"
        />
        <Anchor
          href="https://store.ternar.tech/follow"
          target="_blank"
          label="Newsletter"
        />
        <TrnrLink to="/contact" color="brand">
          Contact
        </TrnrLink>
        <TrnrLink to="/impressum" color="brand">
          Impressum
        </TrnrLink>
      </Nav>
    </Footer>
  );
}
