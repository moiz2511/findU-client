import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
const poppin = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const TosCard = ({ title, description }) => {
  return (
    <Flex flexDir={"column"} gap={"17px"}>
      <Text
        color="#1E1E1E"
        className={plus_jakarta?.className}
        fontSize="24px"
        fontStyle="normal"
        fontWeight="600"
        lineHeight="26px"
      >
        {title}
      </Text>
      <Text
        color="var(--Text-color, #1E1E1E)"
        className={poppin?.className}
        fontSize="16px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="26px"
        // w={"1200px"}
      >
        {description}
      </Text>
    </Flex>
  );
};
export default TosCard;
