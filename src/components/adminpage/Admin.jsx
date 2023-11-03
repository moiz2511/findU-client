import { Checkbox, Flex, Input, Text } from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
import { useState } from "react";
import { instance } from "../../../instance";
import { useRouter } from "next/router";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const Admin = () => {
  const router = useRouter();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const res = await instance?.post("/adminLogin/", { username, password });

    localStorage.setItem("adminToken", res?.data?.token);

    router.push("/adminboard");
  };

  return (
    <Flex
      padding="92px 424px 298.145px 424px"
      flexDirection="column"
      alignItems="center"
      gap="124px"
      borderRadius="24px"
      background="#FFF"
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
          d="M78.7024 49.0946C74.33 49.0946 70.8131 45.5777 70.8131 41.2053V31.0823C70.8131 27.3753 68.9596 25.5218 65.3001 25.5218C62.5911 25.5218 60.3099 26.6624 58.5039 28.9912V41.2528C58.5039 45.5777 54.987 49.0946 50.6621 49.0946V19.2959H58.5039V23.1455C59.597 21.8623 61.0228 20.7692 62.8763 19.9137C64.7298 19.0107 66.7258 18.583 68.9596 18.583C72.1913 18.583 74.6152 19.4385 76.231 21.1019C77.8944 22.8128 78.7024 25.094 78.7024 28.0882V49.0946Z"
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
          d="M106.885 7.84224V23.098C104.603 20.0564 101.514 18.5356 97.7122 18.5356C93.8151 18.5356 90.6784 19.9613 88.207 22.7654C85.7357 25.5694 84.5 29.3714 84.5 34.1716C84.5 39.0192 85.7357 42.8688 88.207 45.6728C90.6784 48.4768 93.8151 49.8551 97.7122 49.8551C101.419 49.8551 104.461 48.3343 106.885 45.2926V49.1422C111.257 49.1422 114.774 45.6253 114.774 41.2529V0.00046982C110.402 -0.047056 106.885 3.51738 106.885 7.84224ZM100.184 43.249C98.8053 43.249 97.4746 42.9163 96.334 42.346L91.7715 44.0094C91.011 44.2946 90.2031 43.5342 90.4883 42.7262L92.1992 38.2113C91.6289 37.0231 91.3437 35.7399 91.3437 34.3617C91.3437 30.1794 94.2903 26.6625 98.1874 25.712C98.2825 25.6644 98.3776 25.6644 98.4726 25.6644C98.6152 25.6169 98.7578 25.6169 98.9003 25.5694C99.3281 25.4743 99.8033 25.4743 100.231 25.4743C105.126 25.4743 109.118 29.4665 109.118 34.3617C109.023 39.3044 105.079 43.249 100.184 43.249Z"
          fill="#277DE3"
        />
        <path
          d="M103.938 35.4549C104.594 35.4549 105.126 34.923 105.126 34.2668C105.126 33.6106 104.594 33.0786 103.938 33.0786C103.282 33.0786 102.75 33.6106 102.75 34.2668C102.75 34.923 103.282 35.4549 103.938 35.4549Z"
          fill="#277DE3"
        />
        <path
          d="M99.946 35.4549C100.602 35.4549 101.134 34.923 101.134 34.2668C101.134 33.6106 100.602 33.0786 99.946 33.0786C99.2898 33.0786 98.7578 33.6106 98.7578 34.2668C98.7578 34.923 99.2898 35.4549 99.946 35.4549Z"
          fill="#277DE3"
        />
        <path
          d="M95.9538 35.4549C96.61 35.4549 97.1419 34.923 97.1419 34.2668C97.1419 33.6106 96.61 33.0786 95.9538 33.0786C95.2976 33.0786 94.7656 33.6106 94.7656 34.2668C94.7656 34.923 95.2976 35.4549 95.9538 35.4549Z"
          fill="#277DE3"
        />
        <path
          d="M39.7786 19.2959H42.8678V41.2528C42.8678 45.5777 39.3509 49.0946 35.026 49.0946V19.2959H38.1152V16.0166C37.1647 15.874 36.3568 15.4463 35.6439 14.6858C34.7409 13.7829 34.2656 12.6422 34.2656 11.4066C34.2656 10.1234 34.7409 9.03028 35.6439 8.12729C36.5469 7.22429 37.64 6.74902 38.9232 6.74902C40.2539 6.74902 41.3945 7.22429 42.2975 8.12729C43.153 8.98275 43.6282 10.1234 43.6282 11.3115C43.6282 12.5947 43.2005 13.7353 42.25 14.6383C41.5371 15.3512 40.7291 15.7789 39.7786 15.9691V19.2959Z"
          fill="#277DE3"
        />
      </svg>
      <Flex
        width="592px"
        padding="32px"
        flexDirection="column"
        alignItems="center"
        gap="64px"
        borderRadius="16px"
        background="#FFF"
        boxShadow="0px 4px 16px 0px rgba(0, 0, 0, 0.08)"
      >
        <Text
          color=" #277DE3"
          textAlign="center"
          className={plus_jakarta?.className}
          fontSize="36px"
          fontStyle="normal"
          fontWeight="700"
          lineHeight="44px"
        >
          Admin Login
        </Text>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          gap="48px"
          alignSelf="stretch"
        >
          <Flex
            flexDirection="column"
            alignItems="flex-start"
            gap="24px"
            alignSelf="stretch"
          >
            <Input
              placeholder={"Enter the username"}
              height="48px"
              padding="0px 16px"
              alignItems="center"
              gap="12px"
              alignSelf="stretch"
              color="#787878"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0.15px"
              onChange={(e) => {
                console.log("username", e?.target?.value);
                setUserName(e?.target?.value);
              }}
            />
            <Input
              placeholder={"Enter the password"}
              height="48px"
              padding="0px 16px"
              alignItems="center"
              gap="12px"
              alignSelf="stretch"
              color="var(--Input-Text-In-Active, #787878)"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="24px"
              letterSpacing="0.15px"
              type="password"
              onChange={(e) => {
                console.log("password", e?.target?.value);
                setPassword(e?.target?.value);
              }}
            />
          </Flex>
          <Flex
            justifyContent="space-between"
            alignItems="center"
            alignSelf="stretch"
          >
            <Flex alignItems="flex-start" gap="16px">
              <Checkbox h={"24px"} />
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
            padding="8px 24px"
            justifyContent="center"
            alignItems="center"
            gap="12px"
            alignSelf="stretch"
            borderRadius="12px"
            background="#277DE3"
          >
            <Text
              color=" #FFF"
              className={plus_jakarta?.className}
              fontSize="16px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="24px"
              letterSpacing="0.15px"
              cursor={"pointer"}
              onClick={handleLogin}
            >
              Log in
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default Admin;
