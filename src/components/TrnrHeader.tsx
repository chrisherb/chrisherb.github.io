import { Anchor, Header, Nav } from "grommet";
import React from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export function TrnrHeader() {
  return (
    <Header
      background={"control"}
      pad={{ left: "small", top: "small", right: "xlarge", bottom: "small" }}
      sticky="scrollup"
    >
      <Link to="/">
        <StaticImage
          height={55}
          src="../images/trnr-logo-sqr.svg"
          alt="Ternär Music Technology Square Logo"
        />
      </Link>
      <Nav direction="row-responsive">
        <Anchor label="Home" href="#home" />
        <Anchor label="Plugins" href="#plugins" />
        <Anchor label="Devices" href="#devices" />
        <Anchor label="Services" href="#services" />
        <Anchor label="Contact" href="#contact" />
      </Nav>
    </Header>
  );
}
