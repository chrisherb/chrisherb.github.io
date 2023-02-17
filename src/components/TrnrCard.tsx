import { Link } from "gatsby";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Paragraph,
  Stack,
} from "grommet";
import React, { useState } from "react";

interface TrnrCardProps {
  link: string;
  image: IGatsbyImageData;
  title?: string;
  text?: string;
  maxLines?: number;
}

export function TrnrCard(props: TrnrCardProps) {
  const [mouseOver, setMouseOver] = useState(false);

  const onMouseEnter = () => {
    setMouseOver(false);
  };

  const onMouseLeave = () => {
    setMouseOver(true);
  };

  return (
    <Card
      onMouseEnter={onMouseLeave}
      onMouseLeave={onMouseEnter}
      margin={{ right: "small", bottom: "small" }}
      round="0"
      elevation=""
    >
      <Link to={props.link}>
        <Stack>
          <CardBody>
            <GatsbyImage image={props.image} alt={props.title + "Picture"} />
          </CardBody>
          {mouseOver && (
            <CardHeader
              height={"medium"}
              pad={"small"}
              background="#000000A0"
              align="top"
              direction="column"
            >
              <Box>
                <Heading margin="none" level="5" size="medium">
                  {props.title}
                </Heading>
                <Paragraph maxLines={props.maxLines} size="small">
                  {props.text}
                </Paragraph>
              </Box>
            </CardHeader>
          )}
        </Stack>
      </Link>
    </Card>
  );
}
