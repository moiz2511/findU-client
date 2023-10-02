import { Flex, Text, Image, Input, Box, Button } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import { instance } from "../../../instance";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const UserQuery = () => {
  const [startNew, setStartNew] = useState(false);
  const [convName, setConvName] = useState("");

  const handleNewConversation = async () => {
    const token = localStorage.getItem("token");

    // Check if the token exists
    if (token) {
      // Attach the token to the Authorization header for all requests
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
    }

    const res = instance?.post("/StartConversationForNew/", { name: convName });
  };

  return (
    <Flex width="1440px" height="100vh" background="#002045">
      <Flex flexDir={"column"} justifyContent={"flex-start"}>
        <Flex
          padding="16px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          borderBottom="1px solid #415D8A"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="38"
            viewBox="0 0 128 38"
            fill="none"
          >
            <path
              d="M0 36.9654V5.97629H21.9357C21.9357 9.19686 19.3235 11.7733 16.1387 11.7733H6.62007V18.2861H15.8166C19.0372 18.2861 21.6136 20.8983 21.6136 24.0831H6.62007V30.3453C6.58429 34.0311 3.64999 36.9654 0 36.9654Z"
              fill="#277DE3"
            />
            <path
              d="M59.2587 36.9654C55.9665 36.9654 53.3185 34.3173 53.3185 31.0252V23.4031C53.3185 20.612 51.9229 19.2164 49.1675 19.2164C47.1278 19.2164 45.4102 20.0752 44.0504 21.8286V31.061C44.0504 34.3173 41.4024 36.9654 38.146 36.9654V14.5287H44.0504V17.4272C44.8734 16.461 45.947 15.638 47.3425 14.9939C48.7381 14.314 50.241 13.9919 51.9229 13.9919C54.3562 13.9919 56.1812 14.636 57.3979 15.8885C58.6503 17.1767 59.2587 18.8943 59.2587 21.1487V36.9654Z"
              fill="#277DE3"
            />
            <path
              d="M93.6113 36.9654C92.6452 36.9654 91.8221 36.6075 91.1422 35.9276C90.4623 35.2477 90.1045 34.3889 90.1045 33.4585C90.1045 32.5281 90.4623 31.6693 91.1422 30.9894C91.8221 30.3095 92.6452 29.9517 93.6113 29.9517C94.6133 29.9517 95.4363 30.3095 96.1162 30.9894C96.7961 31.6693 97.154 32.4923 97.154 33.4585C97.154 34.4247 96.7961 35.2477 96.1162 35.9276C95.4363 36.6075 94.6133 36.9654 93.6113 36.9654Z"
              fill="#277DE3"
            />
            <path
              d="M125.101 12.6322C125.96 12.2028 126.962 11.9881 127.964 11.9881V24.5841C127.964 28.5561 126.783 31.7052 124.422 34.0311C122.06 36.3571 118.589 37.538 113.973 37.538C109.392 37.538 105.921 36.3571 103.524 34.0311C101.162 31.7052 99.981 28.5561 99.981 24.5841V0.000366211C101.842 0.000366211 103.488 0.751834 104.704 1.9685C105.921 3.18516 106.673 4.86701 106.673 6.692V24.4052C106.673 26.6238 107.317 28.413 108.569 29.737C109.857 31.061 111.647 31.7052 113.973 31.7052C116.299 31.7052 118.088 31.061 119.34 29.737C120.593 28.413 121.237 26.6596 121.237 24.4052V18.7513C121.237 16.6042 122.239 14.6719 123.849 13.4552V9.48317C123.133 9.37582 122.525 9.05376 121.988 8.48121C121.308 7.80131 120.951 6.94249 120.951 6.0121C120.951 5.04593 121.273 4.2229 121.988 3.543C122.668 2.8631 123.491 2.50526 124.457 2.50526C125.459 2.50526 126.282 2.8631 126.962 3.543C127.642 4.2229 128 5.04593 128 6.0121C128 6.97828 127.678 7.80131 126.962 8.48121C126.425 9.01797 125.817 9.34004 125.101 9.48317V12.6322Z"
              fill="#277DE3"
            />
            <path
              d="M80.4789 5.90474V17.3915C78.7612 15.1013 76.4352 13.9562 73.5725 13.9562C70.6382 13.9562 68.2765 15.0297 66.4157 17.141C64.5549 19.2522 63.6245 22.115 63.6245 25.7292C63.6245 29.3792 64.5549 32.2777 66.4157 34.389C68.2765 36.5002 70.6382 37.538 73.5725 37.538C76.3637 37.538 78.6539 36.3929 80.4789 34.1027V37.0012C83.771 37.0012 86.419 34.3532 86.419 31.061V0.000353747C83.1269 -0.0354304 80.4789 2.64838 80.4789 5.90474ZM75.4333 32.5639C74.3956 32.5639 73.3936 32.3135 72.5348 31.8841L69.0995 33.1365C68.5269 33.3512 67.9186 32.7787 68.1333 32.1703L69.4216 28.7708C68.9921 27.8762 68.7774 26.9101 68.7774 25.8723C68.7774 22.7233 70.996 20.0753 73.9304 19.3596C74.0019 19.3238 74.0735 19.3238 74.1451 19.3238C74.2524 19.288 74.3598 19.288 74.4671 19.2522C74.7892 19.1807 75.147 19.1807 75.4691 19.1807C79.1548 19.1807 82.1607 22.1866 82.1607 25.8723C82.0891 29.5939 79.1191 32.5639 75.4333 32.5639Z"
              fill="#277DE3"
            />
            <path
              d="M78.2603 26.6954C78.7544 26.6954 79.1549 26.2949 79.1549 25.8008C79.1549 25.3067 78.7544 24.9062 78.2603 24.9062C77.7663 24.9062 77.3657 25.3067 77.3657 25.8008C77.3657 26.2949 77.7663 26.6954 78.2603 26.6954Z"
              fill="#277DE3"
            />
            <path
              d="M75.2545 26.6954C75.7485 26.6954 76.1491 26.2949 76.1491 25.8008C76.1491 25.3067 75.7485 24.9062 75.2545 24.9062C74.7604 24.9062 74.3599 25.3067 74.3599 25.8008C74.3599 26.2949 74.7604 26.6954 75.2545 26.6954Z"
              fill="#277DE3"
            />
            <path
              d="M72.2486 26.6954C72.7427 26.6954 73.1432 26.2948 73.1432 25.8008C73.1432 25.3067 72.7427 24.9062 72.2486 24.9062C71.7545 24.9062 71.354 25.3067 71.354 25.8008C71.354 26.2948 71.7545 26.6954 72.2486 26.6954Z"
              fill="#277DE3"
            />
            <path
              d="M29.9513 14.5287H32.2772V31.061C32.2772 34.3174 29.6292 36.9654 26.3728 36.9654V14.5287H28.6988V12.0596C27.9831 11.9523 27.3748 11.6302 26.838 11.0577C26.1581 10.3778 25.8003 9.51896 25.8003 8.58857C25.8003 7.62239 26.1581 6.79936 26.838 6.11946C27.5179 5.43956 28.341 5.08171 29.3071 5.08171C30.3091 5.08171 31.1679 5.43956 31.8478 6.11946C32.4919 6.76358 32.8498 7.62239 32.8498 8.51699C32.8498 9.48317 32.5277 10.342 31.812 11.0219C31.2753 11.5587 30.6669 11.8807 29.9513 12.0239V14.5287Z"
              fill="#277DE3"
            />
          </svg>
        </Flex>
        <Flex
          padding="12px 8px"
          flexDirection="column"
          alignItems="flex-start"
          gap="12px"
          alignSelf="stretch"
          borderBottom="1px solid var(--noble-black-700, #131619)"
        >
          <Flex
            padding="0px 16px"
            alignItems="flex-start"
            gap="8px"
            alignSelf="stretch"
          >
            <Text
              color="#ADB2B8"
              className={plus_jakarta?.className}
              fontSize="12px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="18px"
              letterSpacing="0.15px"
            >
              GENERAL
            </Text>
          </Flex>
          <Flex
            height="48px"
            padding="14px 16px"
            alignItems="center"
            gap="16px"
            alignSelf="stretch"
            borderRadius="8px"
            borderTop="1px solid var(--glass-stroke, rgba(255rpx, 255rpx, 255rpx, 0.08px))"
            background="var(--glass-fill, linear-gradient(118deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0.00) 100%))"
          >
            <Flex alignItems="center" gap="16px" mr={"50px"}>
              <Flex h={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="40"
                  viewBox="0 0 38 40"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_505_14144)">
                    <path
                      d="M18.9998 4.70465V10.538M18.9998 10.538V16.3713M18.9998 10.538H24.8332M18.9998 10.538H13.1665"
                      stroke="#277DE3"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_505_14144"
                      x="-3"
                      y="-1.46204"
                      width="44"
                      height="44"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_505_14144"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_505_14144"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_505_14144"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.713726 0 0 0 0 0.941176 0 0 0 0 0.611765 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_505_14144"
                        result="effect2_dropShadow_505_14144"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_505_14144"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Flex>
              <Box>
                <Text
                  color="var(--Text, #FFF)"
                  textAlign="center"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="20px"
                  letterSpacing="0.15px"
                  cursor={"pointer"}
                  onClick={() => setStartNew(true)}
                >
                  New Chat
                </Text>
              </Box>
            </Flex>
            <Flex
              padding="4px 8px"
              justifyContent="flex-end"
              alignItems="center"
              gap="8px"
              borderRadius="4px"
              border="1px solid var(--glass-stroke, rgba(255px, 255px, 255px, 0.08px))"
              background="var(--glass-fill, linear-gradient(118deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0.00) 100%))"
              boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.05), 0px 1px 2px -1px rgba(0, 0, 0, 0.05)"
            >
              <Text
                color="var(--noble-black-300, #9B9C9E)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="12px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="18px"
                letterSpacing="0.15px"
              >
                ⌘ N
              </Text>
            </Flex>
          </Flex>
          {startNew && (
            <Flex>
              <Input
                value={convName}
                onChange={(e) => setConvName(e.target.value)}
                placeholder="Name"
              />
              <Button onClick={handleNewConversation}>Start</Button>
            </Flex>
          )}
        </Flex>
        <Flex
          padding="12px 8px"
          flexDirection="column"
          alignItems="flex-start"
          gap="4px"
          flex="1 0 0"
          alignSelf="stretch"
          borderBottom="1px solid #415D8A"
        >
          <Flex
            padding="0px 16px"
            alignItems="flex-start"
            gap="8px"
            alignSelf="stretch"
          >
            <Text
              color="#ADB2B8"
              className={plus_jakarta?.className}
              fontSize="12px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="18px"
              letterSpacing="0.15px"
            >
              History
            </Text>
          </Flex>
          <Flex
            height="48px"
            padding="14px 4px"
            alignItems="center"
            gap="16px"
            alignSelf="stretch"
            borderRadius="8px"
          >
            <Flex alignItems="center" gap="16px" flex="1 0 0">
              <Flex h={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="41"
                  viewBox="0 0 42 41"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_505_14156)">
                    <path
                      d="M28.5 10.538C28.5 14.6801 25.1421 18.038 21 18.038C16.8579 18.038 13.5 14.6801 13.5 10.538C13.5 6.39583 16.8579 3.03796 21 3.03796C23.0711 3.03796 24.9461 3.87743 26.3033 5.23466M24.75 6.3713H27.0417C27.1567 6.3713 27.25 6.27802 27.25 6.16296V3.8713M21 7.20463V9.70954C21 10.24 20.7893 10.7487 20.4142 11.1238L19.3333 12.2046"
                      stroke="#7796B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_505_14156"
                      x="-1"
                      y="-1.46204"
                      width="44"
                      height="44"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_505_14156"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.231373 0 0 0 0 0.227451 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_505_14156"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_505_14156"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.231373 0 0 0 0 0.227451 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_505_14156"
                        result="effect2_dropShadow_505_14156"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_505_14156"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Flex>
              <Text
                color="#7796B4"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="20px"
                letterSpacing="0.15px"
              >
                What is the criteria of.....
              </Text>
            </Flex>
          </Flex>

          <Flex
            height="48px"
            padding="14px 4px"
            alignItems="center"
            gap="16px"
            alignSelf="stretch"
            borderRadius="8px"
          >
            <Flex alignItems="center" gap="16px" flex="1 0 0">
              <Flex h={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="41"
                  viewBox="0 0 42 41"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_505_14156)">
                    <path
                      d="M28.5 10.538C28.5 14.6801 25.1421 18.038 21 18.038C16.8579 18.038 13.5 14.6801 13.5 10.538C13.5 6.39583 16.8579 3.03796 21 3.03796C23.0711 3.03796 24.9461 3.87743 26.3033 5.23466M24.75 6.3713H27.0417C27.1567 6.3713 27.25 6.27802 27.25 6.16296V3.8713M21 7.20463V9.70954C21 10.24 20.7893 10.7487 20.4142 11.1238L19.3333 12.2046"
                      stroke="#7796B4"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_505_14156"
                      x="-1"
                      y="-1.46204"
                      width="44"
                      height="44"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_505_14156"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.231373 0 0 0 0 0.227451 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_505_14156"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_505_14156"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.231373 0 0 0 0 0.227451 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_505_14156"
                        result="effect2_dropShadow_505_14156"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_505_14156"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Flex>
              <Text
                color="#7796B4"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="20px"
                letterSpacing="0.15px"
              >
                What is the criteria of.....
              </Text>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          padding="12px 8px"
          flexDirection="column"
          alignItems="flex-start"
          gap="4px"
          flex="1 0 0"
          alignSelf="stretch"
        >
          <Flex
            padding="0px 16px"
            alignItems="flex-start"
            gap="8px"
            alignSelf="stretch"
          >
            <Text
              color="#ADB2B8"
              className={plus_jakarta?.className}
              fontSize="12px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="18px"
              letterSpacing="0.15px"
            >
              More
            </Text>
          </Flex>
          <Flex
            height="48px"
            padding="14px 4px"
            alignItems="center"
            gap="16px"
            alignSelf="stretch"
            borderRadius="8px"
          >
            <Flex alignItems="center" gap="16px" flex="1 0 0">
              <Flex h={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="42"
                  viewBox="0 0 36 42"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_505_14178)">
                    <path
                      d="M15.1429 14.3333V15.6429C15.1429 17.2208 16.422 18.5 18 18.5V18.5C19.578 18.5 20.8571 17.2208 20.8571 15.6429V14.3333M15.1429 14.3333V13.9627C15.1429 13.321 14.8152 12.7353 14.3809 12.2629C13.5253 11.3324 13 10.0724 13 8.68519C13 5.82149 15.2386 3.5 18 3.5C20.7614 3.5 23 5.82149 23 8.68519C23 10.0724 22.4747 11.3324 21.6191 12.2629C21.1848 12.7353 20.8571 13.321 20.8571 13.9627V14.3333M15.1429 14.3333H20.8571"
                      stroke="#CDCECF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_505_14178"
                      x="-4"
                      y="-1"
                      width="44"
                      height="44"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_505_14178"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.231373 0 0 0 0 0.227451 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_505_14178"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_505_14178"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.741176 0 0 0 0 0.231373 0 0 0 0 0.227451 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_505_14178"
                        result="effect2_dropShadow_505_14178"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_505_14178"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Flex>
              <Text
                color="#7796B4"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="20px"
                letterSpacing="0.15px"
              >
                How it works
              </Text>
            </Flex>
          </Flex>

          <Flex
            height="48px"
            padding="14px 4px"
            alignItems="center"
            gap="16px"
            alignSelf="stretch"
            borderRadius="8px"
          >
            <Flex alignItems="center" gap="16px" flex="1 0 0">
              <Flex h={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="38"
                  height="39"
                  viewBox="0 0 38 39"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_505_14184)">
                    <path
                      d="M20.346 15.8334H15.1665C14.0619 15.8334 13.1665 14.9379 13.1665 13.8334V6.16669C13.1665 5.06212 14.0619 4.16669 15.1665 4.16669H22.8332C23.9377 4.16669 24.8332 5.06212 24.8332 6.16669V11.3462M20.346 15.8334L24.8332 11.3462M20.346 15.8334V12.3462C20.346 11.7939 20.7937 11.3462 21.346 11.3462H24.8332"
                      stroke="#CDCECF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_505_14184"
                      x="-3"
                      y="-2"
                      width="44"
                      height="44"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_505_14184"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.886275 0 0 0 0 0.435294 0 0 0 0 0.12549 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_505_14184"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_505_14184"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.886275 0 0 0 0 0.435294 0 0 0 0 0.12549 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_505_14184"
                        result="effect2_dropShadow_505_14184"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_505_14184"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Flex>
              <Text
                color="#7796B4"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="20px"
                letterSpacing="0.15px"
              >
                Terms and Condition
              </Text>
            </Flex>
          </Flex>

          <Flex
            height="48px"
            padding="14px 4px"
            alignItems="center"
            gap="16px"
            alignSelf="stretch"
            borderRadius="8px"
          >
            <Flex alignItems="center" gap="16px" flex="1 0 0">
              <Flex h={"20px"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <g filter="url(#filter0_dd_505_14190)">
                    <path
                      d="M18.5 8.5L21 11M21 11L23.5 13.5M21 11L23.5 8.5M21 11L18.5 13.5M16 18.5H26C27.3807 18.5 28.5 17.3807 28.5 16V6C28.5 4.61929 27.3807 3.5 26 3.5H16C14.6193 3.5 13.5 4.61929 13.5 6V16C13.5 17.3807 14.6193 18.5 16 18.5Z"
                      stroke="#CDCECF"
                      stroke-width="1.5"
                      stroke-linecap="round"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_dd_505_14190"
                      x="-1"
                      y="-1"
                      width="44"
                      height="44"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="4"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect1_dropShadow_505_14190"
                      />
                      <feOffset dy="4" />
                      <feGaussianBlur stdDeviation="3" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.886275 0 0 0 0 0.435294 0 0 0 0 0.12549 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_505_14190"
                      />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feMorphology
                        radius="3"
                        operator="erode"
                        in="SourceAlpha"
                        result="effect2_dropShadow_505_14190"
                      />
                      <feOffset dy="10" />
                      <feGaussianBlur stdDeviation="7.5" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.886275 0 0 0 0 0.435294 0 0 0 0 0.12549 0 0 0 0.16 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="effect1_dropShadow_505_14190"
                        result="effect2_dropShadow_505_14190"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect2_dropShadow_505_14190"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
              </Flex>
              <Text
                color="#FC5170"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="20px"
                letterSpacing="0.15px"
              >
                Logout
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          padding="8px"
          flexDirection="column"
          alignItems="flex-start"
          gap="24px"
          alignSelf="stretch"
        >
          <Flex
            padding="12px"
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
            borderRadius="16px"
            borderTop="1px solid var(--glass-stroke, rgba(255px, 255px, 255px, 0.08px))"
            background="var(--glass-fill, linear-gradient(118deg, rgba(215, 237, 237, 0.16) -47.79%, rgba(204, 235, 235, 0.00) 100%))"
          >
            <Flex alignItems="center" gap="16px">
              <Flex
                width="48px"
                height="48px"
                padding="0px 0px 38px 38px"
                justifyContent="flex-end"
                alignItems="center"
                borderRadius="20px"
                background='var(--avatar-ryan-lee, url("Avatar.png"), lightgray 50% / cover no-repeat)'
              />
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="4px"
                mr={"50px"}
              >
                <Text
                  color="#FFF"
                  textAlign="center"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Ryan Lee
                </Text>
                <Text
                  color="var(--stem-green-500, #B6F09C)"
                  textAlign="center"
                  className={plus_jakarta?.className}
                  fontSize="12px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="18px"
                  letterSpacing="0.15px"
                >
                  Premium
                </Text>
              </Flex>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                  stroke="#686B6E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.90136 6.7469C5.96492 6.20624 4.76749 6.52709 4.22684 7.46353L4.1851 7.53583C3.64424 8.47263 3.96521 9.67051 4.902 10.2114L5.1448 10.3515C5.71742 10.6821 6 11.3388 6 12C6 12.6612 5.71742 13.3179 5.1448 13.6485L4.902 13.7886C3.96521 14.3295 3.64424 15.5274 4.1851 16.4642L4.22684 16.5365C4.7675 17.4729 5.96492 17.7938 6.90136 17.2531L7.14546 17.1122C7.71803 16.7816 8.42331 16.863 8.9953 17.1946C9.56711 17.526 10 18.1005 10 18.7614V19.0427C10 20.1237 10.8763 21 11.9573 21H12.0427C13.1237 21 14 20.1237 14 19.0427V18.7614C14 18.1005 14.4329 17.5261 15.0047 17.1946C15.5767 16.863 16.282 16.7816 16.8545 17.1122L17.0986 17.2531C18.0351 17.7938 19.2325 17.4729 19.7732 16.5365L19.8149 16.4642C20.3558 15.5274 20.0348 14.3295 19.098 13.7886L18.8552 13.6485C18.2826 13.3179 18 12.6612 18 12C18 11.3388 18.2826 10.6821 18.8552 10.3515L19.098 10.2114C20.0348 9.6705 20.3558 8.47262 19.8149 7.53581L19.7732 7.46353C19.2325 6.52709 18.0351 6.20623 17.0986 6.74689L16.8545 6.88783C16.282 7.2184 15.5767 7.13699 15.0047 6.80541C14.4329 6.47395 14 5.89952 14 5.23859V4.95728C14 3.8763 13.1237 3 12.0427 3L11.9573 3C10.8763 3 10 3.8763 10 4.95727V5.23858C10 5.89952 9.56711 6.47395 8.9953 6.80542C8.42331 7.13699 7.71803 7.2184 7.14546 6.88783L6.90136 6.7469Z"
                  stroke="#686B6E"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        width="1050px"
        height="95vh"
        flexShrink="0"
        borderRadius="24px"
        background=" #FFF"
        padding={"12px"}
        flexDirection={"column"}
        mt={"16px"}
      >
        <Flex
          width="80%"
          flexDirection="column"
          alignItems="center"
          gap="32px"
          flexShrink="0"
          justifyContent={"center"}
          m={"auto"}
        >
          <Flex flexDirection="column" alignItems="center" gap="16px">
            <Text
              color=" #131619"
              className={plus_jakarta?.className}
              fontSize="24px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="normal"
              letterSpacing="0.15px"
            >
              Unlock Your UK Study Path
            </Text>
            <Text
              color=" #696969"
              textAlign="center"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0.15px"
            >
              Explore courses, universities, scholarships, and more for your UK
              education journey
            </Text>
          </Flex>

          <Flex gap="16px" alignItems="center">
            <Flex
              padding="24px 16px"
              alignItems="center"
              gap="12px"
              borderRadius="8px"
              border="1px solid  #D0D5DD"
              alignSelf={"stretch"}
            >
              <Text
                color=" #787878"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
                letterSpacing="0.15px"
              >
                Write your query here
              </Text>
            </Flex>
            <Flex
              padding="22px 24px"
              alignItems="center"
              gap="8px"
              borderRadius="8px"
              border="1px solid  #D0D5DD"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="28"
                viewBox="0 0 24 28"
                fill="none"
              >
                <path
                  d="M1.13716 27.1911C0.785235 26.878 0.502404 26.4885 0.308235 26.0495C0.114066 25.6106 0.0131949 25.1326 0.0126009 24.6488C-0.231096 24.049 3.13843 15.7298 3.32961 14.9785L12.0626 14.9782C12.1847 14.9786 12.3056 14.9537 12.4185 14.9049C12.5313 14.856 12.6339 14.7843 12.7202 14.6938C12.8065 14.6034 12.8749 14.4959 12.9215 14.3776C12.968 14.2593 12.9918 14.1325 12.9915 14.0045C12.9927 13.8763 12.9695 13.7491 12.9233 13.6304C12.877 13.5117 12.8087 13.4038 12.7222 13.3132C12.6357 13.2225 12.5328 13.1508 12.4195 13.1023C12.3063 13.0539 12.185 13.0296 12.0626 13.0308L3.32967 13.0311L0.226667 4.57784C-0.0165141 3.92868 -0.0593894 3.21592 0.104073 2.53986C0.267536 1.86379 0.629108 1.25846 1.13791 0.80905C1.64088 0.354492 2.26694 0.0763345 2.92831 0.0135799C3.58969 -0.0491747 4.2532 0.106621 4.82581 0.459121L22.3933 11.0831C22.8833 11.3779 23.2901 11.8035 23.5723 12.3166C23.8545 12.8297 24.0021 13.4119 24 14.0042C24.0008 14.5951 23.8526 15.1757 23.5703 15.6871C23.2879 16.1986 22.8816 16.6227 22.3924 16.9164L4.82504 27.5408C4.25241 27.8933 3.58889 28.0492 2.92752 27.9864C2.26615 27.9237 1.64011 27.6456 1.13716 27.1911Z"
                  fill="#686B6E"
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default UserQuery;
