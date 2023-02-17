import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { TrnrMain } from "../../components/TrnrMain";
import { Box, Heading, Page, PageContent, Text } from "grommet";
import { TrnrLink } from "../../components/TrnrLink";
import useIsClient from "../../components/TrnrHooks";

export default function Component(props: PageProps<Queries.TrnrAlbumQuery>) {
  const { isClient, key } = useIsClient();

  const playerStyle = {
    border: 0,
    width: "330px",
    height: "590px",
  };

  if (!isClient) return null;

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
          <Box gap="small">
            <Text>{props.data.albumsJson?.raw?.current?.about}</Text>
            <Text>
              Released{" "}
              {new Date(
                props.data.albumsJson?.raw?.current?.release_date!
              ).toLocaleDateString("de-DE")}
            </Text>
            <Text style={{ whiteSpace: "pre-line" }}>
              <i>{props.data.albumsJson?.raw?.current?.credits}</i>
            </Text>
          </Box>
          <Box align="center" margin={{ vertical: "large" }}>
            <Box border="all">
              {isClient && (
                <iframe
                  key={key}
                  style={playerStyle}
                  src={`https://bandcamp.com/EmbeddedPlayer/album=${props.data.albumsJson?.raw?.current?.id}/size=large/bgcol=ffffff/linkcol=333333/transparent=true/`}
                  seamless
                >
                  <a href={props.data.albumsJson?.url!}>
                    {props.data.albumsJson?.title} by{" "}
                    {props.data.albumsJson?.artist}
                  </a>
                </iframe>
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
      artist
      title
      url
      raw {
        current {
          about
          credits
          release_date
          id
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Album</title>
);
