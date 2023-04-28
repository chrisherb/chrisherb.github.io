import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { TrnrMain } from "../../components/TrnrMain";
import {
  Box,
  Heading,
  NameValueList,
  NameValuePair,
  Page,
  PageContent,
  Text,
} from "grommet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TrnrLink } from "../../components/TrnrLink";
import { TrnrCartButton } from "../../components/TrnrCartButton";
import { TrnrPriceLabel } from "../../components/TrnrPriceLabel";
import "../../styles/reset.css";
import useIsClient from "../../components/TrnrHooks";

export default function Component(props: PageProps<Queries.TrnrProductQuery>) {
  const fileName = props.data.productsJson?.custom_permalink + ".png";
  const node: any = props.data.allFile.nodes.find(
    (element: any) => element.relativePath == fileName
  );
  const image = getImage(node);

  const demo =
    props.data.productsJson?.tags?.find((tag) => tag == "demo")?.length! > 0;

  const price = props.data.productsJson?.price!;

  const sounds = props.data.allFile.nodes
    .filter(
      (element: any) =>
        element.relativePath.endsWith(".mp3") &&
        element.relativePath.startsWith(
          props.data.productsJson?.custom_permalink
        )
    )
    .sort((a, b) => a.relativePath.localeCompare(b.relativePath));

  const youtubeId = props.data.allYoutubeUrlsJson.nodes.find(
    (yt: any) => yt.productId == props.data.productsJson?.id
  )?.youtubeId;

  const { isClient, key } = useIsClient();

  return (
    <TrnrMain>
      <Page kind="narrow" background="brand">
        <PageContent pad="none" background="background">
          <GatsbyImage
            image={image!}
            alt={props.data.productsJson?.name + "Picture"}
          />
          <Box pad={"large"}>
            <Box direction="row">
              <TrnrLink to="/" color="control">
                Home
              </TrnrLink>
              <Text margin={{ horizontal: "xsmall" }}>»</Text>
              <TrnrLink to="/audio-software" color="control">
                Audio Software
              </TrnrLink>
            </Box>
            <Heading level="1" margin="0">
              {props.data.productsJson?.name}
            </Heading>
            <Text>
              <div
                className="product-description"
                dangerouslySetInnerHTML={{
                  __html: props.data.productsJson?.description!,
                }}
              />
            </Text>

            {isClient && youtubeId && (
              <iframe
                width="560"
                height="315"
                src={"https://www.youtube-nocookie.com/embed/" + youtubeId}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                frameBorder={0}
              ></iframe>
            )}

            {sounds.length > 0 && (
              <NameValueList margin={{ top: "medium" }} layout="grid">
                {sounds.map((sound, index) => (
                  <NameValuePair
                    key={index}
                    name={sound.relativePath.split(".")[1]}
                  >
                    <audio controls src={sound.publicURL!}></audio>
                  </NameValuePair>
                ))}
              </NameValueList>
            )}

            <Box width="small" gap="small" margin={{ top: "medium" }}>
              <TrnrPriceLabel demo={demo} price={price} size="xxlarge" />
              <TrnrCartButton
                isNameYourPrice={price == 0 && !demo}
                price={price / 100}
                product={props.data.productsJson}
              />
            </Box>
          </Box>
        </PageContent>
      </Page>
    </TrnrMain>
  );
}

export const query = graphql`
  query TrnrProduct($id: String) {
    productsJson(id: { eq: $id }) {
      id
      name
      price
      tags
      description
      short_url
      custom_permalink
    }
    allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)|(mp3)/" } }) {
      nodes {
        publicURL
        relativePath
        childImageSharp {
          gatsbyImageData(width: 1005, placeholder: BLURRED, quality: 100)
        }
      }
    }
    allYoutubeUrlsJson {
      nodes {
        productId
        youtubeId
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Device</title>
);
