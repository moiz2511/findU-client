import TosCard from "@/Cards/TosCard";
import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Policy = () => {
  return (
    <>
      <Flex
        padding="24px 120px"
        flexDirection="column"
        alignItems="flex-start"
        gap="8px"
        alignSelf="stretch"
      >
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="32px"
          alignSelf="stretch"
        >
          <Flex flexDir={"column"} gap={"17px"}>
            <Text
              color="var(--Text-color, #1E1E1E)"
              className={plus_jakarta?.className}
              fontSize="32px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="28px"
              letterSpacing="0.64px"
            >
              Privacy Policy
            </Text>
            <Text
              color="var(--Black, #636262)"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="26px"
            >
              Effective as of: September 1st, 2021
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        padding="10px 120px"
        flexDirection="column"
        alignItems="flex-start"
        gap="8px"
        alignSelf="stretch"
      >
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="40px"
          alignSelf="stretch"
        >
          <Flex direction={"column"}>
            <TosCard
              title={"Findu Privacy Policy"}
              description={
                "This privacy policy (Policy) outlines how www.findu.io ('Findu.io,' 'we,' 'us,' or 'our') gathers, utilizes, shares, and safeguards information concerning you when you engage with our website, products, and services (collectively referred to as the 'Services')."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Our Services"}
              description={
                "Findu offers a text generation service, accessible via https://www.findu.io and related internet domains. "
              }
            />
            <TosCard
              description={
                "Information Collected by Findu.io Upon visiting our website, we may automatically gather specific information from your device. This data might encompass your IP address, device type, distinctive device IDs, browser type, broad geographic location (e.g., country or city-level location), and other technical details. Additionally, we may amass information regarding your device's interactions with our website, including accessed pages and clicked links. "
              }
            />
            <TosCard
              description={
                "The collection of this data aids us in comprehending our website visitors, their origins, and their areas of interest. We use this information for internal analytical purposes and to enhance the quality and relevance of our service. "
              }
            />
            <TosCard
              description={
                "Should you establish an account on our website, certain information such as your name, email address, and password will be collected. This information is employed to grant you access to your account and to provide customer support."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Information Not Collected by Findu.io"}
              description={
                "We abstain from knowingly collecting sensitive information from you, such as data pertaining to your race, ethnic origin, political views, religion, or health. "
              }
            />
            <TosCard
              description={
                "Sharing of Information We do not sell, exchange, or otherwise share your personal information with external parties, barring instances outlined in this Policy. We may share your personal information with the following categories of third parties. "
              }
            />
            <TosCard
              description={
                "Service providers: We may share personal information with service providers who perform specific tasks on our behalf, such as sending emails, processing payments, or offering customer support. "
              }
            />
            <TosCard
              description={
                "Analytics service providers: We may share anonymous usage data with analytics service providers that aid us in enhancing and optimizing our website. An example is Google Analytics: https://policies.google.com/technologies/partner-sites. "
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Third Party Services"}
              description={
                "We may employ third-party services like Application Programming Interfaces (APIs) to uphold and enhance our services. For instance, queries might be transmitted to the OpenAI API to fulfill requests. Unless necessary for continuous service provision (e.g., sending emails, processing payments, or delivering customer support), personally identifiable information (PII) is not transmitted. "
              }
            />
            <TosCard
              description={
                "Site monitoring tools like Cloudflare, Sentry, and Umami might be used to gather anonymous usage information. These tools may capture details like your IP address, device type, browser type, operating system, geographic location, and other technical data. We utilize this information to enhance the quality and relevance of our website for our visitors."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Security"}
              description={
                "We implement reasonable measures to safeguard the personal information we collect from you. Data is securely stored on the Google Cloud Platform (GCP). Nevertheless, no security measure is flawless, and the security of your personal information cannot be guaranteed."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Data Retention"}
              description={
                "We retain your personal information for the duration of your active account or as required to offer our Services. If you decide to delete your account, we will erase your personal data from our servers within 30 days. To request deletion, please contact us at support@findu.io."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Changes to Our Privacy Policy"}
              description={
                "We may revise this Policy periodically. If adjustments are made, the updated Policy will be posted on our website, along with the 'Last updated' date indicated above. We encourage you to review the Policy whenever you access our Services or interact with us to stay informed about our information practices and the options available to you."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Contact Us"}
              description={
                "For inquiries about this Policy, kindly reach out to support@findu.io."
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default Policy;
