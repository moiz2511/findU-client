import FaqCard from "@/Cards/FaqCard";
import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Faq = () => {
  return (
    <Flex
      padding="100px 260px"
      flexDirection="column"
      alignItems="center"
      gap="48px"
      background="#FFF"
    >
      <Flex flexDirection="column" alignItems="center" gap="15px">
        <Text
          color="var(--Text, #131619)"
          textAlign="center"
          className={plus_jakarta?.className}
          fontSize="40px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="74rpx"
        >
          Frequently Asked Questions
        </Text>
        <Text
          color="var(--Input-Text-In-Active, #787878)"
          textAlign="center"
          className={plus_jakarta?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="26px"
          letterSpacing="-0.18px"
          w={"597px"}
        >
          Let our AI assist with most time consuming to write blog articles,
          product descriptions and more.
        </Text>
      </Flex>
      <Flex flexDirection="column" alignItems="flex-start" gap="20px">
        <FaqCard description="What is Findu?" />
        <FaqCard description="What information does Findu gather about me?" />
        <FaqCard description="Does Findu retain my search history and personal data?" />
        <FaqCard description="How long does Perplexity keep my search history, AI profile, and personal data?" />
        <FaqCard description="Is my personal information shared with external parties?" />
        <FaqCard description="Do my search queries and feedback contribute to AI learning?" />
        <FaqCard description="How can I opt out of sharing my data for AI enhancement?" />
      </Flex>
    </Flex>
  );
};
export default Faq;
