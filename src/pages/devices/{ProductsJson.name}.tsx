import React from "react";
import { graphql, HeadFC, PageProps } from "gatsby";
import { TrnrMain } from "../../components/TrnrMain";
import { Box, Button, Heading, Page, PageContent, Text } from "grommet";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { TrnrLink } from "../../components/TrnrLink";
import useIsClient from "../../components/TrnrHooks";
import { Shop } from "grommet-icons";

export default function Component(props: PageProps<Queries.TrnrProductQuery>) {
  const { isClient, key } = useIsClient();

  const fileName = props.data.productsJson?.custom_permalink + ".png";
  const node: any = props.data.allFile.nodes.find(
    (element: any) => element.relativePath == fileName
  );
  const image = getImage(node);

  const price = props.data.productsJson?.price!;
  const priceString = price != 0 ? (price / 100).toFixed(2) + " €" : "FREE";

  return (
    <TrnrMain>
      <Page kind="narrow" background="brand">
        <PageContent pad="none" background="background">
          <GatsbyImage
            image={image!}
            alt={props.data.productsJson?.name + "Picture"}
          />
          <Box pad="large">
            <Box direction="row">
              <TrnrLink to="/" color="control">
                Home
              </TrnrLink>
              <Text margin={{ horizontal: "xsmall" }}>»</Text>
              <TrnrLink to="/devices" color="control">
                Devices
              </TrnrLink>
            </Box>
            <Heading level="1" margin="0">
              {props.data.productsJson?.name}
            </Heading>
            <Text>
              {isClient && (
                <div
                  key={key}
                  dangerouslySetInnerHTML={{
                    __html: props.data.productsJson?.description!,
                  }}
                />
              )}
            </Text>
            <Button
              margin="large"
              label={"Get it for " + priceString}
              alignSelf="center"
              target="blank"
              icon={<Shop />}
              href={
                "https://store.ternar.tech/l/" +
                props.data.productsJson?.custom_permalink!
              }
            />
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
      description
      short_url
      custom_permalink
    }
    allFile(filter: { extension: { regex: "/(jpg)|(jpeg)|(png)/" } }) {
      nodes {
        relativePath
        childImageSharp {
          gatsbyImageData(width: 1005, placeholder: BLURRED, quality: 100)
        }
      }
    }
  }
`;

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Device</title>
);
