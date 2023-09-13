import { Flex, Text, chakra } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Curriculam = () => {
  return (
    <Flex
      padding="30px 341px 53px 308px"
      flexDirection="column"
      justifyContent="flex-end"
      alignItems="center"
      gap="108.572px"
      borderRadius="24px"
      background="var(--Form-BG, #FFF)"
      margin={"auto"}
    >
      <Flex flexDirection="column" alignItems="flex-end" gap="32px">
        <Flex flexDirection="column" alignItems="center" gap="72px">
          <Flex width="170px" height="49.855px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="171"
              height="51"
              viewBox="0 0 171 51"
              fill="none"
            >
              <path
                d="M0.5 49.6671V8.5097H29.6333C29.6333 12.787 26.1639 16.2089 21.9341 16.2089H9.29228V24.8586H21.5064C25.7837 24.8586 29.2056 28.328 29.2056 32.5578H9.29228V40.8748C9.24476 45.77 5.34764 49.6671 0.5 49.6671Z"
                fill="#277DE3"
              />
              <path
                d="M79.2029 49.6671C74.8305 49.6671 71.3136 46.1502 71.3136 41.7778V31.6548C71.3136 27.9478 69.4601 26.0943 65.8006 26.0943C63.0916 26.0943 60.8103 27.2349 59.0044 29.5637V41.8254C59.0044 46.1502 55.4875 49.6671 51.1626 49.6671V19.8684H59.0044V23.718C60.0975 22.4348 61.5232 21.3417 63.3767 20.4862C65.2303 19.5832 67.2263 19.1555 69.4601 19.1555C72.6918 19.1555 75.1156 20.011 76.7315 21.6744C78.3949 23.3853 79.2029 25.6666 79.2029 28.6607V49.6671Z"
                fill="#277DE3"
              />
              <path
                d="M124.827 49.6671C123.544 49.6671 122.451 49.1919 121.548 48.2889C120.645 47.3859 120.17 46.2453 120.17 45.0096C120.17 43.7739 120.645 42.6333 121.548 41.7303C122.451 40.8273 123.544 40.3521 124.827 40.3521C126.158 40.3521 127.251 40.8273 128.154 41.7303C129.057 42.6333 129.533 43.7264 129.533 45.0096C129.533 46.2928 129.057 47.3859 128.154 48.2889C127.251 49.1919 126.158 49.6671 124.827 49.6671Z"
                fill="#277DE3"
              />
              <path
                d="M166.65 17.3496C167.791 16.7792 169.122 16.4941 170.452 16.4941V33.2232C170.452 38.4986 168.884 42.6809 165.747 45.77C162.611 48.8592 158.001 50.4276 151.87 50.4276C145.786 50.4276 141.176 48.8592 137.992 45.77C134.855 42.6809 133.287 38.4986 133.287 33.2232V0.572937C135.758 0.572937 137.945 1.57098 139.561 3.18686C141.176 4.80274 142.174 7.03645 142.174 9.46026V32.9856C142.174 35.9322 143.03 38.3085 144.693 40.0669C146.404 41.8254 148.781 42.6809 151.87 42.6809C154.959 42.6809 157.335 41.8254 158.999 40.0669C160.662 38.3085 161.517 35.9797 161.517 32.9856V25.4765C161.517 22.6249 162.848 20.0585 164.987 18.4427V13.1673C164.036 13.0247 163.228 12.597 162.516 11.8366C161.613 10.9336 161.137 9.79295 161.137 8.55728C161.137 7.27408 161.565 6.18099 162.516 5.27799C163.419 4.375 164.512 3.89975 165.795 3.89975C167.126 3.89975 168.219 4.375 169.122 5.27799C170.025 6.18099 170.5 7.27408 170.5 8.55728C170.5 9.84047 170.072 10.9336 169.122 11.8366C168.409 12.5494 167.601 12.9772 166.65 13.1673V17.3496Z"
                fill="#277DE3"
              />
              <path
                d="M107.386 8.41468V23.6705C105.104 20.6288 102.015 19.108 98.2132 19.108C94.316 19.108 91.1793 20.5338 88.708 23.3378C86.2366 26.1418 85.001 29.9439 85.001 34.744C85.001 39.5916 86.2366 43.4412 88.708 46.2453C91.1793 49.0493 94.316 50.4275 98.2132 50.4275C101.92 50.4275 104.962 48.9067 107.386 45.8651V49.7147C111.758 49.7147 115.275 46.1978 115.275 41.8254V0.572919C110.903 0.525393 107.386 4.08983 107.386 8.41468ZM100.685 43.8214C99.3063 43.8214 97.9755 43.4888 96.8349 42.9185L92.2724 44.5819C91.512 44.867 90.7041 44.1066 90.9892 43.2987L92.7002 38.7837C92.1299 37.5956 91.8447 36.3124 91.8447 34.9341C91.8447 30.7518 94.7913 27.2349 98.6884 26.2844C98.7835 26.2369 98.8785 26.2369 98.9736 26.2369C99.1162 26.1894 99.2587 26.1894 99.4013 26.1418C99.829 26.0468 100.304 26.0468 100.732 26.0468C105.627 26.0468 109.619 30.039 109.619 34.9341C109.524 39.8768 105.58 43.8214 100.685 43.8214Z"
                fill="#277DE3"
              />
              <path
                d="M104.439 36.0271C105.095 36.0271 105.627 35.4952 105.627 34.839C105.627 34.1828 105.095 33.6508 104.439 33.6508C103.783 33.6508 103.251 34.1828 103.251 34.839C103.251 35.4952 103.783 36.0271 104.439 36.0271Z"
                fill="#277DE3"
              />
              <path
                d="M100.447 36.0271C101.103 36.0271 101.635 35.4952 101.635 34.839C101.635 34.1828 101.103 33.6508 100.447 33.6508C99.7907 33.6508 99.2588 34.1828 99.2588 34.839C99.2588 35.4952 99.7907 36.0271 100.447 36.0271Z"
                fill="#277DE3"
              />
              <path
                d="M96.4547 36.0272C97.1109 36.0272 97.6429 35.4952 97.6429 34.839C97.6429 34.1828 97.1109 33.6509 96.4547 33.6509C95.7986 33.6509 95.2666 34.1828 95.2666 34.839C95.2666 35.4952 95.7986 36.0272 96.4547 36.0272Z"
                fill="#277DE3"
              />
              <path
                d="M40.2791 19.8684H43.3683V41.8253C43.3683 46.1502 39.8514 49.6671 35.5265 49.6671V19.8684H38.6157V16.5891C37.6652 16.4465 36.8573 16.0188 36.1444 15.2584C35.2414 14.3554 34.7661 13.2147 34.7661 11.9791C34.7661 10.6959 35.2414 9.60279 36.1444 8.69979C37.0474 7.7968 38.1405 7.32153 39.4237 7.32153C40.7544 7.32153 41.895 7.7968 42.798 8.69979C43.6535 9.55526 44.1287 10.6959 44.1287 11.884C44.1287 13.1672 43.701 14.3078 42.7505 15.2108C42.0376 15.9237 41.2296 16.3515 40.2791 16.5416V19.8684Z"
                fill="#277DE3"
              />
            </svg>
          </Flex>
          <Flex
            flexDirection="column"
            alignItems="center"
            gap="44px"
            alignSelf={"stretch"}
          >
            <Flex
              flexDirection="column"
              alignItems="center"
              gap="32px"
              alignSelf="stretch"
            >
              <Flex flexDirection="column" alignItems="center" gap="8px">
                <Text
                  color="var(--Text, #131619)"
                  textAlign="center"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="normal"
                >
                  Good to meet you, John
                </Text>
                <Text
                  color="var(--Text, #131619)"
                  textAlign="center"
                  className={plus_jakarta?.className}
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="400"
                >
                  Tell us your academic curriculum
                </Text>
              </Flex>
              <Flex
                height="48px"
                padding="0px 16px"
                alignItems="center"
                gap="12px"
                alignSelf="stretch"
                borderRadius="8px"
                border="1px solid var(--Input-Border, #D0px5px)"
                background="var(--Input-BG, #F9FBFF)"
              >
                <Text
                  color="var(--Input-Text-In-Active, #787878)"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                  flex="1 0 0"
                  w={"545px"}
                >
                  Choose from list
                </Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M18 10.9276L12.7071 16.2204C12.3166 16.611 11.6834 16.611 11.2929 16.2204L6 10.9276"
                    stroke="#686B6E"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </Flex>

              <Flex>
                <Text
                  color="var(--Text, #131619)"
                  textAlign="center"
                  className={plus_jakarta?.className}
                  fontSize="24px"
                  fontStyle="normal"
                  fontWeight="400"
                >
                  Tell us your preferred language
                </Text>
              </Flex>

              <Flex
                height="48px"
                padding="0px 16px"
                alignItems="center"
                gap="12px"
                alignSelf="stretch"
                borderRadius="8px"
                border="1px solid var(--Input-Border, #D0px5px)"
                background="var(--Input-BG, #F9FBFF)"
              >
                <Text
                  color="var(--Input-Text-In-Active, #787878)"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                  flex="1 0 0"
                  w={"545px"}
                >
                  Enter the language
                </Text>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M18 10.9276L12.7071 16.2204C12.3166 16.611 11.6834 16.611 11.2929 16.2204L6 10.9276"
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
          justifyContent="space-between"
          alignItems="flex-start"
          alignSelf="stretch"
        >
          <Text
            color="#000"
            textAlign="center"
            className={plus_jakarta?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="400"
            lineHeight="44px"
          >
            Back
          </Text>
          <Flex
            height="48px"
            padding="8px 24px"
            justifyContent="center"
            alignItems="center"
            gap="12px"
            borderRadius="12px"
            background="var(--Primary, #277DE3)"
          >
            <Flex gap={"12px"}>
              <Text
                color="var(--Btn-Text-Color, #FFF)"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="600"
                lineHeight="24px"
                letterSpacing="0.15px"
              >
                Continue
              </Text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
              >
                <path
                  d="M17 12.4276L13.6667 8.42755M17 12.4276L13.6667 16.4276M17 12.4276L7 12.4276"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="column" alignItems="center" gap="16px">
        <Flex width="791px" padding="8px" alignItems="flex-start" gap="16px">
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="var(--Primary, #277DE3)"
          />
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="var(--Primary, #277DE3)"
          />

          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="#D9D9D9"
          />
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="#D9D9D9"
          />
          <Flex
            height="4px"
            flex="1 0 0"
            borderRadius="127px"
            background="#D9D9D9"
          />
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
            Already have an account?
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
            Let’s Login
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Curriculam;
