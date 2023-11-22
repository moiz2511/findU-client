import { useEffect, useState } from "react";
import { Flex, Text, Image, useToast, Input, Button } from "@chakra-ui/react";
import { instance } from "../../../instance";
import { Plus_Jakarta_Sans } from "next/font/google";
import { HiLightBulb } from "react-icons/hi";
import { GrStatusWarning } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";

const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const UserDash = ({
  text,
  setSelectedChat,
  setChatRefresh,
  SelectApiHandler,
}) => {
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [prompt, setPrompt] = useState("");

  const toast = useToast();

  const handleNewConversation = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
    }

    try {
      const response = await instance.post("/StartConversationForNew/", {
        name: selectedText,
      });
      setSelectedChat(response?.data);
      setChatRefresh(true);
      toast({
        title: "Chat created.",
        description: "Chat is created successfully",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error creating chat:", error);
    }
  };

  const leftBox = [
    {
      text: "Please provide a complete list of UK medical schools.",
    },
    {
      text: "Tell me about the course structure of the University of Leeds Computer Science programme",
    },
    {
      text: "how to pick between a BA and BSc Economics degree?",
    },
    {
      text: "what are the key dates and steps to apply for a MA course in political science at LSE?",
    },
  ];

  const middleBox = [
    {
      text: "Remembers what user said earlier in the conversation",
    },
    {
      text: "Allows user to provide follow-up corrections",
    },
    {
      text: "Information trained from original source",
    },
    {
      text: "Includes source link with answer",
    },
  ];

  const rightBox = [
    {
      text: "May occasionally generate incorrect information",
    },
    {
      text: "May occasionally produce harmful instructions or biased content",
    },
  ];

  const handleLeftBoxSelect = (index) => {
    const box = leftBox[index];
    const wholeText = leftBox[index].text;

    const extractedText = box.text.slice(0, 20);

    SelectApiHandler(wholeText, extractedText);
  };

  const handleInput = () => {
    const wholeText = prompt;

    const extractedText = prompt.slice(0, 20);

    console.log(wholeText);
    console.log(extractedText);
    SelectApiHandler(wholeText, extractedText);
  };

  useEffect(() => {
    if (selectedText) {
      handleNewConversation();
    }
  }, [selectedText]);

  return (
    <Flex
      width="95%"
      height="95vh"
      flexShrink="0"
      borderRadius="24px"
      background=" #FFF"
      padding={"12px"}
      flexDirection={"column"}
      mt={"16px"}
    >
      <Flex
        width="100%"
        flexDir={{ base: "column", md: "row" }}
        alignItems={{ base: "center", md: "flex-start" }}
        gap="24px"
        overflow={"auto"}
      >
        <Flex flexDirection="column" alignItems="center" gap="5px" flex="1 0 0">
          <HiLightBulb size={60} color="#F5F926" />
          <Text
            className={plus_jakarta?.className}
            fontWeight={700}
            marginBottom={"10px"}
          >
            Example
          </Text>
          <Flex
            padding="2px"
            flexDirection="column"
            alignItems={{ base: "center", md: "flex-start" }}
            gap="16px"
            // alignSelf="stretch"
          >
            {leftBox.map((box, index) => (
              <Flex
                key={index}
                padding="12px"
                justifyContent="center"
                alignItems="center"
                gap="8px"
                alignSelf="stretch"
                borderRadius="8px"
                background="#E8F2FE"
                flex={"1 0 0"}
                cursor={"pointer"}
                onClick={() => handleLeftBoxSelect(index)}
                _hover={{
                  // backgroundColor: 'rgb(0, 32, 69)',
                  color: '#fff',
                  boxShadow: '0 4px 8px rgba(0, 32, 69, 0.2)', // Add the box shadow on hover
                  transform: 'scale(1.04)'
                }}
                transition="background-color 0.3s, color 0.3s, box-shadow 0.3s, transform 0.3s ease-out"
              >
                <Text
                  color="var(--Text, #131619)"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                  
                >
                  {box.text}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="5px" flex="1 0 0">
          <FcSettings size={60} />
          <Text
            className={plus_jakarta?.className}
            fontWeight={700}
            marginBottom={"10px"}
          >
            Capabilities
          </Text>
          <Flex
            padding="2px"
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
            alignSelf="stretch"
          >
            {middleBox.map((box, index) => (
              <Flex
                key={index}
                padding="12px"
                justifyContent="center"
                alignItems="center"
                gap="8px"
                alignSelf="stretch"
                borderRadius="8px"
                background="#E8F2FE"
                flex={"1 0 0"}
              >
                <Text
                  color="var(--Text, #131619)"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  {box.text}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex flexDirection="column" alignItems="center" gap="5px" flex="1 0 0">
          <GrStatusWarning size={60} color="#F42B17" />
          <Text
            className={plus_jakarta?.className}
            fontWeight={700}
            marginBottom={"10px"}
          >
            Limitations
          </Text>
          <Flex
            padding="2px"
            flexDirection="column"
            alignItems="flex-start"
            gap="16px"
            alignSelf="stretch"
          >
            {rightBox.map((box, index) => (
              <Flex
                key={index}
                padding="12px"
                justifyContent="center"
                alignItems="center"
                gap="8px"
                alignSelf="stretch"
                borderRadius="8px"
                background="#E8F2FE"
                flex={"1 0 0"}
              >
                <Text
                  color="var(--Text, #131619)"
                  className={plus_jakarta?.className}
                  fontSize="14px"
                  fontStyle="normal"
                  fontWeight="400"
                  lineHeight="24px"
                  letterSpacing="0.15px"
                >
                  {box.text}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Flex>
      <Flex alignItems="flex-end" gap="16px" flex="1 0 0" alignSelf="stretch">
        <Input
          onKeyPress={(e) => {
            if (e.key === "Enter" && prompt.trim() === "") {
              e.preventDefault();
            } else if (e.key === "Enter") {
              handleInput();
            }
          }}
          className={plus_jakarta?.className}
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          p={5}
          placeholder="Send a message"
        />
        <Button
          isDisabled={prompt === ""}
          p={5}
          border={"1px solid #ccc"}
          backgroundColor={"#fff"}
        >
          <Image src="/Right_Arrow.png" />
        </Button>
      </Flex>
    </Flex>
  );
};
export default UserDash;
