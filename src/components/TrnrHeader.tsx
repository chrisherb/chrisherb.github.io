import { Anchor, Header, Nav, Image } from "grommet";
import React from "react";

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
        <Anchor href="#home" label="Home" />
        <Anchor href="#plugins" label="Plugins" />
        <Anchor href="#devices" label="Devices" />
        <Anchor href="#services" label="Services" />
        <Anchor href="#contact" label="Contact" />
      </Nav>
    </Header>
  );
}
