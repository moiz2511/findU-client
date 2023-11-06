import {
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  chakra,
  Box,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Button,
  List,
  ListItem,
  Card,
  CardBody,
} from "@chakra-ui/react";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
import { Inter } from "next/font/google";
import { instance } from "../../../instance";
import ChatDetails from "../adminpage/ChatDetails";
import { unstable_useCacheRefresh, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import Profile from "../adminpage/Profile";
import { BsTrash3Fill } from "react-icons/bs";
import { RiEdit2Fill } from "react-icons/ri";
const inter = Inter({
  subsets: ["latin"],
});

const AdminBoard = () => {
  const router = useRouter();
  const toast = useToast();
  const [name, setName] = useState("");
  const [users, setUsers] = useState(null);
  const [refresh, setRefresh] = useState(1);
  const [pageRefresh, setPageRefresh] = useState(false);
  const [isUserSelected, setIsUserSelected] = useState(true);
  const [isDataSelected, setIsDataSelected] = useState(false);
  const [isPromptSelected, setIsPromptSelected] = useState(false);
  const [isProfileSelectd, setIsProfileSelected] = useState(false);
  const [selectedID, setSelectedID] = useState(null);
  const [selectedName, setSelectedName] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState(null);
  const [selectedURLId, setSelectedURLId] = useState("");
  const [subModal, setSubModal] = useState(false);
  const [singleWebUrl, setSingleWebURL] = useState([]);
  const [webURL, setWebURL] = useState([]);
  const [urls, setUrls] = useState([]);
  const [subURLs, setSubURLs] = useState(null);
  const [urlInput, setUrlInput] = useState("");
  const [prompt, setPrompt] = useState("");
  const [activePrompt, setActivePrompt] = useState("");
  const [singleURLs, setSingleURLS] = useState(null);

  // Function to add a URL to the array
  const addUrl = () => {
    if (urlInput.trim() !== "") {
      setUrls([...urls, urlInput]);
      setUrlInput(""); // Clear the input field
    }
  };

  const fetchData = async () => {
    const token = localStorage.getItem("adminToken");

    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
    }

    const res = await instance?.post("/getProfile/");
    console.log(res);
    setName(res?.data?.profile.name);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProfileClick = (id, name, status) => {
    setIsProfileSelected(true);
    setSelectedID(id);
    setSelectedName(name);
    setSelectedStatus(status);
    setIsUserSelected(false);
    setIsDataSelected(false);
    setIsPromptSelected(false);
  };

  const handleProfileClose = () => {
    setIsProfileSelected(false);
    setIsUserSelected(true);
  };

  const handleUserClick = () => {
    setIsUserSelected(true);
    setIsDataSelected(false);
    setIsPromptSelected(false);
    setIsProfileSelected(false);
  };

  const handleDataClick = () => {
    setIsUserSelected(false);
    setIsDataSelected(true);
    setIsPromptSelected(false);
    setIsProfileSelected(false);
  };

  const handlePromptClick = () => {
    setIsUserSelected(false);
    setIsDataSelected(false);
    setIsPromptSelected(true);
    setIsProfileSelected(false);
  };

  const fetchUsers = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
    }

    const res = await instance?.get("/GetAllUsers/");

    console.log("users", res?.data?.users);
    setUsers(res?.data?.users);
  };
  useEffect(() => {
    fetchUsers();
  }, [pageRefresh]);

  const DeleteUser = async (ID) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    // Define the data you want to send in the request body
    const requestBody = {
      id: ID,
      // Add more data as needed
    };

    try {
      const res = await instance.post("/deleteUser/", requestBody);

      console.log("Response data:", res.data);
      toast({
        title: "User deleted",
        description: "User is deleted successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setPageRefresh(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete user",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const addSingleURL = async (data) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    const requestBody = {
      urls: data,
    };

    try {
      const res = await instance.post("/addSingleWebUrls/", requestBody);
      toast({
        title: "URL Added",
        description: "URL is added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add URL",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const addURL = async (data) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    const requestBody = {
      urls: data,
    };

    try {
      const res = await instance.post("/addWebUrls/", requestBody);
      toast({
        title: "URL Added",
        description: "URL's are added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add URL",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const addPrompt = async (data) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    const requestBody = {
      prompt: data,
    };

    try {
      const res = await instance.post("/createPrompt/", requestBody);
      toast({
        title: "Prompt Added",
        description: "Prompt is added successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add prompt",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const fetchWebURL = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    try {
      const res = await instance.post("/getWeb/");
      console.log(res);

      setWebURL(res.data.urls);
      console.log(webURL);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchSingleWebURL = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    try {
      const res = await instance.post("/getSingleWeb/");
      console.log(res);

      setSingleURLS(res.data.urls);
      console.log(webURL);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchSubWebURL = async (ID) => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    const body = {
      id: ID,
    };

    try {
      const res = await instance.post("/getWebSubURLS/", body);
      console.log(res);
      setSubURLs(res.data.subUrls);
      console.log(subURLs);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const fetchActivePrompt = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    try {
      const res = await instance.post("/getActivePrompt/");
      console.log(res);

      setActivePrompt(res.data.prompt);
      console.log(webURL);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchWebURL();
    fetchSingleWebURL();
  }, []);

  const openSubModal = (data) => {
    setSubModal(true);
    setSelectedURLId(data);
  };

  useEffect(() => {
    if (selectedURLId) {
      fetchSubWebURL(selectedURLId);
    }
  }, [selectedURLId]);

  const closeSubModal = () => {
    setSubModal(false);
  };

  return (
    <Flex>
      <Modal onClose={closeSubModal} size={"md"} isOpen={subModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sub URLs</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box p={5}>
              <List>
                {subURLs &&
                  subURLs.map((sub, index) => (
                    <ListItem key={index}>
                      {" "}
                      {index + 1}: {sub}
                    </ListItem>
                  ))}
              </List>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
      <Flex
        flex={0.15}
        // width="264px"
        // height="87vh"
        padding="24px 16px"
        flexDirection="column"
        alignItems="flex-start"
        gap="32px"
        flexShrink="0"
        background="var(--colors-white, #FFF)"
        overflow={"auto"}
      >
        <Flex
          padding="24px"
          alignItems="center"
          gap="8px"
          alignSelf="stretch"
          borderBottom="1px solid var(--Input-Border, #D0D5DD)"
          cursor={'pointer'}
          onClick={() => router.push('/')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="128"
            height="38"
            viewBox="0 0 128 38"
            fill="none"
          >
            <path
              d="M0 36.9652V5.97607H21.9357C21.9357 9.19665 19.3235 11.7731 16.1387 11.7731H6.62007V18.2858H15.8166C19.0372 18.2858 21.6136 20.8981 21.6136 24.0829H6.62007V30.3451C6.58429 34.0309 3.64999 36.9652 0 36.9652Z"
              fill="#277DE3"
            />
            <path
              d="M59.2592 36.9651C55.967 36.9651 53.319 34.3171 53.319 31.025V23.4029C53.319 20.6118 51.9234 19.2162 49.168 19.2162C47.1283 19.2162 45.4107 20.075 44.0509 21.8284V31.0608C44.0509 34.3171 41.4028 36.9651 38.1465 36.9651V14.5285H44.0509V17.427C44.8739 16.4608 45.9474 15.6378 47.343 14.9937C48.7386 14.3138 50.2415 13.9917 51.9234 13.9917C54.3567 13.9917 56.1817 14.6358 57.3984 15.8883C58.6508 17.1765 59.2592 18.8941 59.2592 21.1485V36.9651Z"
              fill="#277DE3"
            />
            <path
              d="M93.6104 36.9654C92.6442 36.9654 91.8212 36.6075 91.1413 35.9276C90.4614 35.2477 90.1035 34.3889 90.1035 33.4585C90.1035 32.5281 90.4614 31.6693 91.1413 30.9894C91.8212 30.3095 92.6442 29.9517 93.6104 29.9517C94.6123 29.9517 95.4354 30.3095 96.1153 30.9894C96.7952 31.6693 97.153 32.4923 97.153 33.4585C97.153 34.4247 96.7952 35.2477 96.1153 35.9276C95.4354 36.6075 94.6123 36.9654 93.6104 36.9654Z"
              fill="#277DE3"
            />
            <path
              d="M125.101 12.6323C125.96 12.2029 126.962 11.9882 127.964 11.9882V24.5842C127.964 28.5563 126.783 31.7053 124.421 34.0312C122.059 36.3572 118.588 37.5381 113.972 37.5381C109.392 37.5381 105.921 36.3572 103.523 34.0312C101.161 31.7053 99.9805 28.5563 99.9805 24.5842V0.000488281C101.841 0.000488281 103.487 0.751956 104.704 1.96862C105.921 3.18528 106.672 4.86713 106.672 6.69212V24.4053C106.672 26.6239 107.316 28.4131 108.569 29.7371C109.857 31.0612 111.646 31.7053 113.972 31.7053C116.298 31.7053 118.087 31.0612 119.34 29.7371C120.592 28.4131 121.236 26.6597 121.236 24.4053V18.7514C121.236 16.6043 122.238 14.672 123.849 13.4553V9.4833C123.133 9.37594 122.525 9.05388 121.988 8.48133C121.308 7.80143 120.95 6.94262 120.95 6.01223C120.95 5.04605 121.272 4.22302 121.988 3.54312C122.668 2.86322 123.491 2.50538 124.457 2.50538C125.459 2.50538 126.282 2.86322 126.962 3.54312C127.642 4.22302 128 5.04605 128 6.01223C128 6.9784 127.677 7.80143 126.962 8.48133C126.425 9.0181 125.817 9.34016 125.101 9.4833V12.6323Z"
              fill="#277DE3"
            />
            <path
              d="M80.4793 5.90474V17.3915C78.7617 15.1013 76.4357 13.9562 73.573 13.9562C70.6387 13.9562 68.2769 15.0297 66.4162 17.141C64.5554 19.2522 63.625 22.115 63.625 25.7292C63.625 29.3792 64.5554 32.2777 66.4162 34.389C68.2769 36.5002 70.6387 37.538 73.573 37.538C76.3642 37.538 78.6543 36.3929 80.4793 34.1027V37.0012C83.7715 37.0012 86.4195 34.3532 86.4195 31.061V0.000353747C83.1274 -0.0354304 80.4793 2.64838 80.4793 5.90474ZM75.4338 32.5639C74.396 32.5639 73.3941 32.3135 72.5353 31.8841L69.1 33.1365C68.5274 33.3512 67.9191 32.7787 68.1338 32.1703L69.422 28.7708C68.9926 27.8762 68.7779 26.9101 68.7779 25.8723C68.7779 22.7233 70.9965 20.0753 73.9308 19.3596C74.0024 19.3238 74.074 19.3238 74.1456 19.3238C74.2529 19.288 74.3603 19.288 74.4676 19.2522C74.7897 19.1807 75.1475 19.1807 75.4696 19.1807C79.1553 19.1807 82.1612 22.1866 82.1612 25.8723C82.0896 29.5939 79.1196 32.5639 75.4338 32.5639Z"
              fill="#277DE3"
            />
            <path
              d="M78.2598 26.6955C78.7539 26.6955 79.1544 26.2949 79.1544 25.8009C79.1544 25.3068 78.7539 24.9062 78.2598 24.9062C77.7658 24.9062 77.3652 25.3068 77.3652 25.8009C77.3652 26.2949 77.7658 26.6955 78.2598 26.6955Z"
              fill="#277DE3"
            />
            <path
              d="M75.254 26.6955C75.7481 26.6955 76.1486 26.2949 76.1486 25.8009C76.1486 25.3068 75.7481 24.9062 75.254 24.9062C74.7599 24.9062 74.3594 25.3068 74.3594 25.8009C74.3594 26.2949 74.7599 26.6955 75.254 26.6955Z"
              fill="#277DE3"
            />
            <path
              d="M72.2481 26.6955C72.7422 26.6955 73.1427 26.2949 73.1427 25.8009C73.1427 25.3068 72.7422 24.9062 72.2481 24.9062C71.754 24.9062 71.3535 25.3068 71.3535 25.8009C71.3535 26.2949 71.754 26.6955 72.2481 26.6955Z"
              fill="#277DE3"
            />
            <path
              d="M29.9517 14.5286H32.2777V31.0609C32.2777 34.3172 29.6297 36.9653 26.3733 36.9653V14.5286H28.6993V12.0595C27.9836 11.9521 27.3753 11.6301 26.8385 11.0575C26.1586 10.3776 25.8008 9.51879 25.8008 8.5884C25.8008 7.62223 26.1586 6.79919 26.8385 6.11929C27.5184 5.43939 28.3415 5.08154 29.3076 5.08154C30.3096 5.08154 31.1684 5.43939 31.8483 6.11929C32.4924 6.76341 32.8503 7.62222 32.8503 8.51683C32.8503 9.483 32.5282 10.3418 31.8125 11.0217C31.2758 11.5585 30.6674 11.8805 29.9517 12.0237V14.5286Z"
              fill="#277DE3"
            />
          </svg>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          gap="16px"
          alignSelf="stretch"
        >
          <Flex
            padding="12px 0px"
            justifyContent="flex-end"
            alignItems="center"
            gap="8px"
            alignSelf="stretch"
            borderRadius="8px"
            onClick={handleUserClick}
            cursor={"pointer"}
            background={isUserSelected || isProfileSelectd ? "#DEECFC" : "#fff"}
          >
            <Flex
              padding="0px 8px"
              alignItems="center"
              gap="8px"
              flex="1 0 0"
              borderLeft={
                isUserSelected || isProfileSelectd
                  ? "2px solid var(--Primary, #277DE3)"
                  : "none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                  fill={
                    isUserSelected || isProfileSelectd ? "#277DE3" : "#A0A5B9"
                  }
                />
              </svg>
              <Text
                color={isUserSelected || isProfileSelectd ? "#000" : "#A0A5B9"}
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
              >
                Users
              </Text>
            </Flex>
          </Flex>

          <Flex
            padding="12px 0px"
            justifyContent="flex-end"
            alignItems="center"
            gap="8px"
            alignSelf="stretch"
            borderRadius="8px"
            onClick={handleDataClick}
            cursor={"pointer"}
            background={isDataSelected ? "#DEECFC" : "#fff"}
          >
            <Flex
              padding="0px 8px"
              alignItems="center"
              gap="8px"
              flex="1 0 0"
              borderLeft={
                isDataSelected ? "2px solid var(--Primary, #277DE3)" : "none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                  fill={isDataSelected ? "#277DE3" : "#A0A5B9"}
                />
              </svg>
              <Text
                color={isDataSelected ? "#000" : "#A0A5B9"}
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
              >
                Data
              </Text>
            </Flex>
          </Flex>

          <Flex
            padding="12px 0px"
            justifyContent="flex-end"
            alignItems="center"
            gap="8px"
            alignSelf="stretch"
            borderRadius="8px"
            onClick={handlePromptClick}
            cursor={"pointer"}
            background={isPromptSelected ? "#DEECFC" : "#fff"}
          >
            <Flex
              padding="0px 8px"
              alignItems="center"
              gap="8px"
              flex="1 0 0"
              borderLeft={
                isPromptSelected ? "2px solid var(--Primary, #277DE3)" : "none"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                  fill={isPromptSelected ? "#277DE3" : "#A0A5B9"}
                />
              </svg>
              <Text
                color={isPromptSelected ? "#000" : "#A0A5B9"}
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
              >
                Prompt
              </Text>
            </Flex>
          </Flex>

          <Flex
            padding="12px 0px"
            justifyContent="flex-end"
            alignItems="center"
            gap="8px"
            alignSelf="stretch"
            borderRadius="8px"
          >
            <Flex padding="0px 8px" alignItems="center" gap="8px" flex="1 0 0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="17"
                viewBox="0 0 14 17"
                fill="none"
              >
                <path
                  d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                  fill="#A0A5B9"
                />
              </svg>
              <Text
                color="#A0A5B9"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
              >
                Payment
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>

      <Flex flex={0.85} flexDir={"column"}>
        <Flex
          padding="16px 24px"
          justifyContent="flex-end"
          alignItems="center"
          gap="16px"
          background="#FFF"
        >
          <Flex alignItems="flex-start" gap="20px">
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 1.5C9.9233 1.5 7.89323 2.11581 6.16652 3.26957C4.4398 4.42332 3.09399 6.0632 2.29927 7.98182C1.50455 9.90045 1.29661 12.0116 1.70176 14.0484C2.1069 16.0852 3.10693 17.9562 4.57538 19.4246C6.04383 20.8931 7.91476 21.8931 9.95156 22.2982C11.9884 22.7034 14.0996 22.4955 16.0182 21.7007C17.9368 20.906 19.5767 19.5602 20.7304 17.8335C21.8842 16.1068 22.5 14.0767 22.5 12C22.497 9.21614 21.3898 6.54715 19.4213 4.57867C17.4528 2.61018 14.7839 1.50298 12 1.5ZM12.75 16.5C12.75 16.6989 12.671 16.8897 12.5303 17.0303C12.3897 17.171 12.1989 17.25 12 17.25C11.8011 17.25 11.6103 17.171 11.4697 17.0303C11.329 16.8897 11.25 16.6989 11.25 16.5V15.75C11.25 15.5511 11.329 15.3603 11.4697 15.2197C11.6103 15.079 11.8011 15 12 15C12.1989 15 12.3897 15.079 12.5303 15.2197C12.671 15.3603 12.75 15.5511 12.75 15.75V16.5ZM13.1475 12.5205C13.0241 12.5808 12.9209 12.6756 12.8503 12.7934C12.7798 12.9112 12.7449 13.047 12.75 13.1842V13.5C12.75 13.6989 12.671 13.8897 12.5303 14.0303C12.3897 14.171 12.1989 14.25 12 14.25C11.8011 14.25 11.6103 14.171 11.4697 14.0303C11.329 13.8897 11.25 13.6989 11.25 13.5V13.185C11.243 12.7507 11.3651 12.3241 11.6007 11.9592C11.8364 11.5943 12.175 11.3075 12.5738 11.1353C12.8918 11.0044 13.155 10.7678 13.319 10.4655C13.4829 10.1631 13.5376 9.81347 13.4738 9.4755C13.4136 9.15059 13.2478 8.85464 13.0021 8.63363C12.7565 8.41261 12.4447 8.27889 12.1153 8.25324C11.7858 8.22759 11.4572 8.31144 11.1803 8.49177C10.9034 8.6721 10.6938 8.93882 10.584 9.2505C10.5525 9.34516 10.5024 9.43258 10.4367 9.50765C10.3709 9.58271 10.2909 9.6439 10.2012 9.68765C10.1116 9.73139 10.0141 9.7568 9.91446 9.7624C9.81484 9.76799 9.71511 9.75365 9.62111 9.72022C9.52711 9.68679 9.44072 9.63494 9.367 9.56771C9.29329 9.50047 9.23373 9.41921 9.19181 9.32867C9.14989 9.23813 9.12646 9.14014 9.12289 9.04043C9.11932 8.94072 9.13568 8.84131 9.171 8.748C9.33776 8.27651 9.61974 7.85418 9.9913 7.51943C10.3629 7.18469 10.8122 6.94814 11.2985 6.83131C11.7848 6.71447 12.2925 6.72106 12.7756 6.85047C13.2587 6.97987 13.7017 7.228 14.0645 7.57227C14.4272 7.91654 14.6982 8.34604 14.8526 8.8217C15.0071 9.29736 15.0402 9.80409 14.9489 10.2958C14.8577 10.7875 14.6449 11.2486 14.33 11.6371C14.0152 12.0257 13.6081 12.3293 13.146 12.5205H13.1475Z"
                fill="#7A7A7A"
              />
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <g clip-path="url(#clip0_494_10066)">
                <path
                  d="M22.683 9.394L20.803 9.155C20.6497 8.68276 20.4595 8.22334 20.234 7.781L21.395 6.286C21.6218 5.99897 21.7348 5.63834 21.7123 5.27318C21.6898 4.90802 21.5334 4.564 21.273 4.307L19.698 2.732C19.4409 2.47005 19.0961 2.31222 18.7298 2.28879C18.3635 2.26535 18.0014 2.37795 17.713 2.605L16.22 3.766C15.7774 3.54036 15.3176 3.3501 14.845 3.197L14.606 1.32C14.5625 0.956364 14.3873 0.621267 14.1135 0.378048C13.8397 0.134829 13.4862 0.000339105 13.12 0L10.88 0C10.123 0 9.484 0.567 9.394 1.317L9.155 3.197C8.68221 3.34966 8.22241 3.53994 7.78 3.766L6.286 2.605C5.99879 2.37858 5.63825 2.26586 5.27322 2.28836C4.90819 2.31087 4.56422 2.46702 4.307 2.727L2.732 4.301C2.46977 4.55818 2.31178 4.90315 2.28834 5.26969C2.2649 5.63623 2.37767 5.99852 2.605 6.287L3.766 7.781C3.54011 8.22315 3.34984 8.6826 3.197 9.155L1.32 9.394C0.567 9.484 0 10.123 0 10.88V13.12C0 13.877 0.567 14.516 1.317 14.606L3.197 14.845C3.352 15.322 3.543 15.782 3.766 16.219L2.605 17.714C2.37816 18.001 2.26517 18.3617 2.28768 18.7268C2.31019 19.092 2.46662 19.436 2.727 19.693L4.302 21.268C4.55948 21.5294 4.90426 21.6868 5.27044 21.71C5.63662 21.7333 5.99853 21.6208 6.287 21.394L7.781 20.233C8.218 20.457 8.678 20.648 9.155 20.802L9.394 22.678C9.484 23.433 10.123 24 10.88 24H13.12C13.877 24 14.516 23.433 14.606 22.683L14.845 20.803C15.3172 20.6497 15.7767 20.4595 16.219 20.234L17.714 21.395C18.319 21.865 19.173 21.81 19.693 21.273L21.268 19.698C21.53 19.4409 21.6878 19.0961 21.7112 18.7298C21.7346 18.3635 21.622 18.0014 21.395 17.713L20.234 16.219C20.458 15.782 20.649 15.322 20.803 14.845L22.679 14.606C23.0426 14.5625 23.3777 14.3873 23.621 14.1135C23.8642 13.8397 23.9987 13.4862 23.999 13.12V10.88C23.9992 10.5143 23.8654 10.1611 23.623 9.8873C23.3805 9.6135 23.0461 9.43801 22.683 9.394ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z"
                  fill="#7A7A7A"
                />
              </g>
              <defs>
                <clipPath id="clip0_494_10066">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg> */}
            <Flex gap={"12px"} alignItems={"center"}>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_494_10066)">
                  <path
                    d="M22.683 9.394L20.803 9.155C20.6497 8.68276 20.4595 8.22334 20.234 7.781L21.395 6.286C21.6218 5.99897 21.7348 5.63834 21.7123 5.27318C21.6898 4.90802 21.5334 4.564 21.273 4.307L19.698 2.732C19.4409 2.47005 19.0961 2.31222 18.7298 2.28879C18.3635 2.26535 18.0014 2.37795 17.713 2.605L16.22 3.766C15.7774 3.54036 15.3176 3.3501 14.845 3.197L14.606 1.32C14.5625 0.956364 14.3873 0.621267 14.1135 0.378048C13.8397 0.134829 13.4862 0.000339105 13.12 0L10.88 0C10.123 0 9.484 0.567 9.394 1.317L9.155 3.197C8.68221 3.34966 8.22241 3.53994 7.78 3.766L6.286 2.605C5.99879 2.37858 5.63825 2.26586 5.27322 2.28836C4.90819 2.31087 4.56422 2.46702 4.307 2.727L2.732 4.301C2.46977 4.55818 2.31178 4.90315 2.28834 5.26969C2.2649 5.63623 2.37767 5.99852 2.605 6.287L3.766 7.781C3.54011 8.22315 3.34984 8.6826 3.197 9.155L1.32 9.394C0.567 9.484 0 10.123 0 10.88V13.12C0 13.877 0.567 14.516 1.317 14.606L3.197 14.845C3.352 15.322 3.543 15.782 3.766 16.219L2.605 17.714C2.37816 18.001 2.26517 18.3617 2.28768 18.7268C2.31019 19.092 2.46662 19.436 2.727 19.693L4.302 21.268C4.55948 21.5294 4.90426 21.6868 5.27044 21.71C5.63662 21.7333 5.99853 21.6208 6.287 21.394L7.781 20.233C8.218 20.457 8.678 20.648 9.155 20.802L9.394 22.678C9.484 23.433 10.123 24 10.88 24H13.12C13.877 24 14.516 23.433 14.606 22.683L14.845 20.803C15.3172 20.6497 15.7767 20.4595 16.219 20.234L17.714 21.395C18.319 21.865 19.173 21.81 19.693 21.273L21.268 19.698C21.53 19.4409 21.6878 19.0961 21.7112 18.7298C21.7346 18.3635 21.622 18.0014 21.395 17.713L20.234 16.219C20.458 15.782 20.649 15.322 20.803 14.845L22.679 14.606C23.0426 14.5625 23.3777 14.3873 23.621 14.1135C23.8642 13.8397 23.9987 13.4862 23.999 13.12V10.88C23.9992 10.5143 23.8654 10.1611 23.623 9.8873C23.3805 9.6135 23.0461 9.43801 22.683 9.394ZM12 17C9.243 17 7 14.757 7 12C7 9.243 9.243 7 12 7C14.757 7 17 9.243 17 12C17 14.757 14.757 17 12 17Z"
                    fill="#7A7A7A"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_494_10066">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg> */}
              <Text
                color="#000"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="16px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="20px"
              >
                {name}
              </Text>
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M11.7166 5.23204C11.858 5.08339 12.049 5 12.248 5C12.4471 5 12.6381 5.08339 12.7795 5.23204C12.8493 5.30503 12.9048 5.39204 12.9427 5.48799C12.9805 5.58395 13 5.68694 13 5.79097C13 5.895 12.9805 5.99799 12.9427 6.09395C12.9048 6.18991 12.8493 6.27691 12.7795 6.34991L8.53202 10.7683C8.39026 10.9168 8.19913 11 8 11C7.80087 11 7.60974 10.9168 7.46798 10.7683L3.22049 6.34991C3.15065 6.27691 3.0952 6.18991 3.05735 6.09395C3.01949 5.99799 3 5.895 3 5.79097C3 5.68694 3.01949 5.58395 3.05735 5.48799C3.0952 5.39204 3.15065 5.30503 3.22049 5.23204C3.36192 5.08339 3.55292 5 3.75197 5C3.95101 5 4.14201 5.08339 4.28345 5.23204L8.00163 8.8556L11.7166 5.23204Z"
                  fill="#303030"
                />
              </svg> */}
            </Flex>
          </Flex>
        </Flex>

        <Flex
          // width="1440px"
          width="100%"
          height="100%"
          background="#F5F6FA"
          overflow={"auto"}
          flexDir={"column"}
        >
          {/* <Flex flexDirection="column" alignItems="flex-start" gap="4px"> */}

          {isProfileSelectd && (
            <Profile
              id={selectedID}
              name={selectedName}
              status={selectedStatus}
              onClose={handleProfileClose}
            />
          )}

          {isUserSelected && (
            <Flex flexDir={"column"} height={"100vh"}>
              <Flex
                // width="95%"
                padding="16px"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                // gap="8px"
                borderRadius="16px"
                background="#FFF"
                h={"126px"}
                ml={"24px"}
                mr={"24px"}
                mt={"34px"}
              >
                <Flex
                  gap="8px"
                  alignItems={"flex-start"}
                  borderRadius="6px"
                  flexDir={"column"}
                >
                  <Flex gap={"8px"} alignItems={"center"}>
                    <Text
                      color="#111827"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      Home
                    </Text>
                    <Text
                      color=" #9CA3AF"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      /
                    </Text>
                    <Text
                      color="  #9CA3AF"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      Users
                    </Text>
                  </Flex>

                  <Flex>
                    <Text
                      color="#111827"
                      className={plus_jakarta?.className}
                      fontSize="24px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="150%"
                      letterSpacing="-0.24px"
                    >
                      Users
                    </Text>
                  </Flex>
                </Flex>
              </Flex>

              <Flex
                // width="1000px"
                padding="16px"
                flexDirection="column"
                alignItems="flex-start"
                gap="24px"
                borderRadius="16px"
                background="#FFF"
                ml={"24px"}
                mr={"24px"}
                mt={"34px"}
              >
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  alignSelf="stretch"
                >
                  <Text
                    color="#111827"
                    className={plus_jakarta?.className}
                    fontSize="18px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="150%"
                    letterSpacing="-0.18px"
                    w={"746px"}
                  >
                    All Customers
                  </Text>
                  {/* <Flex
                    padding="8px 12px"
                    alignItems="center"
                    gap="8px"
                    borderRadius="8px"
                    background="#F3F4F6"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_747_497)">
                        <path
                          d="M2.5 7.49984L5.83333 4.1665M5.83333 4.1665L9.16667 7.49984M5.83333 4.1665V15.8332"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.5007 12.4998L14.1673 15.8332M14.1673 15.8332L10.834 12.4998M14.1673 15.8332V4.1665"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_747_497">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <Text
                      color="#111827"
                      className={plus_jakarta?.className}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="150%"
                      whiteSpace={"nowrap"}
                    >
                      Sort by: Date added{" "}
                    </Text>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_747_502)">
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#9CA3AF"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_747_502">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Flex>

                  <Flex
                    padding="8px 12px"
                    alignItems="center"
                    gap="8px"
                    borderRadius="8px"
                    border="1px solid  ##E5E7EB"
                    background=" #FFF"
                    boxShadow="0px 0px 2px 0px #E5E7EB"
                    ml={"16px"}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_747_89)">
                        <path
                          d="M11.6667 6.66683C12.5871 6.66683 13.3333 5.92064 13.3333 5.00016C13.3333 4.07969 12.5871 3.3335 11.6667 3.3335C10.7462 3.3335 10 4.07969 10 5.00016C10 5.92064 10.7462 6.66683 11.6667 6.66683Z"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33398 5H10.0007"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.334 5H16.6673"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M6.66667 11.6668C7.58714 11.6668 8.33333 10.9206 8.33333 10.0002C8.33333 9.07969 7.58714 8.3335 6.66667 8.3335C5.74619 8.3335 5 9.07969 5 10.0002C5 10.9206 5.74619 11.6668 6.66667 11.6668Z"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33398 10H5.00065"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.33398 10H16.6673"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M14.1667 16.6668C15.0871 16.6668 15.8333 15.9206 15.8333 15.0002C15.8333 14.0797 15.0871 13.3335 14.1667 13.3335C13.2462 13.3335 12.5 14.0797 12.5 15.0002C12.5 15.9206 13.2462 16.6668 14.1667 16.6668Z"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.33398 15H12.5007"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.834 15H16.6673"
                          stroke="#4B5563"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_747_89">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                    <Text
                      color=" #4B5563"
                      className={plus_jakarta?.className}
                      fontSize="16px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="150%"
                    >
                      Filters
                    </Text>
                  </Flex> */}
                </Flex>

                <Flex
                  w={"100%"}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <TableContainer w={"100%"} borderRadius={"8px"}>
                    <Table>
                      <Thead>
                        <Tr>
                          <Th
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="150%"
                            background="#F9FAFB"
                            boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                          >
                            ID
                          </Th>
                          <Th
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="150%"
                            background="#F9FAFB"
                            boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                          >
                            Username
                          </Th>
                          <Th
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="150%"
                            background="#F9FAFB"
                            boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                          >
                            Email
                          </Th>
                          <Th
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="150%"
                            background="#F9FAFB"
                            boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                          >
                            Subscription
                          </Th>
                          <Th
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            fontWeight="500"
                            lineHeight="150%"
                            background="#F9FAFB"
                            boxShadow="0px 3px 2px 0px rgba(0, 0, 0, 0.08)"
                          >
                            Actions
                          </Th>
                        </Tr>
                      </Thead>

                      <Tbody>
                        {users?.map((user, i) => (
                          <Tr key={i}>
                            <Td>{i + 1}</Td>
                            <Td>{user?.name}</Td>
                            <Td></Td>
                            <Td></Td>
                            <Td
                              display={"flex"}
                              gap={"12px"}
                              alignItems={"center"}
                            >
                              <span
                                style={{
                                  cursor: "pointer",
                                  transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "#277DE3")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#898989")
                                }
                                onClick={() =>
                                  handleProfileClick(
                                    user.id,
                                    user.name,
                                    user.status
                                  )
                                }
                              >
                                <RiEdit2Fill size={25} color="#898989" />
                              </span>
                              <span
                                style={{
                                  cursor: "pointer",
                                  transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) =>
                                  (e.target.style.color = "red")
                                }
                                onMouseLeave={(e) =>
                                  (e.target.style.color = "#898989")
                                }
                                onClick={() => DeleteUser(user.id)}
                              >
                                <BsTrash3Fill size={20} color="#898989" />
                              </span>
                            </Td>
                          </Tr>
                        ))}
                      </Tbody>
                    </Table>
                  </TableContainer>
                </Flex>

                <Flex
                  justifyContent="flex-end"
                  alignItems="center"
                  gap="16px"
                  alignSelf="stretch"
                >
                  <Flex
                    padding="12px 0px"
                    alignItems="center"
                    gap="11px"
                    borderTop="1px solid  #EAECF0"
                  >
                    {/* <Flex
                      padding="10px 8px"
                      justifyContent="center"
                      alignItems="center"
                      gap="8px"
                      borderRadius="8px"
                      border="1px solid #D0D5DD"
                      background=" #FFF"
                      boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675"
                          stroke="#344054"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Flex>
                    <Text
                      color="#344054)"
                      className={inter?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="20px"
                    >
                      Page <chakra.span fontWeight="500">1</chakra.span> of{" "}
                      <chakra.span fontWeight="500">10</chakra.span>
                    </Text>
                    <Flex
                      padding="10px 8px"
                      justifyContent="center"
                      alignItems="center"
                      gap="8px"
                      borderRadius="8px"
                      border="1px solid #D0D5DD"
                      background=" #FFF"
                      boxShadow="0px 1px 2px 0px rgba(16, 24, 40, 0.05)"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M15.8327 10.0001H4.16602M4.16602 10.0001L9.99935 15.8334M4.16602 10.0001L9.99935 4.16675"
                          stroke="#344054"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </Flex> */}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          )}

          {isDataSelected && (
            <Flex flexDir={"column"} height={"100vh"}>
              <Flex
                // width="95%"
                padding="16px"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                // gap="8px"
                borderRadius="16px"
                background="#FFF"
                h={"126px"}
                ml={"24px"}
                mr={"24px"}
                mt={"34px"}
              >
                <Flex
                  gap="8px"
                  alignItems={"flex-start"}
                  borderRadius="6px"
                  flexDir={"column"}
                >
                  <Flex gap={"8px"} alignItems={"center"}>
                    <Text
                      color="#111827"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      Home
                    </Text>
                    <Text
                      color=" #9CA3AF"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      /
                    </Text>
                    <Text
                      color="  #9CA3AF"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      Data
                    </Text>
                  </Flex>

                  <Flex>
                    <Text
                      color="#111827"
                      className={plus_jakarta?.className}
                      fontSize="24px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="150%"
                      letterSpacing="-0.24px"
                    >
                      Data
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Card
                overflow={"auto"}
                // width={"90%"}
                borderRadius={"20px"}
                backgroundColor={"#FFFFFF"}
                ml={6}
                mr={10}
                mt={2}
              >
                <CardBody>
                  <Text
                    color="#111827"
                    className={plus_jakarta?.className}
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="150%"
                    letterSpacing="-0.24px"
                    marginBottom={"4%"}
                  >
                    Add Data
                  </Text>
                  <Box marginBottom={"3%"}>
                    <Text
                      className={plus_jakarta?.className}
                      marginBottom={"1.5%"}
                    >
                      Add Single Web URL
                    </Text>
                    <Input
                      value={singleWebUrl[0]}
                      onChange={(e) => setSingleWebURL([e.target.value])}
                      placeholder="https://uni.edu.pk"
                    />
                    <Button
                      marginTop={"1.5%"}
                      onClick={() => addSingleURL(singleWebUrl)}
                    >
                      Create Single URL
                    </Button>
                  </Box>
                  <Box marginBottom={"3%"}>
                    <Text
                      className={plus_jakarta?.className}
                      marginBottom={"1.5%"}
                    >
                      Add Web URLs
                    </Text>
                    <Input
                      placeholder="https://uni.edu.pk"
                      value={urlInput}
                      onChange={(e) => setUrlInput(e.target.value)}
                    />
                    <Button marginTop={"1.5%"} onClick={addUrl}>
                      Add URL
                    </Button>
                    <Button
                      marginTop={"1.5%"}
                      marginLeft={"1.5%"}
                      onClick={() => addURL(urls)}
                    >
                      Create Web URL
                    </Button>

                    <List>
                      {urls.map((url, index) => (
                        <ListItem key={index}>{url}</ListItem>
                      ))}
                    </List>
                  </Box>

                  <Flex flexDirection={"row"} justifyContent={"space-evenly"}>
                    <Box maxH={'400px'} overflow={'auto'} >
                      <Text
                        color="#111827"
                        className={plus_jakarta?.className}
                        fontSize="24px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="150%"
                        letterSpacing="-0.24px"
                        marginBottom={"3%"}
                      >
                        {" "}
                        Web URL&apos;s{" "}
                      </Text>
                      {webURL?.map((url, index) => (
                        <Box key={index} marginBottom={"6%"}>
                          <Flex alignItems={"center"}>
                            <Text
                              color="#111827"
                              className={plus_jakarta?.className}
                              fontSize="16px"
                              fontStyle="normal"
                              lineHeight="150%"
                              letterSpacing="-0.24px"
                            >
                              URL: {url.url}
                            </Text>
                            <Button
                              ml={7}
                              size={"sm"}
                              onClick={() => openSubModal(url.id)}
                            >
                              View Sub URL&apos;s
                            </Button>
                          </Flex>
                          <Text
                            color="#111827"
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            lineHeight="150%"
                            letterSpacing="-0.24px"
                          >
                            Status: {url.statuss}
                          </Text>
                        </Box>
                      ))}
                    </Box>
                    <Box maxH={'400px'} overflow={'auto'} >
                      <Text
                        color="#111827"
                        className={plus_jakarta?.className}
                        fontSize="24px"
                        fontStyle="normal"
                        fontWeight="600"
                        lineHeight="150%"
                        letterSpacing="-0.24px"
                        marginBottom={"3%"}
                      >
                        {" "}
                        Single Web URL&apos;s{" "}
                      </Text>
                      {singleURLs?.map((url, index) => (
                        <Box key={index} marginBottom={"8%"}>
                          <Text
                            color="#111827"
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            lineHeight="150%"
                            letterSpacing="-0.24px"
                          >
                            URL: {url.url}
                          </Text>

                          <Text
                            color="#111827"
                            className={plus_jakarta?.className}
                            fontSize="16px"
                            fontStyle="normal"
                            lineHeight="150%"
                            letterSpacing="-0.24px"
                          >
                            Status: {url.status}
                          </Text>
                        </Box>
                      ))}
                    </Box>
                  </Flex>
                </CardBody>
              </Card>
            </Flex>
          )}

          {isPromptSelected && (
            <Flex flexDir={"column"} height={"100vh"}>
              <Flex
                // width="95%"
                padding="16px"
                flexDirection="column"
                justifyContent="center"
                alignItems="flex-start"
                // gap="8px"
                borderRadius="16px"
                background="#FFF"
                h={"126px"}
                ml={"24px"}
                mr={"24px"}
                mt={"34px"}
              >
                <Flex
                  gap="8px"
                  alignItems={"flex-start"}
                  borderRadius="6px"
                  flexDir={"column"}
                >
                  <Flex gap={"8px"} alignItems={"center"}>
                    <Text
                      color="#111827"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      Home
                    </Text>
                    <Text
                      color=" #9CA3AF"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      /
                    </Text>
                    <Text
                      color="  #9CA3AF"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="500"
                      lineHeight="100%"
                    >
                      Prompt
                    </Text>
                  </Flex>

                  <Flex>
                    <Text
                      color="#111827"
                      className={plus_jakarta?.className}
                      fontSize="24px"
                      fontStyle="normal"
                      fontWeight="600"
                      lineHeight="150%"
                      letterSpacing="-0.24px"
                    >
                      Prompt
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
              <Card
                overflow={"auto"}
                // width={"90%"}
                borderRadius={"20px"}
                backgroundColor={"#FFFFFF"}
                ml={6}
                mr={10}
                mt={2}
              >
                <CardBody>
                  <Text
                    color="#111827"
                    className={plus_jakarta?.className}
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="150%"
                    letterSpacing="-0.24px"
                    marginBottom={"4%"}
                  >
                    Add Prompts
                  </Text>
                  <Box marginBottom={"3%"}>
                    <Text
                      className={plus_jakarta?.className}
                      marginBottom={"1.5%"}
                    >
                      Add Prompt
                    </Text>
                    <Input
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      placeholder="e.g: Tell me more about University"
                    />
                    <Button
                      marginTop={"1.5%"}
                      onClick={() => addPrompt(prompt)}
                    >
                      Create Prompt
                    </Button>
                  </Box>
                  <Box marginBottom={"3%"}>
                    <Text
                      className={plus_jakarta?.className}
                      marginBottom={"1.5%"}
                    >
                      Active Prompt
                    </Text>
                    <Input value={activePrompt} readOnly />
                    <Button marginTop={"1.5%"} onClick={fetchActivePrompt}>
                      Get Active Prompt
                    </Button>
                  </Box>
                  {/* <Box marginBottom={"3%"}>
                  <Text
                    className={plus_jakarta?.className}
                    marginBottom={"1.5%"}
                  >
                    Add Web URLs
                  </Text>
                  <Input
                    placeholder="https://uni.edu.pk"
                    value={urlInput}
                    onChange={(e) => setUrlInput(e.target.value)}
                  />
                  <Button marginTop={"1.5%"} onClick={addUrl}>
                    Add URL
                  </Button>
                  <Button
                    marginTop={"1.5%"}
                    marginLeft={"1.5%"}
                    onClick={() => addURL(urls)}
                  >
                    Create Web URL
                  </Button>

                  <List>
                    {urls.map((url, index) => (
                      <ListItem key={index}>{url}</ListItem>
                    ))}
                  </List>
                </Box>

                <Flex flexDirection={'row'} justifyContent={'space-evenly'} >
                <Box>
                  <Text
                    color="#111827"
                    className={plus_jakarta?.className}
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="150%"
                    letterSpacing="-0.24px"
                    marginBottom={"3%"}
                  >
                    {" "}
                    Web URL's{" "}
                  </Text>
                  {webURL?.map((url, index) => (
                    <Box key={index} marginBottom={"6%"}>
                      <Flex  alignItems={'center'} >
                      <Text
                        color="#111827"
                        className={plus_jakarta?.className}
                        fontSize="16px"
                        fontStyle="normal"
                        
                        lineHeight="150%"
                        letterSpacing="-0.24px"
                      >
                        URL: {url.url}
                      </Text>
                      <Button ml={7} size={'sm'} >View Sub URL's</Button>
                      </Flex>
                      <Text
                        color="#111827"
                        className={plus_jakarta?.className}
                        fontSize="16px"
                        fontStyle="normal"
                        
                        lineHeight="150%"
                        letterSpacing="-0.24px"
                      >
                        Status: {url.statuss}
                      </Text>
                    </Box>
                  ))}
                </Box>
                <Box>
                  <Text
                    color="#111827"
                    className={plus_jakarta?.className}
                    fontSize="24px"
                    fontStyle="normal"
                    fontWeight="600"
                    lineHeight="150%"
                    letterSpacing="-0.24px"
                    marginBottom={"3%"}
                  >
                    {" "}
                    Single Web URL's{" "}
                  </Text>
                  {webURL?.map((url, index) => (
                    <Box key={index} marginBottom={"8%"}>
                     
                      <Text
                        color="#111827"
                        className={plus_jakarta?.className}
                        fontSize="16px"
                        fontStyle="normal"
                        
                        lineHeight="150%"
                        letterSpacing="-0.24px"
                      >
                        URL: {url.url}
                      </Text>
                     
                      <Text
                        color="#111827"
                        className={plus_jakarta?.className}
                        fontSize="16px"
                        fontStyle="normal"
                        
                        lineHeight="150%"
                        letterSpacing="-0.24px"
                      >
                        Status: {url.statuss}
                      </Text>
                    </Box>
                  ))}
                </Box>
                </Flex> */}
                </CardBody>
              </Card>
            </Flex>
          )}
          {/* </Flex> */}
        </Flex>
      </Flex>
    </Flex>
  );
};
export default AdminBoard;
