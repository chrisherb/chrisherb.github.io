import { Anchor, Header, Nav } from "grommet";
import React from "react";
import { Link, navigate } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { TrnrLink } from "./TrnrLink";

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
        <Anchor label="Plugins" href="#plugins" />
        <Anchor label="Devices" href="#devices" />
        <Anchor label="Music" href="https://ternaer.bandcamp.com/" />
        <Anchor label="Services" href="#services" />
        <Anchor label="Contact" href="#contact" />
      </Nav>
    </Header>
  );
}
