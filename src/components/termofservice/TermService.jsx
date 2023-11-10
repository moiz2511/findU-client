import TosCard from "@/Cards/TosCard";
import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const TermService = () => {
  const termService = `This document constitutes the Terms of Service ("Terms") governing the use of the www.findu.io website ("Service") provided by Findu ("us", "we", or "our"). Prior to
  utilizing the Service, please thoroughly review these Terms.`

  return (
    <>
      <Flex
        p={5}
        flexDirection="column"
        alignItems="flex-start"
        gap="8px"
        alignSelf="stretch"
      >
        <Flex
          flexDirection="column"
          alignItems="center"
          gap="32px"
          
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
              Terms of Service
            </Text>
            <Text
              color="var(--Black, #636262)"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="26px"
            >
              Effective Date: August 15, 2023
            </Text>
          </Flex>
          <Text
            color="#454545"
            className={plus_jakarta?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="26px"
            // w={"1200px"}
          >
            {termService}
          </Text>
        </Flex>
      </Flex>

      <Flex
      p={5}
        // padding="40px 120px"
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
          <Flex direction={"column"} gap={"8px"}>
            <TosCard
              title={"Acceptance of Terms"}
              description={
                "By accessing or utilizing the Service, you affirm your agreement to abide by these Terms. Your access to and use of the Service are contingent upon your acceptance of and adherence to these Terms. These Terms are applicable to all users, visitors, and others who access or use the Service."
              }
            />
            <TosCard
              title={"Modification of Terms"}
              description={
                " Findu retains the right to modify, alter, or replace these Terms at its exclusive discretion. In case of material revisions, we will make reasonable efforts to provide a minimum of 30 days' notice before new terms take effect. The determination of what constitutes a material change shall rest with our sole discretion. Following the implementation of any modifications, revised Terms will be posted, and the Last updated date will be adjusted accordingly. Continued access or use of the Service after the revised terms come into force indicates your consent to adhere to these modified Terms. Should you disagree with the updated terms, kindly refrain from using the Service."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Description of Service"}
              description={
                "Findu provides a text generation service accessible through the website https://www.findu.io and related internet domains."
              }
            />
            <TosCard
              description={
                "User Eligibility and Responsibility To utilize the Service, you must be at least 13 years old. If you are under 18, you are required to obtain parental or legal guardian permission prior to utilizing the Service. It is strictly prohibited to share, transfer, or sell your account. You bear sole responsibility for all activities carried out on your account."
              }
            />
            <TosCard
              description={
                "You are prohibited from using the Service in any manner that may result in damage to the Service, or disrupt its availability or accessibility. Furthermore, you shall not engage in unlawful, fraudulent, or harmful activities while using the Service. Activities such as hate speech, harassment, violence, political manipulation, spam, or malware dissemination are expressly prohibited."
              }
            />
            <TosCard
              description={
                "Systematic or automated data collection endeavors (including scraping, data mining, data extraction, or data harvesting) pertaining to the Service are forbidden. This includes utilizing the Service as input for other services, websites, or databases. Republishing content generated by the Service necessitates proper citation of both the Service and the contextual information associated with the content. Falsely representing the content's source or creation process is strictly forbidden."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"User-Generated Content"}
              description={
                "The Service may enable you to upload, submit, store, transmit, or receive content. You retain ownership of any intellectual property rights inherent in such content. By uploading, submitting, storing, transmitting, or receiving content via the Service, you grant us (and our affiliates) a global license to use, host, store, modify, create derivative works, communicate, publish, publicly perform, publicly display, and distribute said content. This license is limited to operating, promoting, and enhancing the Service, as well as developing new ones. You must ensure that you possess the necessary rights to grant us this license for any submitted content."
              }
            />
            <TosCard
              description={
                "You acknowledge that all content, whether publicly posted or privately transmitted, is the sole responsibility of the originating party. Consequently, you are entirely accountable for all content you upload, post, email, transmit, or otherwise provide through the Service. Findu does not exercise control over the content posted via the Service, and hence does not guarantee the accuracy, integrity, or quality of such content. By utilizing the Service, you acknowledge the potential exposure to offensive or objectionable content. Findu bears no liability for any content, including errors or omissions, or any ensuing loss or damage arising from the utilization of any content posted or made available through the Service."
              }
            />
            <TosCard
              description={
                "You are obligated to assess and assume all risks linked to using any content, including reliance on its accuracy, completeness, or usefulness. You recognize that you may not rely on any content produced by the Service or submitted to the Service. Furthermore, you acknowledge that Findu may retain and disclose content as required by law."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Intellectual Property Rights"}
              description={
                "Findu duly respects the intellectual property rights of all individuals and entities. As a user, you are granted access solely for your personal, non-commercial use. Any attempts to reverse engineer, copy, reproduce, or misappropriate intellectual property from the Service will be met with strict repercussions, including potential legal action."
              }
            />
            <TosCard
              description={
                "Findu treats copyright infringement allegations seriously and promptly addresses notices that comply with applicable laws and are properly submitted to us. If you believe your work has been utilized in a manner constituting copyright infringement, please contact us at support@findu.io."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Limitation of Liability"}
              description={
                "Under no circumstances shall Findu, its directors, employees, partners, agents, suppliers, or affiliates be liable for indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses. This pertains to (i) access to or utilization of the Service; (ii) conduct or content of third parties on the Service; (iii) content acquired from the Service; and (iv) unauthorized access, use, or alteration of your transmissions or content. This applies whether based on warranty, contract, tort (including negligence), or any other legal theory. Even if we were informed of the possibility of such damage, and even if a remedy specified herein is deemed to have failed in its essential purpose."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Disclaimer"}
              description={
                "Your utilization of the Service is exclusively at your own risk. The Service is rendered on an AS IS and AS AVAILABLE basis. No warranties, whether express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance, are provided. Findu, its subsidiaries, affiliates, and licensors do not warrant that (a) the Service will operate uninterrupted, securely, or be available at any specific time or location; (b) any errors or defects will be rectified; (c) the Service is devoid of viruses or other detrimental components; (d) outcomes derived from using the Service will fulfill your requirements."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Indemnification"}
              description={
                "You undertake to defend, indemnify, and hold Findu, its licensee, licensors, employees, contractors, agents, officers, and directors harmless from any claims, damages, obligations, losses, liabilities, costs, or debts, including attorney's fees, arising from (a) your access and use of the Service, by you or any individual utilizing your account and password; (b) a breach of these Terms; or (c) content posted on the Service."
              }
            />
          </Flex>
          <Flex flexDir={"column"}>
            <TosCard
              title={"Contact Information"}
              description={
                "Should you have inquiries concerning these Terms, kindly reach out to us at support@findu.io."
              }
            />
            <TosCard
              description={
                "These Terms of Service are effective as of the date stated above."
              }
            />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};
export default TermService;
