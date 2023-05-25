import { HeadFC } from "gatsby";
import { Heading, Page, PageContent, Paragraph, Text } from "grommet";
import React, { useEffect, useState } from "react";
import { TrnrMain } from "../components/TrnrMain";
import useIsClient from "../components/TrnrHooks";

export default function Component() {
  const [appName, setAppName] = useState("App");

  useEffect(() => {
    const url = new URL(window.location.href);
    const name: string = url.searchParams.get("name")!;
    setAppName(name);
  }, []);

  const { isClient, key } = useIsClient();

  return (
    <TrnrMain>
      <Page kind="narrow">
        <PageContent background="light-1" pad="large">
          <Heading>{isClient && appName} Privacy Policy</Heading>
          <Text>
            This privacy policy governs your use of the software
            application&nbsp;
            {isClient && appName} (“Application”) for mobile devices.
          </Text>
          <Heading level="2">
            What information does the Application obtain and how is it used?
          </Heading>
          <Text>
            The Application does not collect or transmit any personally
            identifiable information about you, such as your name, address,
            phone number or email address.
          </Text>
          <Paragraph>
            The Application does not use or collect any data related to your
            geographic location.
          </Paragraph>
          <Text>
            The Application does not contain any third-party tracking software
            or analytics tools.
          </Text>
          <Paragraph>
            The Application may request access to your device's microphone. This
            access is used solely for the purpose of providing the functionality
            of the Application and is not used for any other purpose.
          </Paragraph>
          <Heading level="2">
            Do third parties see and/or have access to information obtained by
            the Application?
          </Heading>
          <Text>
            No. The Application does not transmit any data to third parties.
          </Text>
          <Heading level="2">Changes</Heading>
          <Text>
            This Privacy Policy may be updated from time to time for any reason.
            We will notify you of any changes to our Privacy Policy by posting
            the new Privacy Policy here. You are advised to consult this Privacy
            Policy regularly for any changes.
          </Text>
          <Heading level="2">Your Consent</Heading>
          <Text>
            By using the Application, you are consenting to our processing of
            your information as set forth in this Privacy Policy now and as
            amended by us.
          </Text>
          <Heading level="2">Contact us</Heading>
          <Text>
            If you have any questions regarding privacy while using the
            Application, or have questions about our practices, please contact
            us via email at info (ät) ternar.tech
          </Text>
        </PageContent>
      </Page>
    </TrnrMain>
  );
}

export const Head: HeadFC = () => (
  <title>Ternär Music Technology | Privacy Policy</title>
);
