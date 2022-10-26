import { Anchor, Header, Nav, Image } from "grommet";
import React from "react";
import { navigate } from "gatsby";

export function TrnrHeader() {
  return (
    <Header
      background={"control"}
      pad={{ left: "small", top: "small", right: "xlarge", bottom: "small" }}
      sticky="scrollup"
    >
      <Anchor href="#top">
        <Image
          width={55}
          src="/trnr-logo-sqr.svg"
          alt="Ternär Music Technology Square Logo"
        />
      </Anchor>
      <Nav direction="row-responsive">
        <Anchor label="Home" onClick={() => navigate("#home")} />
        <Anchor label="Plugins" onClick={() => navigate("#home")} />
        <Anchor label="Devices" onClick={() => navigate("#devices")} />
        <Anchor label="Services" onClick={() => navigate("#services")} />
        <Anchor label="Contact" onClick={() => navigate("#contact")} />
      </Nav>
    </Header>
  );
}
