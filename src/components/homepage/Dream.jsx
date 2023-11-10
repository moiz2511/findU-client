import { Flex, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Dream = () => {
    const router = useRouter()
  return (
    <Flex
      padding="100px 120px"
      justifyContent="space-between"
      alignItems="center"
      background="#FFF"
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
        Search your dream schools / courses
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
          Explore 30,000+ courses, offered by 170+ Top UK universities and colleges
        </Text>
        
        <Flex
          padding="12px 30px"
          alignItems="center"
          gap="10px"
          borderRadius="12px"
          border="1px solid #277rpx3rpx"
          background="var(--Primary, #277DE3)"
          onClick={() => router.push('/signup')}
          cursor={'pointer'}
        >
          <Text
            color="#FDFDFD"
            className={plus_jakarta?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="normal"
          >
            Get Started
          </Text>
        </Flex>
      </Flex>
      
    </Flex>
  );
};
export default Dream;
