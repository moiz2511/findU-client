import FaqCard from "@/Cards/FaqCard";
import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Faqs = () => {
  return (
    <Flex
      p={{ base: 4, sm: 12 }}
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
          How accurate is Findu?
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
          Findu uses language models to extract data from and summarize
          information from information listed by
          <br /> official sources. As a new technology, language models
          sometimes make up inaccurate answers
          <br /> (aka hallucination).
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
          We reduce hallucination and increase accuracy by
        </Text>
      </Flex>

      <Flex flexDirection="column" alignItems="flex-start" gap="20px">
        <FaqCard
          description="Based on official sources"
          answer="Findu only show you information extracted from official websites"
        />
        <FaqCard
          description="Easy to double-check answers"
          answer="We make it easy for you to double-check our answers by always including our source link along with the
          answers."
        />
      </Flex>

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
        <FaqCard
          description="What type of info can Findu search over?"
          answer="Findu covers 170+ top UK universities and colleges and 30,000 undergraduate and postgraduate
programmes."
        />
        <FaqCard
          description="What is Findu not a good fit for?"
          answer="Findu is not built to answer questions not related to UK universities and their academic offerings at the
moment, such as “ tell me the typical weather in Scotland during the winter."
        />
        <FaqCard
          description="How can you get in touch with Findu?"
          answer="Please email us at support@findu.io if you need any support, or having any feedback or comments!"
        />
      </Flex>
    </Flex>
  );
};
export default Faqs;
