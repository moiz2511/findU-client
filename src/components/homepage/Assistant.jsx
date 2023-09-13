import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Assistant = () => {
  return (
    <Flex
      width="1439px"
      padding="100px 120px"
      justifyContent="space-between"
      alignItems="center"
      background="#FFF"
    >
      <Flex flexDirection="column" alignItems="flex-start" gap="16px">
        <Text
          color="var(--Text, #131619)"
          textAlign="center"
          className={plus_jakarta?.className}
          fontSize="40px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="74px"
        >
          The AI Research Assistant
        </Text>
        <Text
          color="var(--Input-Text-In-Active, #787878)"
          className={plus_jakarta?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="400"
          lineHeight="26px"
          letterSpacing="-0.18px"
          width="597px"
        >
          Lorem ipsum dolor sit amet consectetur. Eu nibh urna tincidunt euismod
          turpis senectus. Etiam imperdiet dolor sit morbi. Tristique ut
          scelerisque sit egestas. Sit sed varius a mauris ac egestas nisl
          vulputate. Sollicitudin mauris aliquam aliquam id consectetur. Sem
          amet imperdiet in vel facilisi quis nunc aliquet sed.{" "}
        </Text>
        <Flex
          padding="12px 30px"
          alignItems="center"
          gap="10px"
          borderRadius="12px"
          border="1px solid #277rpx3rpx"
          background="var(--Primary, #277DE3)"
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
    </Flex>
  );
};
export default Assistant;
