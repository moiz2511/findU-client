import { Flex, Text, chakra, Button, Input, Checkbox } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const SignUp = () => {
  return (
    <Flex width="1440px" borderRadius="24px" background="var(--Form-BG, #FFF)">
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        pt={"20px"}
        pb={"20px"}
      >
        <Flex
          width="170px"
          height="49.855px"
          flexShrink="0"
          alignSelf={"center"}
          mb={"80px"}
          ml={"325px"}
          mr={"237px"}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="170"
            height="50"
            viewBox="0 0 170 50"
            fill="none"
          >
            <path
              d="M0 49.0949V7.9375H29.1333C29.1333 12.2148 25.6639 15.6367 21.4341 15.6367H8.79228V24.2864H21.0064C25.2837 24.2864 28.7056 27.7558 28.7056 31.9856H8.79228V40.3026C8.74476 45.1978 4.84764 49.0949 0 49.0949Z"
              fill="#277DE3"
            />
            <path
              d="M78.7029 49.0946C74.3305 49.0946 70.8136 45.5777 70.8136 41.2053V31.0823C70.8136 27.3753 68.9601 25.5218 65.3006 25.5218C62.5916 25.5218 60.3103 26.6624 58.5044 28.9912V41.2528C58.5044 45.5777 54.9875 49.0946 50.6626 49.0946V19.2959H58.5044V23.1455C59.5975 21.8623 61.0232 20.7692 62.8767 19.9137C64.7303 19.0107 66.7263 18.583 68.9601 18.583C72.1918 18.583 74.6156 19.4385 76.2315 21.1019C77.8949 22.8128 78.7029 25.094 78.7029 28.0882V49.0946Z"
              fill="#277DE3"
            />
            <path
              d="M124.327 49.0949C123.044 49.0949 121.951 48.6196 121.048 47.7166C120.145 46.8136 119.67 45.673 119.67 44.4373C119.67 43.2016 120.145 42.061 121.048 41.158C121.951 40.2551 123.044 39.7798 124.327 39.7798C125.658 39.7798 126.751 40.2551 127.654 41.158C128.557 42.061 129.033 43.1541 129.033 44.4373C129.033 45.7205 128.557 46.8136 127.654 47.7166C126.751 48.6196 125.658 49.0949 124.327 49.0949Z"
              fill="#277DE3"
            />
            <path
              d="M166.15 16.7771C167.291 16.2068 168.622 15.9217 169.952 15.9217V32.6507C169.952 37.9261 168.384 42.1084 165.247 45.1976C162.111 48.2868 157.501 49.8551 151.37 49.8551C145.286 49.8551 140.676 48.2868 137.492 45.1976C134.355 42.1084 132.787 37.9261 132.787 32.6507V0.000488281C135.258 0.000488281 137.445 0.998531 139.061 2.61441C140.676 4.23029 141.674 6.464 141.674 8.88782V32.4131C141.674 35.3597 142.53 37.736 144.193 39.4945C145.904 41.2529 148.281 42.1084 151.37 42.1084C154.459 42.1084 156.835 41.2529 158.499 39.4945C160.162 37.736 161.017 35.4072 161.017 32.4131V24.904C161.017 22.0525 162.348 19.4861 164.487 17.8702V12.5948C163.536 12.4523 162.728 12.0245 162.016 11.2641C161.113 10.3611 160.637 9.2205 160.637 7.98483C160.637 6.70163 161.065 5.60854 162.016 4.70555C162.919 3.80255 164.012 3.3273 165.295 3.3273C166.626 3.3273 167.719 3.80255 168.622 4.70555C169.525 5.60854 170 6.70163 170 7.98483C170 9.26803 169.572 10.3611 168.622 11.2641C167.909 11.977 167.101 12.4047 166.15 12.5948V16.7771Z"
              fill="#277DE3"
            />
            <path
              d="M106.886 7.84224V23.098C104.604 20.0564 101.515 18.5356 97.7132 18.5356C93.816 18.5356 90.6793 19.9613 88.208 22.7654C85.7366 25.5694 84.501 29.3714 84.501 34.1716C84.501 39.0192 85.7366 42.8688 88.208 45.6728C90.6793 48.4768 93.816 49.8551 97.7132 49.8551C101.42 49.8551 104.462 48.3343 106.886 45.2926V49.1422C111.258 49.1422 114.775 45.6253 114.775 41.2529V0.00046982C110.403 -0.047056 106.886 3.51738 106.886 7.84224ZM100.185 43.249C98.8063 43.249 97.4755 42.9163 96.3349 42.346L91.7724 44.0094C91.012 44.2946 90.2041 43.5342 90.4892 42.7262L92.2002 38.2113C91.6299 37.0231 91.3447 35.7399 91.3447 34.3617C91.3447 30.1794 94.2913 26.6625 98.1884 25.712C98.2835 25.6644 98.3785 25.6644 98.4736 25.6644C98.6162 25.6169 98.7587 25.6169 98.9013 25.5694C99.329 25.4743 99.8043 25.4743 100.232 25.4743C105.127 25.4743 109.119 29.4665 109.119 34.3617C109.024 39.3044 105.08 43.249 100.185 43.249Z"
              fill="#277DE3"
            />
            <path
              d="M103.939 35.4549C104.595 35.4549 105.127 34.923 105.127 34.2668C105.127 33.6106 104.595 33.0786 103.939 33.0786C103.283 33.0786 102.751 33.6106 102.751 34.2668C102.751 34.923 103.283 35.4549 103.939 35.4549Z"
              fill="#277DE3"
            />
            <path
              d="M99.9469 35.4549C100.603 35.4549 101.135 34.923 101.135 34.2668C101.135 33.6106 100.603 33.0786 99.9469 33.0786C99.2907 33.0786 98.7588 33.6106 98.7588 34.2668C98.7588 34.923 99.2907 35.4549 99.9469 35.4549Z"
              fill="#277DE3"
            />
            <path
              d="M95.9547 35.4549C96.6109 35.4549 97.1429 34.923 97.1429 34.2668C97.1429 33.6106 96.6109 33.0786 95.9547 33.0786C95.2986 33.0786 94.7666 33.6106 94.7666 34.2668C94.7666 34.923 95.2986 35.4549 95.9547 35.4549Z"
              fill="#277DE3"
            />
            <path
              d="M39.7791 19.2959H42.8683V41.2528C42.8683 45.5777 39.3514 49.0946 35.0265 49.0946V19.2959H38.1157V16.0166C37.1652 15.874 36.3573 15.4463 35.6444 14.6858C34.7414 13.7829 34.2661 12.6422 34.2661 11.4066C34.2661 10.1234 34.7414 9.03028 35.6444 8.12729C36.5474 7.22429 37.6405 6.74902 38.9237 6.74902C40.2544 6.74902 41.395 7.22429 42.298 8.12729C43.1535 8.98275 43.6287 10.1234 43.6287 11.3115C43.6287 12.5947 43.201 13.7353 42.2505 14.6383C41.5376 15.3512 40.7296 15.7789 39.7791 15.9691V19.2959Z"
              fill="#277DE3"
            />
          </svg>
        </Flex>
        <Flex
          width="592px"
          flexDirection="column"
          alignItems="center"
          gap="55px"
          ml={"96px"}
          mr={"44px"}
          mt={"0px"}
        >
          <Flex flexDir={"column"}>
            <Text
              color="var(--Text, #131619)"
              textAlign="center"
              className={plus_jakarta?.className}
              fontSize="36px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="44px"
              mb={"16px"}
            >
              Hi👋
            </Text>
            <Text
              color="var(--Caption, #696969)"
              textAlign="center"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="28px"
              letterSpacing="0.15px"
            >
              Sign up to Chatgpt to start creating magic.
            </Text>
          </Flex>

          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            gap="48px"
            alignSelf="stretch"
          >
            {/* <Flex
              height="48px"
              justifyContent="center"
              alignItems="center"
              gap="12px"
              alignSelf="stretch"
              padding="8px 24px"
              borderRadius="12px"
              background="var(--Primary, #277DE3)"
            >
              <Text
                color="var(--Btn-Text-Color, #FFF)"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="0.15px"
              >
                Sign up in with email
              </Text>
            </Flex> */}

            <Flex
              flexDirection="column"
              alignItems="flex-start"
              gap="24px"
              alignSelf="stretch"
            >
              <Input
                placeholder={"Full name"}
                type="text"
                color="var(--Input-Text-In-Active, #787878)"
                borderRadius="8px"
                border="1px solid var(--Input-Border, #D0px5px)"
                background="var(--Input-BG, #F9FBFF)"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24rpx"
                letterSpacing="0.15px"
              />
              <Input
                placeholder={"test@gmail.com"}
                type="email"
                color="var(--Input-Text-In-Active, #787878)"
                borderRadius="8px"
                border="1px solid var(--Input-Border, #D0px5px)"
                background="var(--Input-BG, #F9FBFF)"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24rpx"
                letterSpacing="0.15px"
              />
              <Input
                placeholder={"Enter the password"}
                type="password"
                color="var(--Input-Text-In-Active, #787878)"
                borderRadius="8px"
                border="1px solid var(--Input-Border, #D0px5px)"
                background="var(--Input-BG, #F9FBFF)"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="24rpx"
                letterSpacing="0.15px"
              />
            </Flex>

            <Flex
              justifyContent="space-between"
              alignItems="center"
              alignSelf="stretch"
            >
              <Flex>
                <Checkbox mr={"16px"} />
                <Text
                  color="var(--Input-Label, #686B6E)"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Remember me
                </Text>
              </Flex>
              <Text
                color="var(--Primary, #277DE3)"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="0.15px"
              >
                Forgot Password?
              </Text>
            </Flex>
            <Flex
              height="48px"
              justifyContent="center"
              alignItems="center"
              gap="12px"
              alignSelf="stretch"
              padding="8px 24px"
              borderRadius="12px"
              background="var(--Primary, #277DE3)"
            >
              <Text
                color="var(--Btn-Text-Color, #FFF)"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="0.15px"
              >
                Log in
              </Text>
            </Flex>
            <Flex alignItems="center" gap="16px" alignSelf="stretch">
              <Flex
                width="244.5px"
                height="1px"
                background="var(--Caption, #696969)"
              />
              <Text
                color="var(--Caption, #696969)"
                className={plus_jakarta?.className}
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="18px"
                letterSpacing="0.15px"
                whiteSpace={"nowrap"}
              >
                or continue with
              </Text>
              <Flex
                width="244.5px"
                height="1px"
                background="var(--Caption, #696969)"
              />
            </Flex>
            <Flex alignItems="flex-start" gap="24px" alignSelf="stretch">
              <Flex
                height="48px"
                padding="8px 24px"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                flex="1 0 0"
                borderRadius="12px"
                background="var(--Input-BG, #F9FBFF)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_700_121)">
                    <path
                      d="M10.8706 8.18188V12.0546H16.3623C16.1211 13.3001 15.3975 14.3547 14.3121 15.0638L17.6238 17.582C19.5533 15.8366 20.6665 13.2729 20.6665 10.2275C20.6665 9.51837 20.6016 8.83648 20.481 8.18199L10.8706 8.18188Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M5.15199 11.9033L4.40507 12.4636L1.76123 14.4818C3.44027 17.7454 6.88159 20 10.8705 20C13.6255 20 15.9353 19.1091 17.6237 17.5819L14.312 15.0636C13.4029 15.6636 12.2433 16.0273 10.8705 16.0273C8.21739 16.0273 5.96327 14.2728 5.15616 11.9091L5.15199 11.9033Z"
                      fill="#34A853"
                    />
                    <path
                      d="M1.76105 5.51831C1.06535 6.86372 0.666504 8.38193 0.666504 10.0001C0.666504 11.6183 1.06535 13.1365 1.76105 14.4819C1.76105 14.4909 5.1563 11.9 5.1563 11.9C4.95222 11.3 4.83159 10.6637 4.83159 9.99999C4.83159 9.33626 4.95222 8.69993 5.1563 8.09993L1.76105 5.51831Z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M10.8707 3.98184C12.3735 3.98184 13.7093 4.49092 14.7761 5.47275L17.6981 2.60914C15.9263 0.990976 13.6258 0 10.8707 0C6.8818 0 3.44027 2.24546 1.76123 5.51822L5.15638 8.10005C5.96339 5.73638 8.2176 3.98184 10.8707 3.98184Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_700_121">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.666504)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Text
                  color="var(--Caption-2, #686B6E)"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Google
                </Text>
              </Flex>

              <Flex
                height="48px"
                padding="8px 24px"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                flex="1 0 0"
                borderRadius="12px"
                background="var(--Input-BG, #F9FBFF)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_700_112)">
                    <path
                      d="M21.2273 0H3.77273C1.96525 0 0.5 1.46525 0.5 3.27273V20.7273C0.5 22.5347 1.96525 24 3.77273 24H21.2273C23.0347 24 24.5 22.5347 24.5 20.7273V3.27273C24.5 1.46525 23.0347 0 21.2273 0Z"
                      fill="#0077B5"
                    />
                    <path
                      d="M9.1456 6.54545C9.1456 6.95001 9.02563 7.34547 8.80088 7.68185C8.57612 8.01822 8.25666 8.28039 7.8829 8.43521C7.50915 8.59002 7.09787 8.63053 6.70109 8.55161C6.30432 8.47268 5.93985 8.27787 5.65379 7.99181C5.36773 7.70575 5.17292 7.34128 5.09399 6.9445C5.01507 6.54772 5.05557 6.13645 5.21039 5.76269C5.3652 5.38894 5.62738 5.06948 5.96375 4.84472C6.30012 4.61996 6.69559 4.5 7.10014 4.5C7.64263 4.5 8.1629 4.7155 8.5465 5.0991C8.9301 5.4827 9.1456 6.00297 9.1456 6.54545ZM8.68196 9.95455V18.9914C8.68232 19.058 8.6695 19.1241 8.64424 19.1858C8.61897 19.2475 8.58177 19.3036 8.53475 19.3509C8.48774 19.3981 8.43185 19.4356 8.37029 19.4612C8.30873 19.4868 8.24272 19.5 8.17605 19.5H6.02014C5.95348 19.5002 5.88743 19.4872 5.82581 19.4618C5.76418 19.4363 5.70819 19.399 5.66105 19.3518C5.61391 19.3047 5.57655 19.2487 5.55112 19.1871C5.52569 19.1254 5.51269 19.0594 5.51287 18.9927V9.95455C5.51287 9.82001 5.56632 9.69098 5.66145 9.59585C5.75658 9.50072 5.88561 9.44727 6.02014 9.44727H8.17605C8.31035 9.44763 8.43903 9.50124 8.53387 9.59633C8.6287 9.69142 8.68196 9.82024 8.68196 9.95455ZM19.9511 14.6591V19.0336C19.9512 19.0949 19.9393 19.1557 19.9159 19.2123C19.8925 19.269 19.8582 19.3205 19.8149 19.3638C19.7715 19.4071 19.72 19.4415 19.6634 19.4649C19.6067 19.4882 19.546 19.5002 19.4847 19.5H17.1665C17.1052 19.5002 17.0445 19.4882 16.9878 19.4649C16.9312 19.4415 16.8797 19.4071 16.8363 19.3638C16.793 19.3205 16.7586 19.269 16.7353 19.2123C16.7119 19.1557 16.7 19.0949 16.7001 19.0336V14.7941C16.7001 14.1614 16.8856 12.0232 15.0461 12.0232C13.6211 12.0232 13.3306 13.4864 13.2733 14.1436V19.0336C13.2733 19.1562 13.2251 19.2738 13.1391 19.361C13.0532 19.4483 12.9363 19.4982 12.8138 19.5H10.5747C10.5135 19.5 10.4529 19.4879 10.3964 19.4645C10.3399 19.441 10.2886 19.4066 10.2454 19.3633C10.2022 19.32 10.168 19.2686 10.1447 19.212C10.1214 19.1554 10.1095 19.0948 10.1097 19.0336V9.915C10.1095 9.85382 10.1214 9.79321 10.1447 9.73663C10.168 9.68006 10.2022 9.62864 10.2454 9.58531C10.2886 9.54199 10.3399 9.50762 10.3964 9.48416C10.4529 9.46071 10.5135 9.44864 10.5747 9.44864H12.8138C12.9375 9.44864 13.0561 9.49777 13.1435 9.58523C13.231 9.67269 13.2801 9.79131 13.2801 9.915V10.7032C13.8092 9.90955 14.5933 9.29727 16.2665 9.29727C19.9729 9.29727 19.9511 12.7582 19.9511 14.6591Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_700_112">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(0.5)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                <Text
                  color="var(--Caption-2, #686B6E)"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Linkedin
                </Text>
              </Flex>

              <Flex
                height="48px"
                padding="8px 24px"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                flex="1 0 0"
                borderRadius="12px"
                background="var(--Input-BG, #F9FBFF)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  viewBox="0 0 25 24"
                  fill="none"
                >
                  <path
                    d="M24.083 5.25049H13.583C13.169 5.25049 12.833 5.58649 12.833 6.00049C12.833 6.41449 13.169 6.75049 13.583 6.75049H21.8975L17.2895 10.334L13.985 8.23249L13.181 9.49849L16.931 11.8835C17.0511 11.9601 17.1906 12.0007 17.333 12.0005C17.495 12.0005 17.6585 11.948 17.7935 11.843L23.333 7.53349V17.2505H13.583C13.169 17.2505 12.833 17.5865 12.833 18.0005C12.833 18.4145 13.169 18.7505 13.583 18.7505H24.083C24.497 18.7505 24.833 18.4145 24.833 18.0005V6.00049C24.833 5.58649 24.497 5.25049 24.083 5.25049Z"
                    fill="#1976D2"
                  />
                  <path
                    d="M14.0615 0.923022C13.8905 0.780522 13.661 0.719022 13.445 0.764022L1.44501 3.01402C1.27296 3.04581 1.1175 3.13692 1.00568 3.27148C0.893862 3.40605 0.832761 3.57556 0.833009 3.75052V20.2505C0.833009 20.6105 1.08951 20.921 1.44501 20.987L13.445 23.237C13.49 23.246 13.5365 23.2505 13.583 23.2505C13.757 23.2505 13.9265 23.1905 14.0615 23.078C14.1464 23.0076 14.2148 22.9194 14.2617 22.8196C14.3086 22.7198 14.333 22.6108 14.333 22.5005V1.50052C14.333 1.27702 14.234 1.06552 14.0615 0.923022Z"
                    fill="#2196F3"
                  />
                  <path
                    d="M7.58301 17.2505C5.51601 17.2505 3.83301 15.2315 3.83301 12.7505C3.83301 10.2695 5.51601 8.25049 7.58301 8.25049C9.65001 8.25049 11.333 10.2695 11.333 12.7505C11.333 15.2315 9.65001 17.2505 7.58301 17.2505ZM7.58301 9.75049C6.34251 9.75049 5.33301 11.096 5.33301 12.7505C5.33301 14.405 6.34251 15.7505 7.58301 15.7505C8.82351 15.7505 9.83301 14.405 9.83301 12.7505C9.83301 11.096 8.82351 9.75049 7.58301 9.75049Z"
                    fill="#FAFAFA"
                  />
                </svg>
                <Text
                  color="var(--Caption-2, #686B6E)"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Outlook
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex gap={"8px"}>
            <Text
              color="var(--Caption, #696969)"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="24px"
              letterSpacing="0.15px"
            >
              Don’t have an account?
            </Text>
            <Text
              color="var(--Primary, #277DE3)"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="0.15px"
            >
              Sign Up
            </Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex
        width="708px"
        padding="140px 48px"
        flexDirection="column"
        alignItems="flex-start"
        gap="8px"
        borderRadius="16px 0px 0px 16px"
        background="#F5F8FF"
      >
        <Flex
          flexDirection="column"
          alignItems="flex-start"
          gap="8px"
          alignSelf="stretch"
        >
          <Flex
            width="506px"
            height="350px"
            padding="14px 0px 14px 19px"
            justifyContent="flex-end"
            alignItems="center"
          >
            <Flex
              width="486px"
              flexDirection="column"
              alignItems="flex-start"
              gap="56px"
            >
              <Text
                color="#000"
                className={plus_jakarta?.className}
                fontSize="24px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                "FindU proved to be an indispensable partner throughout my UK
                study adventure. Its unwavering support, from assisting me in
                exploring top-tier universities to helping me adapt to campus
                life, made all the differen
              </Text>
              <Flex alignItems="center" gap="17px" alignSelf="stretch">
                <Flex
                  width="50px"
                  height="50px"
                  justifyContent="center"
                  alignItems="center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                  >
                    <path
                      d="M24.083 5.25049H13.583C13.169 5.25049 12.833 5.58649 12.833 6.00049C12.833 6.41449 13.169 6.75049 13.583 6.75049H21.8975L17.2895 10.334L13.985 8.23249L13.181 9.49849L16.931 11.8835C17.0511 11.9601 17.1906 12.0007 17.333 12.0005C17.495 12.0005 17.6585 11.948 17.7935 11.843L23.333 7.53349V17.2505H13.583C13.169 17.2505 12.833 17.5865 12.833 18.0005C12.833 18.4145 13.169 18.7505 13.583 18.7505H24.083C24.497 18.7505 24.833 18.4145 24.833 18.0005V6.00049C24.833 5.58649 24.497 5.25049 24.083 5.25049Z"
                      fill="#1976D2"
                    />
                    <path
                      d="M14.0615 0.923022C13.8905 0.780522 13.661 0.719022 13.445 0.764022L1.44501 3.01402C1.27296 3.04581 1.1175 3.13692 1.00568 3.27148C0.893862 3.40605 0.832761 3.57556 0.833009 3.75052V20.2505C0.833009 20.6105 1.08951 20.921 1.44501 20.987L13.445 23.237C13.49 23.246 13.5365 23.2505 13.583 23.2505C13.757 23.2505 13.9265 23.1905 14.0615 23.078C14.1464 23.0076 14.2148 22.9194 14.2617 22.8196C14.3086 22.7198 14.333 22.6108 14.333 22.5005V1.50052C14.333 1.27702 14.234 1.06552 14.0615 0.923022Z"
                      fill="#2196F3"
                    />
                    <path
                      d="M7.58301 17.2505C5.51601 17.2505 3.83301 15.2315 3.83301 12.7505C3.83301 10.2695 5.51601 8.25049 7.58301 8.25049C9.65001 8.25049 11.333 10.2695 11.333 12.7505C11.333 15.2315 9.65001 17.2505 7.58301 17.2505ZM7.58301 9.75049C6.34251 9.75049 5.33301 11.096 5.33301 12.7505C5.33301 14.405 6.34251 15.7505 7.58301 15.7505C8.82351 15.7505 9.83301 14.405 9.83301 12.7505C9.83301 11.096 8.82351 9.75049 7.58301 9.75049Z"
                      fill="#FAFAFA"
                    />
                  </svg>
                </Flex>
                <Flex flexDirection="column" alignItems="flex-start" gap="3px">
                  <Text
                    color="var(--Text, #131619)"
                    className={plus_jakarta?.className}
                    fontSize="20px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="normal"
                  >
                    Marry Jane
                  </Text>
                  <Text
                    color="var(--Input-Text-In-Active, #787878)"
                    className={plus_jakarta?.className}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                  >
                    UI UX Artist
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            padding="0px 16px"
            alignItems="flex-start"
            gap="9px"
            alignSelf="stretch"
          >
            <Flex ml={"16px"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
              >
                <circle cx="6" cy="6" r="6" fill="#277DE3" />
              </svg>
            </Flex>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="6" r="6" fill="#D9D9D9" />
            </svg>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default SignUp;
