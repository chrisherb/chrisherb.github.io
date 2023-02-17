import { graphql, HeadFC, useStaticQuery } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import { Box, Heading } from "grommet";
import React from "react";
import { TrnrCard } from "../components/TrnrCard";
import { TrnrLink } from "../components/TrnrLink";
import { TrnrMain } from "../components/TrnrMain";

export default function Component() {
  const data: any = useStaticQuery(graphql`
    query TrnrMusic {
      allAlbumsJson {
        nodes {
          id
          imageUrl
          title
          artist
          url
          albumsPath: gatsbyPath(filePath: "/music/{AlbumsJson.title}")
        }
      }
      allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 250, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  return (
    <TrnrMain>
      <Box
        id="music"
        pad={{
          left: "xlarge",
          top: "medium",
          right: "xlarge",
          bottom: "xlarge",
        }}
        background="brand"
      >
        <Box
          pad={{ top: "medium", bottom: "medium" }}
          margin={{ bottom: "large" }}
          border="bottom"
        >
          <Box direction="row">
            <TrnrLink to="/" color="control">
              Home
            </TrnrLink>
          </Box>
          <Heading margin="0">Music</Heading>
        </Box>
        <Box wrap direction="row">
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
      </Box>
    </TrnrMain>
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Music</title>
);
