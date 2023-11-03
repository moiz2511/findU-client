import { useState, useEffect, useRef } from "react";
import {
  Flex,
  Text,
  Image,
  Input,
  Box,
  IconButton,
  Button,
} from "@chakra-ui/react";
import { instance } from "../../../instance";
import { motion } from "framer-motion";

import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const UserChat = ({ chat }) => {
  const [prompt, setPrompt] = useState("");
  const [responses, setResponses] = useState(null);
  const [refreshState, setRefresh] = useState(false);
  const [currentResponse, setCurrentResponse] = useState([]);
  const [isDone, setIsDone] = useState(true);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, [responses, currentResponse]);

  const handleButtonClick = () => {
    if (prompt.trim() !== "") {
      const updatedResponses = [...responses];
      updatedResponses.push({ msg: prompt });
      setResponses(updatedResponses);
      setRefresh(!refreshState);
      setPrompt(""); // Clear the prompt state
      fetchResponse();
      console.log(responses);
    }
  };

  const fetchChat = async (ID) => {
    const token = localStorage.getItem("token");

    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
    }

    const body = {
      conId: ID,
    };

    const res = instance?.post("/getConversationChat/", body);
    setResponses((await res).data.conversations);
    console.log(responses);
  };

  const fetchResponse = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      console.error("No token found");
      return;
    }

    const body = {
      uuid: chat?.uuid, // Include the conversation ID or UUID
      query: prompt, // Include the user's query
    };

    try {
      const response = await fetch(
        `${"https://nuranest.catansg.com/pikka/api"}${"/NewConversationStreaming/"}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(body),
        }
      );

      let result = "";
      let first = true;

      const reader = response.body.getReader();
      const processStream = async ({ done, value }) => {
        if (done) {
          // Once the streaming response is complete, update the 'res' attribute
          const updatedResponses = [...responses];
          updatedResponses.push({ msg: prompt, res: result });
          setResponses(updatedResponses);
          setRefresh(!refreshState);
          setIsDone(true);
          setCurrentResponse("");

          console.log(result);
          return;
        }

        const chunk = new TextDecoder().decode(value);
        setIsDone(false);
        result += chunk;
        console.log("chunk=> ", chunk);

        setCurrentResponse((currentResponse) => [...currentResponse, chunk]);
        setRefresh(!refreshState);

        // if (first){
        //   let updatedResponses = JSON.parse(JSON.stringify(responses));
        //   updatedResponses.push({ id: responses.length, res: chunk, msg: prompt });
        //   setResponses(updatedResponses);
        // }else{
        //   let updatedResponses = JSON.parse(JSON.stringify(responses));
        //   let last = updatedResponses[updatedResponses.length-1].res
        //   updatedResponses[updatedResponses.length-1].res = last + chunk
        //   updatedResponses[updatedResponses.length-1].msg= prompt

        //   setResponses(updatedResponses);
        // }
        first = false;

        return reader.read().then(processStream);
      };

      return reader.read().then(processStream);
    } catch (error) {
      console.error("Error while fetching streaming data:", error);
    }
  };

  function NewlineText2({ text }) {
    const newText = text.split("\n").map((str, index, array) =>
      index === array.length - 1 ? (
        str
      ) : (
        <>
          {str}
          <br />
        </>
      )
    );
    return <>{newText}</>;
  }

  useEffect(() => {
    fetchChat(chat?.id);
  }, [chat]);

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
      gap={"14px"}
      overflow={"auto"}
    >
      <Flex height={"100%"} gap={5} flexDir={"column"} overflow={"auto"}>
        <Text
          color={"#002045"}
          textAlign={"center"}
          className={plus_jakarta?.className}
          fontSize="18px"
          fontStyle="normal"
          fontWeight="700"
        >
          {chat?.name}
        </Text>
        {responses &&
          responses.map((res, index) => (
            <>
              <Flex
                justifyContent={"flex-end"}
                alignItems="flex-end"
                gap="16px"
              >
                <Flex
                  padding="10px"
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="flex-start"
                  gap="14px"
                  borderRadius="6px"
                  background="#E2F1FC"
                  boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                  maxW={"60%"}
                >
                  <Text
                    color="#000"
                    className={plus_jakarta?.className}
                    fontSize="14px"
                    fontStyle="normal"
                    fontWeight="400"
                    lineHeight="normal"
                  >
                    {res.msg}
                  </Text>
                </Flex>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="17"
                  viewBox="0 0 14 17"
                  fill="none"
                >
                  <path
                    d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                    fill="#277DE3"
                  />
                </svg>
              </Flex>
              {res.res && (
                <Flex alignItems="center" gap="16px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 14 17"
                    fill="none"
                  >
                    <path
                      d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                      fill="#277DE3"
                    />
                  </svg>

                  <Flex
                    padding="10px"
                    justifyContent="center"
                    alignItems="flex-start"
                    gap="14px"
                    borderRadius="6px"
                    background="#F4F4F4;"
                    boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
                    maxW={"70%"}
                  >
                    <Text
                      color="#000"
                      className={plus_jakarta?.className}
                      fontSize="14px"
                      fontStyle="normal"
                      fontWeight="400"
                      lineHeight="normal"
                    >
                      <NewlineText2 text={res.res} />
                    </Text>
                  </Flex>
                </Flex>
              )}
            </>
          ))}

        {!isDone && (
          <Flex alignItems="center" gap="16px">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 14 17"
              fill="none"
            >
              <path
                d="M6.57348 8.24534C7.63229 8.24534 8.54916 7.86556 9.29831 7.11628C10.0475 6.36716 10.4272 5.45054 10.4272 4.3916C10.4272 3.33298 10.0475 2.41627 9.29819 1.66686C8.54891 0.917834 7.63216 0.538086 6.57348 0.538086C5.51451 0.538086 4.59786 0.917834 3.84874 1.66699C3.09962 2.41614 2.71971 3.33289 2.71971 4.3916C2.71971 5.45054 3.09958 6.36728 3.84886 7.11644C4.59814 7.86546 5.51489 8.24534 6.57348 8.24534ZM13.3165 12.8413C13.2949 12.5295 13.2512 12.1894 13.1868 11.8303C13.1219 11.4684 13.0383 11.1264 12.9382 10.8138C12.8348 10.4907 12.6942 10.1716 12.5204 9.8658C12.3399 9.54843 12.128 9.27205 11.8902 9.04465C11.6416 8.80674 11.3371 8.61546 10.9851 8.4759C10.6342 8.33715 10.2454 8.26684 9.82956 8.26684C9.66621 8.26684 9.50828 8.33384 9.20322 8.53246C8.98637 8.67366 8.76888 8.81387 8.55075 8.95308C8.34116 9.08665 8.05722 9.21177 7.7065 9.32505C7.36435 9.43577 7.01694 9.49193 6.67404 9.49193C6.33117 9.49193 5.98385 9.43577 5.64132 9.32505C5.29101 9.21186 5.00708 9.08677 4.7977 8.95321C4.55489 8.79805 4.3352 8.65646 4.14464 8.5323C3.83996 8.33371 3.68186 8.26668 3.51855 8.26668C3.10252 8.26668 2.71387 8.33712 2.36315 8.47606C2.01134 8.61534 1.70678 8.80662 1.45787 9.04477C1.22022 9.2723 1.00819 9.54852 0.828 9.8658C0.654313 10.1716 0.513688 10.4905 0.410158 10.8139C0.310158 11.1265 0.226565 11.4684 0.161627 11.8303C0.0972838 12.1889 0.0535965 12.5291 0.0319715 12.8416C0.0104598 13.1561 -0.000202754 13.4712 2.91917e-06 13.7864C2.91917e-06 14.6217 0.265502 15.2978 0.789062 15.7964C1.30615 16.2885 1.99034 16.5381 2.82237 16.5381H10.5265C11.3585 16.5381 12.0424 16.2886 12.5596 15.7965C13.0833 15.2982 13.3488 14.6219 13.3488 13.7863C13.3487 13.4639 13.3379 13.1459 13.3165 12.8413Z"
                fill="#277DE3"
              />
            </svg>

            <Flex
              padding="10px"
              justifyContent="center"
              alignItems="flex-start"
              gap="14px"
              borderRadius="6px"
              background="#F4F4F4;"
              boxShadow="0px 1px 3px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.06)"
              maxW={"70%"}
            >
              <Text
                color="#000"
                className={plus_jakarta?.className}
                fontSize="14px"
                fontStyle="normal"
                fontWeight="400"
                lineHeight="normal"
              >
                {currentResponse.map((ele, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 1 }}
                  >
                    <NewlineText2 text={ele} />
                  </motion.span>
                ))}
              </Text>
            </Flex>
          </Flex>
        )}
        <div ref={bottomRef} />
      </Flex>

      <Flex alignItems="flex-end" gap="16px" flex="1 0 0" alignSelf="stretch">
        <Input
          onKeyPress={(e) => {
            if (e.key === "Enter" && prompt.trim() === "") {
              e.preventDefault();
            } else if (e.key === "Enter") {
              handleButtonClick();
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
export default UserChat;
