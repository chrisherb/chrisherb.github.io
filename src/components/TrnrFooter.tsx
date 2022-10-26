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
          href="https://soundcloud.com/ternaer"
          label="Soundcloud"
          target="_blank"
        />
        <Anchor
          href="https://www.instagram.com/trnr.tech/"
          label="Instagram"
          target="_blank"
        />
        <Anchor href="https://store.ternar.tech/" label="Store" />
        <TrnrLink to="/impressum">Impressum</TrnrLink>
      </Nav>
    </Footer>
  );
}
