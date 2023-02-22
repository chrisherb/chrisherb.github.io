import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { TrnrMain } from "../../components/TrnrMain";
import { Box, Button, Heading, Page, PageContent, Text } from "grommet";
import { TrnrLink } from "../../components/TrnrLink";
import useIsClient from "../../components/TrnrHooks";
import { Spotify } from "grommet-icons";

export default function Component(props: PageProps<Queries.TrnrAlbumQuery>) {
  const { isClient, key } = useIsClient();

  const playerStyle = {
    border: 0,
    width: "330px",
    height: "590px",
  };

  if (!isClient) return null;

  const date = new Date(props.data.albumsJson?.raw?.current?.release_date!);
  const formatter = new Intl.DateTimeFormat("en", { month: "long" });
  const dateString = formatter.format(date) + " " + date.getFullYear();

  const catalogNumber =
    props.data.albumsJson?.title?.match(/(?<=\[).+?(?=\])/g)?.[0];
  const spotifyUrl = props.data.allStreamingUrlsJson.nodes.find(
    (node) => node.catalogNumber == catalogNumber
  )?.spotify;

  return (
    <TrnrMain>
      <Page kind="narrow" background="brand">
        <PageContent pad="large" background="background">
          <Box direction="row">
            <TrnrLink to="/" color="control">
              Home
            </TrnrLink>
            <Text margin={{ horizontal: "xsmall" }}>»</Text>
            <TrnrLink to="/music" color="control">
              Music
            </TrnrLink>
          </Box>
          <Heading level="1" margin="0">
            {props.data.albumsJson?.artist}
          </Heading>
          <Heading
            level="2"
            margin={{ top: "0", right: "0", bottom: "medium", left: "0" }}
          >
            {props.data.albumsJson?.title}
          </Heading>
          <Box direction="row-responsive" gap="medium">
            <Box border width="332px">
              {isClient && (
                <iframe
                  key={key}
                  style={playerStyle}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${props.data.albumsJson?.raw?.current?.id}/size=large/bgcol=000000/linkcol=6fffb0/transparent=true/`}
                  seamless
                >
                  <a href={props.data.albumsJson?.url!}>
                    {props.data.albumsJson?.title} by{" "}
                    {props.data.albumsJson?.artist}
                  </a>
                </iframe>
              )}
            </Box>
            <Box width="300px" gap="medium">
              <Text>Released {dateString}</Text>
              <Text style={{ whiteSpace: "pre-line" }}>
                <i>{props.data.albumsJson?.raw?.current?.credits}</i>
              </Text>
              {spotifyUrl && (
                <Button
                  icon={<Spotify color="control" size="large" />}
                  href={spotifyUrl!}
                  target="blank"
                />
              )}
            </Box>
          </Box>
        </PageContent>
      </Page>
    </TrnrMain>
  );
}

export const query = graphql`
  query TrnrAlbum($id: String) {
    albumsJson(id: { eq: $id }) {
      id
      imageUrl
      artist
      title
      url
      raw {
        current {
          credits
          release_date
          id
        }
      }
    }
    allStreamingUrlsJson {
      nodes {
        catalogNumber
        spotify
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Album</title>
);
