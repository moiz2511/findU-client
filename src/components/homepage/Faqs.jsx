import FaqCard from "@/Cards/FaqCard";
import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Faqs = () => {
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
          lineHeight="74px"
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
        >
          Let our AI assist with most time consuming to write blog articles,
          product descriptions and more.
        </Text>
      </Flex>

      <Flex flexDirection="column" alignItems="flex-start" gap="20px">
        <FaqCard description="Adipis cing nisi sem gravida enim eu adipi?" />
        <FaqCard description="Adipis cing nisi sem gravida enim eu adipi?" />
        <FaqCard description="Adipis cing nisi sem gravida enim eu adipi?" />
      </Flex>
    </Flex>
  );
};
export default Faqs;
