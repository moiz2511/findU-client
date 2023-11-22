import { Flex, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Assistant = () => {
  const router = useRouter()
  return (
    <Flex
      p={12}
      justifyContent="space-between"
      alignItems="center"
      background="#FFF"
      flexWrap={'wrap'}
      flexDir={{base: 'column', md: 'row'}}
    >
      <Flex flexDirection="column" alignItems="flex-start" gap="16px" flex={1}>
        <Text
          color="var(--Text, #131619)"
          textAlign="center"
          className={plus_jakarta?.className}
          fontSize="40px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="74px"
        >
          The AI Univeristy Course Research Assistant
        </Text>
        <Text
          color="var(--Input-Text-In-Active, #787878)"
          className={plus_jakarta?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="26px"
          letterSpacing="-0.18px"
        >
          FindU leverages state-of-the-art large language models to streamline
          and automate complex university course research.
        </Text>
        <Text
          color="var(--Input-Text-In-Active, #787878)"
          className={plus_jakarta?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="26px"
          letterSpacing="-0.18px"
        >
          By utilizing the latest AI capabilities, FindU can identify relevant
          courses without requiring perfect keyword matches. It summarizes
          course descriptions specific to your inquiries and extracts key
          details from official data sources.
        </Text>
        <Text
          color="var(--Input-Text-In-Active, #787878)"
          className={plus_jakarta?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="26px"
          letterSpacing="-0.18px"
        >
          While answering questions is FindU&apos;s main function, it supports
          multiple languages and provides source links along with its answers
          for further research.
        </Text>
        <Flex
          padding="12px 30px"
          alignItems="center"
          gap="10px"
          borderRadius="12px"
          border="1px solid #277rpx3rpx"
          background="var(--Primary, #277DE3)"
          cursor={'pointer'}
          onClick={() => router.push('/signup')}
        >
          <Text
            color="#FDFDFD"
            className={plus_jakarta?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            Sign Up
          </Text>
        </Flex>
      </Flex>
      <Flex flex={1}>
        <Image src="/Right Illustration.png" />
      </Flex>
    </Flex>
  );
};
export default Assistant;
