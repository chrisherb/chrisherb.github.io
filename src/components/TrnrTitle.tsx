import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage, getImage, StaticImage } from "gatsby-plugin-image";
import {
  Box,
  ResponsiveContext,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "grommet";
import React, { useContext } from "react";
import { TrnrCard } from "./TrnrCard";
import { TrnrLink } from "./TrnrLink";

export function TrnrTitle() {
  const data: any = useStaticQuery(graphql`
    query TrnrLatest {
      allAlbumsJson(limit: 3) {
        nodes {
          id
          imageUrl
          title
          artist
          url
          albumsPath: gatsbyPath(filePath: "/music/{AlbumsJson.title}")
        }
      }
      allProductsJson(limit: 3) {
        nodes {
          id
          name
          description
          custom_permalink
          productsPath: gatsbyPath(
            filePath: "/audio-software/{ProductsJson.custom_permalink}"
          )
        }
      }
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(
              quality: 100
              width: 200
              height: 200
              placeholder: BLURRED
              transformOptions: { fit: COVER, cropFocus: CENTER }
            )
          }
        }
      }
    }
  `);

  const screenSize = useContext(ResponsiveContext);
  let box1 = "full";
  let box2 = "full";

  if (screenSize == "large") {
    box1 = "1/3";
    box2 = "2/3";
  } else if (screenSize == "medium") {
    box1 = box2 = "1/2";
  }

  if (screenSize != "small") {
    box1 = "1/2";
    box2 = "1/2";
  }

  return (
    <Box fill direction="row-responsive">
      <Box pad="xlarge" align="center" justify="center" basis={box1}>
        <StaticImage
          width={450}
          objectFit="scale-down"
          quality={100}
          src="../images/static/ternar-music-technology.svg"
          alt="Ternär Music Technology Logo"
        />
        <Box>
          <h1
            style={{
              fontFamily: "FORCED SQUARE",
              fontWeight: "normal",
              fontSize: "2.16em",
              marginTop: "30px",
              marginBottom: 0,
              lineHeight: "40px",
            }}
          >
            <span style={{ textTransform: "uppercase" }}>Ternär</span>{" "}
            <span style={{ textTransform: "lowercase" }}>Music Technology</span>
          </h1>
          <h2
            style={{
              fontFamily: "FORCED SQUARE",
              fontWeight: "normal",
              fontSize: "1.45em",
              textTransform: "lowercase",
              lineHeight: "30px",
              marginTop: "20px",
              marginBottom: 0,
            }}
          >
            Waveform Manufacturing and Machinery <br /> Established 2017 in
            Berlin
          </h2>
        </Box>
      </Box>
      <Box basis={box2} background={"brand"} align="center">
        <Box margin={"medium"}>
          <Heading level={3} size="large" margin={{ bottom: "small" }}>
            Latest Music
          </Heading>
          <Box direction="row">
            {data.allAlbumsJson.nodes.map((album: any) => {
              const fileName = album.imageUrl.substring(
                album.imageUrl.lastIndexOf("/") + 1
              );
              const node = data.allFile.nodes.find(
                (element: any) => element.relativePath == fileName
              );
              const image = getImage(node);
              return (
                <TrnrCard
                  key={album.id}
                  link={album.albumsPath}
                  image={image!}
                  title={album.artist + " - " + album.title}
                />
              );
            })}
          </Box>
          <TrnrLink to="/music" color="control">
            More
          </TrnrLink>

          <Heading level={3} size="large" margin={{ bottom: "small" }}>
            Latest Devices
          </Heading>
          <Box direction="row">
            {data.allProductsJson.nodes.map((product: any) => {
              const fileName = product.custom_permalink + ".png";
              const node = data.allFile.nodes.find(
                (element: any) => element.relativePath == fileName
              );
              const image = getImage(node);
              return (
                <TrnrCard
                  key={product.id}
                  link={product.productsPath}
                  image={image!}
                  title={product.name!}
                  text={product.description!.replace(/<\/?[^>]+(>|$)/g, "")}
                  maxLines={5}
                />
              );
            })}
          </Box>
          <TrnrLink to="/audio-software" color="control">
            More
          </TrnrLink>
        </Box>
      </Box>
    </Box>
  );
}
