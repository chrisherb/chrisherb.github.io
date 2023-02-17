import { Header, Nav } from "grommet";
import React from "react";
import { Link } from "gatsby";
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
          src="../images/static/trnr-logo-sqr.svg"
          alt="Ternär Music Technology Square Logo"
        />
      </Link>
      <Nav direction="row-responsive">
        <TrnrLink to="/music" color="brand">
          Music
        </TrnrLink>
        <TrnrLink to="/devices" color="brand">
          Devices
        </TrnrLink>
        <TrnrLink to="/services" color="brand">
          Services
        </TrnrLink>
      </Nav>
    </Header>
  );
}
