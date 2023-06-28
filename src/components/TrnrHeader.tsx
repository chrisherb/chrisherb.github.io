import { Box, Button, Header, Layer, ResponsiveContext, Text } from "grommet";
import React, { useState } from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Cart, Close, Down, Menu, Up } from "grommet-icons";
import { TrnrMenuButton } from "./TrnrMenuButton";

export function TrnrHeader() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [showAudioSoftware, setShowAudioSoftware] = useState<boolean>(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <Header background={"control"} pad={"small"} height={"79px"}>
        <Link to="/">
          <StaticImage
            height={55}
            src="../images/static/trnr-logo-sqr.svg"
            alt="Ternär Music Technology Square Logo"
          />
        </Link>
        <Box direction="row">
          <Button icon={<Cart />} href="https://app.gumroad.com/checkout" />
          {!showMenu && (
            <Button icon={<Menu />} onClick={() => setShowMenu(true)} />
          )}
          {showMenu && (
            <Button icon={<Close />} onClick={() => setShowMenu(false)} />
          )}
        </Box>
      </Header>
      {showMenu && (
        <ResponsiveContext.Consumer>
          {(size) => (
            <Layer
              margin={{ top: "79px" }}
              position="top-right"
              full={size === "small" ? true : undefined}
              onClickOutside={() => setShowMenu(false)}
              animation="fadeIn"
              plain={size !== "small" ? true : undefined}
              background={"control"}
            >
              <Box
                background={"control"}
                width={size !== "small" ? "medium" : undefined}
              >
                <TrnrMenuButton label="Music" to="/music" />
                <TrnrMenuButton label="Audio Software" to="/audio-software" />
                <TrnrMenuButton label="Services" to="/services" />
                <TrnrMenuButton label="Contact" to="/contact" />
              </Box>
            </Layer>
          )}
        </ResponsiveContext.Consumer>
      )}
    </>
  );
}
