import * as React from "react";
import type { HeadFC } from "gatsby";
import { TrnrMain } from "../components/TrnrMain";
import { TrnrTitle } from "../components";

const IndexPage = () => {
  return (
    <TrnrMain>
      <TrnrTitle />
    </TrnrMain>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary Meta Tags */}
    <title>Ternär Music Technology</title>
    <link id="icon" rel="icon" href="/favicon.ico" />
    <meta name="title" content="Ternar Music Technology" />
    <meta
      name="description"
      content="Waveform Manufacturing and Machinery. Est. 2017 in Berlin."
    />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.ternar.tech" />
    <meta property="og:title" content="Ternär Music Technology" />
    <meta
      property="og:description"
      content="Waveform Manufacturing and Machinery. Est. 2017 in Berlin."
    />
    <meta
      property="og:image"
      content="https://prod.dwailwvehdvq4.amplifyapp.com/triplex-monitor.jpg"
    />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.ternar.tech" />
    <meta property="twitter:title" content="Ternär Music Technology" />
    <meta
      property="twitter:description"
      content="Waveform Manufacturing and Machinery. Est. 2017 in Berlin."
    />
    <meta
      property="twitter:image"
      content="https://prod.dwailwvehdvq4.amplifyapp.com/triplex-monitor.jpg"
    />

    {/* Fonts CSS */}
    <link rel="stylesheet" href="/fonts/fonts.css"></link>
  </>
);
