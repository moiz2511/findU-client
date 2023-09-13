import { Flex, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const FaqCard = ({description}) => {
  return (
    <Flex
      width="920px"
      padding="16px 24px"
      alignItems="flex-start"
      gap="12px"
      borderRadius="8px"
      border="1px solid var(--Hover-2, #54575E);"
      justifyContent={"space-between"}
    >
      <Text
        color="var(--Input-Text-In-Active, #787878)"
        className={plus_jakarta?.className}
        fontSize="16px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="26px"
      >
        {description}
      </Text>
      <Flex alignSelf={"center"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="9"
          viewBox="0 0 15 9"
          fill="none"
        >
          <path
            d="M7.63465 8.75503C7.92964 8.72685 8.2086 8.60873 8.4331 8.41717L14.4622 3.29468C14.7656 3.05369 14.9573 2.70091 14.9937 2.31724C15.03 1.93352 14.9078 1.55181 14.6549 1.25899C14.4021 0.966192 14.0403 0.787536 13.6523 0.76391C13.2642 0.740288 12.8831 0.873689 12.596 1.13373L7.5 5.46483L2.40404 1.13373C2.11686 0.873881 1.73576 0.740482 1.34766 0.764107C0.959748 0.787532 0.597867 0.966191 0.345115 1.25899C0.092178 1.55179 -0.0299839 1.93371 0.00626239 2.31744C0.0427108 2.70116 0.234365 3.0537 0.53776 3.29468L6.5669 8.41717C6.86189 8.66868 7.24723 8.79057 7.63451 8.75523L7.63465 8.75503Z"
            fill="#787878"
          />
        </svg>
      </Flex>
    </Flex>
  );
};
export default FaqCard;
