import { Link } from "gatsby";
import { Footer, Nav, Anchor, Text } from "grommet";
import React from "react";
import styled from "styled-components";

const InternalLink = styled(Link)`
  text-decoration: none;
  :visited {
    color: inherit;
  }
`;

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
        <Anchor
          href="https://trnr.gumroad.com/"
          label="Gumroad"
          target="_blank"
        />
        <InternalLink to="/impressum">
          <Anchor label="Impressum" />
        </InternalLink>
      </Nav>
    </Footer>
  );
}
