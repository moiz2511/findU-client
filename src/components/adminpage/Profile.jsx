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
  useToast,
  Button
} from "@chakra-ui/react";
import { AiFillCloseCircle, AiFillCheckCircle, AiOutlineEye } from "react-icons/ai";
import { BsTrash3Fill } from "react-icons/bs";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});
import ChatDetails from "@/components/adminpage/ChatDetails";
import { useEffect, useState } from "react";
import { instance } from "../../../instance";
import { useRouter } from "next/router";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Profile = ({ id, name, status, onClose }) => {
  const [conversations, setConversations] = useState(null);
  const [isChatDetail, setIsChatDetail] = useState(false);
  const [selectedConv, setSelectedConv] = useState(null);
  const toast = useToast();

  const fetchChats = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
    }

    const res = await instance?.post("/GetUserConversations/", { id });

    console.log("setConversations", res?.data?.conversations);
    setConversations(res?.data?.conversations);
  };

  const DeleteUser = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    try {
      const res = await instance.post("/deleteUser/", { id });
      console.log("Response data:", res.data);
      alert("User Deleted Successfully!");
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const ActivateUser = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    try {
      const res = await instance.post("/activateUsers/", { id });
      console.log("Response data:", res.data);
      toast({
        title: "User Activated",
        description: "User is activated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const DeactivateUser = async () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    try {
      const res = await instance.post("/dactivateUsers/", { id });
      console.log("Response data:", res.data);
      toast({
        title: "User Deactivated",
        description: "User is deactivated successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    fetchChats();
  }, [id, name, status]);

  const handleChat = (id) => {
    setIsChatDetail(true);
    setSelectedConv(id);
  };

  const handleChatClose = () => {
    setIsChatDetail(false);
  };

  return (
    <>
      {isChatDetail ? (
        <ChatDetails id={selectedConv} onClose={handleChatClose} />
      ) : (
        <Flex
          background="#F5F6FA"
          flexDirection="column"
          alignItems="flex-start"
          height={"100vh"}
        >
          <Flex
            width="95%"
            padding="4px 16px"
            justifyContent="space-between"
            alignItems="center"
            gap="8px"
            borderRadius="16px"
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
              <Flex flexDir={"row"} gap={5}>
                <Flex
                  cursor={"pointer"}
                  onClick={onClose}
                  justifyContent={"center"}
                  alignItems={"center"}
                >
                  <AiOutlineArrowLeft size={25} />
                </Flex>
                <Flex flexDir={"column"}>
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
                    <Text
                      color="  #9CA3AF"
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
                      User profile
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
                      Users Profile
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
            <Flex justifyContent="flex-end" alignItems="center" gap="16px">
              {status === "ACTIVE" ? (
                <Button
                  color={"#E76161"}
                  borderRadius={"12px"}
                  backgroundColor={"#EFE3E3"}
                  leftIcon={<AiFillCloseCircle size={20} />}
                  onClick={() => DeactivateUser()}
                >
                  Deactivate User
                </Button>
              ) : (
                <Button
                  color={"#39f76b"}
                  borderRadius={"12px"}
                  backgroundColor={"#bbf0c9"}
                  leftIcon={<AiFillCheckCircle size={20} />}
                  onClick={() => ActivateUser()}
                >
                  Activate User
                </Button>
              )}

              <Button
                leftIcon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <g clip-path="url(#clip0_747_675)">
                      <path
                        d="M22.8 4H19.08C18.8015 2.87141 18.0646 1.85735 16.9935 1.12872C15.9224 0.40009 14.5826 0.00145452 13.2 0L10.8 0C9.41735 0.00145452 8.07758 0.40009 7.0065 1.12872C5.93542 1.85735 5.19852 2.87141 4.92 4H1.2C0.88174 4 0.576515 4.10536 0.351472 4.29289C0.126428 4.48043 0 4.73478 0 5C0 5.26522 0.126428 5.51957 0.351472 5.70711C0.576515 5.89464 0.88174 6 1.2 6H2.4V19C2.40191 20.3256 3.03466 21.5964 4.15946 22.5338C5.28427 23.4711 6.80929 23.9984 8.4 24H15.6C17.1907 23.9984 18.7157 23.4711 19.8405 22.5338C20.9653 21.5964 21.5981 20.3256 21.6 19V6H22.8C23.1183 6 23.4235 5.89464 23.6485 5.70711C23.8736 5.51957 24 5.26522 24 5C24 4.73478 23.8736 4.48043 23.6485 4.29289C23.4235 4.10536 23.1183 4 22.8 4ZM10.8 2H13.2C13.9443 2.00076 14.6702 2.19338 15.2779 2.55144C15.8857 2.90951 16.3457 3.41549 16.5948 4H7.4052C7.6543 3.41549 8.11428 2.90951 8.72206 2.55144C9.32985 2.19338 10.0557 2.00076 10.8 2ZM19.2 19C19.2 19.7956 18.8207 20.5587 18.1456 21.1213C17.4705 21.6839 16.5548 22 15.6 22H8.4C7.44522 22 6.52955 21.6839 5.85442 21.1213C5.17929 20.5587 4.8 19.7956 4.8 19V6H19.2V19Z"
                        fill="#E76161"
                      />
                      <path
                        d="M10 17.9995C10.2652 17.9995 10.5196 17.8942 10.7071 17.7066C10.8946 17.5191 11 17.2647 11 16.9995V10.9995C11 10.7343 10.8946 10.4799 10.7071 10.2924C10.5196 10.1049 10.2652 9.99951 10 9.99951C9.73478 9.99951 9.48043 10.1049 9.29289 10.2924C9.10536 10.4799 9 10.7343 9 10.9995V16.9995C9 17.2647 9.10536 17.5191 9.29289 17.7066C9.48043 17.8942 9.73478 17.9995 10 17.9995Z"
                        fill="#E76161"
                      />
                      <path
                        d="M14 17.9995C14.2652 17.9995 14.5196 17.8942 14.7071 17.7066C14.8946 17.5191 15 17.2647 15 16.9995V10.9995C15 10.7343 14.8946 10.4799 14.7071 10.2924C14.5196 10.1049 14.2652 9.99951 14 9.99951C13.7348 9.99951 13.4804 10.1049 13.2929 10.2924C13.1054 10.4799 13 10.7343 13 10.9995V16.9995C13 17.2647 13.1054 17.5191 13.2929 17.7066C13.4804 17.8942 13.7348 17.9995 14 17.9995Z"
                        fill="#E76161"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_747_675">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                }
                color={"#E76161"}
                borderRadius={"12px"}
                backgroundColor={"#EFE3E3"}
                onClick={() => DeleteUser()}
              >
                Delete user
              </Button>
              {/* <Flex
                padding="8px 24px"
                justifyContent="center"
                alignItems="center"
                gap="12px"
                borderRadius="12px"
                background="#277DE3"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20 19.0002H12.5M4 15.8522V18.8002C4 18.9106 4.08954 19.0002 4.2 19.0002H7.14793C7.20097 19.0002 7.25184 18.9791 7.28935 18.9416L17.8586 8.37236C17.9367 8.29425 17.9367 8.16762 17.8586 8.08951L14.9107 5.14159C14.8325 5.06348 14.7059 5.06348 14.6278 5.14159L4.05858 15.7108C4.02107 15.7483 4 15.7992 4 15.8522Z"
                    stroke="#F9FBFF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <Text
                  color="#fff"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="600"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  Edit user
                </Text>
              </Flex> */}
            </Flex>
          </Flex>
          <Flex
            background={"#fff"}
            width="95%"
            padding="4px 16px"
            flexDir="column"
            alignItems="flex-start"
            gap="12px"
            borderRadius="16px"
            h={"126px"}
            ml={"24px"}
            mr={"24px"}
            mt={"34px"}
          >
            <Text
              color=" #111827"
              className={plus_jakarta?.className}
              fontSize="18px"
              fontStyle="normal"
              fontWeight="600"
              lineHeight="150%"
              letterSpacing="-0.18px"
            >
              Personal details
            </Text>

            <Flex alignItems="center" gap="72px" alignSelf="stretch">
              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="8px"
                flex="1 0 0"
              >
                <Text
                  color="#768F97"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="22px"
                >
                  User ID
                </Text>
                <Text
                  color="#324A51"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="26px"
                >
                  {id}
                </Text>
              </Flex>

              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="8px"
                flex="1 0 0"
              >
                <Text
                  color="#768F97"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="22px"
                >
                  Full Name
                </Text>
                <Text
                  color="#324A51"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="26px"
                >
                  {name}
                </Text>
              </Flex>

              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="8px"
                flex="1 0 0"
              >
                <Text
                  color="#768F97"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="22px"
                >
                  Email
                </Text>
                <Text
                  color="#324A51"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="26px"
                >
                  john@gmail.com
                </Text>
              </Flex>

              <Flex
                flexDirection="column"
                alignItems="flex-start"
                gap="8px"
                flex="1 0 0"
              >
                <Text
                  color="#768F97"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="22px"
                >
                  Status
                </Text>
                <Text
                  color="#324A51"
                  className={plus_jakarta?.className}
                  fontSize="16px"
                  fontStyle="normal"
                  fontWeight="500"
                  lineHeight="26px"
                >
                  {status}
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Flex
            width="95%"
            padding="6px 16px"
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
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
                w={"100%"}
              >
                Chat history
              </Text>
            </Flex>

            <Flex width={"100%"}>
              <TableContainer w={"100%"} borderRadius={"8px"}>
                <Table size="md">
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
                        #
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
                        Chats
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
                        Date of Chat
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
                    {conversations?.map((conv, i) => (
                      <Tr key={i}>
                        <Td>{i + 1}</Td>
                        <Td>{conv?.name}</Td>
                        <Td>01-Oct-23</Td>

                        <Td display={"flex"} gap={"12px"} alignItems={"center"}>
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
                            onClick={() => handleChat(conv.id)}
                          >
                            <AiOutlineEye size={25} color="#898989" />
                          </span>
                          <span
                            style={{
                              cursor: "pointer",
                              transition: "color 0.3s",
                            }}
                            onMouseEnter={(e) => (e.target.style.color = "red")}
                            onMouseLeave={(e) =>
                              (e.target.style.color = "#898989")
                            }
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
            {conversations?.length <= 0 && (
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                width={"100%"}
              >
                <Text>No History Available</Text>
              </Flex>
            )}
          </Flex>
        </Flex>
      )}
    </>
  );
};
export default Profile;
