import { Button, Header, Nav } from "grommet";
import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { TrnrLink } from "./TrnrLink";
import { Cart } from "grommet-icons";

export function TrnrHeader() {
  return (
    <Header
      background={"control"}
      pad={{ left: "small", vertical: "small", right: "medium" }}
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
        <TrnrLink to="/audio-software" color="brand">
          Audio Software
        </TrnrLink>
        <TrnrLink to="/services" color="brand">
          Services
        </TrnrLink>

        <Button
          plain
          icon={<Cart color="brand" />}
          href="https://app.gumroad.com/checkout"
        />
      </Nav>
    </Header>
  );
}
