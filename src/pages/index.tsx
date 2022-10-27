import * as React from "react";
import type { HeadFC } from "gatsby";
import {
  TrnrContact,
  TrnrDevices,
  TrnrPlugins,
  TrnrServices,
  TrnrTitle,
} from "../components";
import { TrnrMain } from "../components/TrnrMain";

const IndexPage = () => {
  return (
    <TrnrMain>
      {/* TITLE */}
      <TrnrTitle />

      {/* PLUGINS */}
      <TrnrPlugins />

      {/* DEVICES */}
      <TrnrDevices />

      {/* SERVICES */}
      <TrnrServices />

      {/* CONTACT */}
      <TrnrContact />
    </TrnrMain>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    {/* Primary Meta Tags */}
    <title>Ternär Music Technology</title>
    <link id="icon" rel="icon" href="/favicon.ico" />
    <meta name="title" content="Ternär Music Technology" />
    <meta
      name="description"
      content="Software Instruments and Effects straight from Europe's heart of electronic music, Berlin."
    />

    {/* Open Graph / Facebook */}
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://www.ternär.tech" />
    <meta property="og:title" content="Ternär Music Technology" />
    <meta
      property="og:description"
      content="Software Instruments and Effects straight from Europe's heart of electronic music, Berlin."
    />
    <meta
      property="og:image"
      content="https://prod.dwailwvehdvq4.amplifyapp.com/triplex-monitor.jpg"
    />

    {/* Twitter */}
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://www.ternär.tech" />
    <meta property="twitter:title" content="Ternär Music Technology" />
    <meta
      property="twitter:description"
      content="Software Instruments and Effects straight from Europe's heart of electronic music, Berlin."
    />
    <meta
      property="twitter:image"
      content="https://prod.dwailwvehdvq4.amplifyapp.com/triplex-monitor.jpg"
    />
  </>
);
