import { Flex, Text, Icon } from "@chakra-ui/react";

// import { FaRegEnvelope } from "react-icons/fa";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <Flex
      
      height="96px"
      flexShrink="0"
      background="#FFF"
      // alignItems={"flex-start"}
    >
      <Text
        color="var(--Input-Text-In-Active, #787878)"
        className={plus_jakarta?.className}
        fontSize="12px"
        fontStyle="normal"
        fontWeight="400"
        lineHeight="normal"
        ml={"120px"}
        pt={"40px"}
        pb={"40px"}
        mr={"279px"}
      >
        Copyright © 2023 Open Ai. All rights reserved.
      </Text>
      <Flex pt={"26px"} pb={"26px"} mr={"354px"}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="127"
          height="38"
          viewBox="0 0 127 38"
          fill="none"
        >
          <path
            d="M0 37.159V6.64001H21.6029C21.6029 9.81173 19.0303 12.3491 15.8938 12.3491H6.51963V18.763H15.5766C18.7483 18.763 21.2857 21.3356 21.2857 24.4721H6.51963V30.6393C6.48439 34.2692 3.59461 37.159 0 37.159Z"
            fill="#277DE3"
          />
          <path
            d="M58.3597 37.159C55.1175 37.159 52.5097 34.5511 52.5097 31.3089V23.8025C52.5097 21.0537 51.1353 19.6793 48.4217 19.6793C46.4129 19.6793 44.7214 20.5251 43.3822 22.2519V31.3441C43.3822 34.5511 40.7743 37.159 37.5674 37.159V15.0627H43.3822V17.9172C44.1927 16.9657 45.25 16.1552 46.6244 15.5208C47.9988 14.8512 49.4789 14.5341 51.1353 14.5341C53.5317 14.5341 55.329 15.1684 56.5272 16.4018C57.7606 17.6705 58.3597 19.3621 58.3597 21.5823V37.159Z"
            fill="#277DE3"
          />
          <path
            d="M92.1909 37.159C91.2394 37.159 90.4289 36.8066 89.7593 36.137C89.0897 35.4674 88.7373 34.6216 88.7373 33.7053C88.7373 32.7891 89.0897 31.9433 89.7593 31.2737C90.4289 30.6041 91.2394 30.2517 92.1909 30.2517C93.1777 30.2517 93.9882 30.6041 94.6578 31.2737C95.3274 31.9433 95.6798 32.7538 95.6798 33.7053C95.6798 34.6569 95.3274 35.4674 94.6578 36.137C93.9882 36.8066 93.1777 37.159 92.1909 37.159Z"
            fill="#277DE3"
          />
          <path
            d="M123.203 13.1949C124.049 12.772 125.036 12.5606 126.023 12.5606V24.9655C126.023 28.8773 124.86 31.9785 122.534 34.2692C120.208 36.5599 116.789 37.7228 112.243 37.7228C107.732 37.7228 104.314 36.5599 101.953 34.2692C99.6268 31.9785 98.4639 28.8773 98.4639 24.9655V0.754761C100.296 0.754761 101.918 1.49483 103.116 2.69303C104.314 3.89123 105.054 5.54757 105.054 7.34487V24.7893C105.054 26.9743 105.688 28.7363 106.922 30.0403C108.19 31.3442 109.953 31.9785 112.243 31.9785C114.534 31.9785 116.296 31.3442 117.529 30.0403C118.763 28.7363 119.397 27.0095 119.397 24.7893V19.2212C119.397 17.1067 120.384 15.2037 121.97 14.0055V10.0937C121.265 9.98797 120.666 9.67079 120.137 9.10693C119.468 8.43735 119.115 7.59156 119.115 6.67529C119.115 5.72377 119.432 4.91323 120.137 4.24364C120.807 3.57406 121.617 3.22165 122.569 3.22165C123.556 3.22165 124.366 3.57406 125.036 4.24364C125.705 4.91323 126.058 5.72377 126.058 6.67529C126.058 7.6268 125.741 8.43735 125.036 9.10693C124.507 9.63555 123.908 9.95273 123.203 10.0937V13.1949Z"
            fill="#277DE3"
          />
          <path
            d="M79.2578 6.56955V17.882C77.5662 15.6266 75.2755 14.4988 72.4562 14.4988C69.5665 14.4988 67.2405 15.5561 65.408 17.6353C63.5754 19.7145 62.6592 22.5338 62.6592 26.0932C62.6592 29.6878 63.5754 32.5424 65.408 34.6216C67.2405 36.7008 69.5665 37.7228 72.4562 37.7228C75.2051 37.7228 77.4605 36.5951 79.2578 34.3397V37.1942C82.5 37.1942 85.1079 34.5864 85.1079 31.3442V0.754743C81.8657 0.719502 79.2578 3.3626 79.2578 6.56955ZM74.2888 32.8243C73.2668 32.8243 72.2801 32.5776 71.4343 32.1547L68.0511 33.3882C67.4872 33.5996 66.8881 33.0357 67.0996 32.4366L68.3683 29.0887C67.9454 28.2077 67.7339 27.2562 67.7339 26.2342C67.7339 23.133 69.9189 20.5251 72.8087 19.8203C72.8791 19.785 72.9496 19.785 73.0201 19.785C73.1258 19.7498 73.2316 19.7498 73.3373 19.7145C73.6544 19.6441 74.0069 19.6441 74.324 19.6441C77.9539 19.6441 80.9142 22.6043 80.9142 26.2342C80.8437 29.8993 77.9186 32.8243 74.2888 32.8243Z"
            fill="#277DE3"
          />
          <path
            d="M77.0734 27.0448C77.56 27.0448 77.9544 26.6503 77.9544 26.1637C77.9544 25.6772 77.56 25.2827 77.0734 25.2827C76.5868 25.2827 76.1924 25.6772 76.1924 26.1637C76.1924 26.6503 76.5868 27.0448 77.0734 27.0448Z"
            fill="#277DE3"
          />
          <path
            d="M74.1135 27.0448C74.6 27.0448 74.9945 26.6503 74.9945 26.1637C74.9945 25.6772 74.6 25.2827 74.1135 25.2827C73.6269 25.2827 73.2324 25.6772 73.2324 26.1637C73.2324 26.6503 73.6269 27.0448 74.1135 27.0448Z"
            fill="#277DE3"
          />
          <path
            d="M71.1525 27.0448C71.6391 27.0448 72.0335 26.6503 72.0335 26.1637C72.0335 25.6772 71.6391 25.2827 71.1525 25.2827C70.6659 25.2827 70.2715 25.6772 70.2715 26.1637C70.2715 26.6503 70.6659 27.0448 71.1525 27.0448Z"
            fill="#277DE3"
          />
          <path
            d="M29.4972 15.0626H31.7879V31.3441C31.7879 34.551 29.18 37.1589 25.973 37.1589V15.0626H28.2637V12.631C27.5589 12.5252 26.9598 12.2081 26.4312 11.6442C25.7616 10.9746 25.4092 10.1288 25.4092 9.21256C25.4092 8.26105 25.7616 7.4505 26.4312 6.78092C27.1008 6.11133 27.9113 5.75891 28.8628 5.75891C29.8496 5.75891 30.6954 6.11133 31.365 6.78092C31.9993 7.41526 32.3517 8.26104 32.3517 9.14207C32.3517 10.0936 32.0345 10.9394 31.3297 11.609C30.8011 12.1376 30.202 12.4548 29.4972 12.5957V15.0626Z"
            fill="#277DE3"
          />
        </svg>
      </Flex>

      <Flex alignItems="flex-start" gap="16px">
        {/* <Icon
          aria-label="Play"
          icon={<FaRegEnvelope />}
          color={theme.colors.text.primary}
          fontSize="1.5rem"
          bg="transparent"
          mr={2}
        /> */}
      </Flex>
    </Flex>
  );
};
export default Footer;
