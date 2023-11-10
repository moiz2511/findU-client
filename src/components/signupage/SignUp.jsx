import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Text,
  Image,
  Button,
  Avatar,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { BsFillPersonFill } from "react-icons/bs";
import { instance } from "../../../instance";
import { useRouter } from "next/router";

const SignUp = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignUp = () => {
    instance
      .post("/signup/", { username, password })
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem('token',token)
        router.push("/position");
      })
      .catch((error) => {
        console.error("Error signing up:", error);
      });
  };
  return (
    <Box height={"100vh"}>
      <Flex height={"100%"}>
        <Flex
          flex={1}
          flexDir={"column"}
          justifyContent={{base: '', xl: 'center'}}
          alignItems={"center"}
          gap={5}
         
        >
          <Flex marginTop={'2%'} >
          <Image src="/Logo.png" alt="Company Logo" />
          </Flex>
          <Flex alignItems={"center"} flexDir={"column"} gap={4}>
            <Text fontFamily={"Plus Jakarta Sans"} fontSize={"2rem"}>
              Hi 👋
            </Text>
            <Text
              color={"#696969"}
              fontSize={"0.85rem"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Sign up to Chatgpt to start creating magic.
            </Text>
          </Flex>
          {!showSignUp && (
            <Button
              backgroundColor={"#277DE3"}
              width={"80%"}
              borderRadius={"10px"}
              color={"#fff"}
              onClick={() => setShowSignUp(true)}
            >
              Sign up with email
            </Button>
          )}
          {showSignUp && (
            <Flex
              flexDir={"column"}
              gap={2}
              width={"100%"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <InputGroup width="80%">
                <Input
                  fontFamily="Plus Jakarta Sans"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {/* <InputLeftElement
                  pointerEvents="none"
                  children={<BsFillPersonFill color="var(--Caption, #696969)" />}
                /> */}
              </InputGroup>

              <InputGroup width="80%">
                <Input
                  fontFamily="Plus Jakarta Sans"
                  placeholder="Enter the email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                {/* <InputLeftElement
                  pointerEvents="none"
                  children={<EmailIcon color="var(--Caption, #696969)" />}
                /> */}
              </InputGroup>

              <InputGroup width="80%">
                <Input
                  fontFamily="Plus Jakarta Sans"
                  type="password"
                  placeholder="Enter the password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {/* <InputLeftElement
                  pointerEvents="none"
                  children={<LockIcon color="var(--Caption, #696969)" />}
                /> */}
              </InputGroup>
            </Flex>
          )}

          {showSignUp && (
            <Button
              backgroundColor={"#277DE3"}
              width={"80%"}
              borderRadius={"10px"}
              color={"#fff"}
              p={2}
              onClick={handleSignUp}
            >
              Sign Up with Email
            </Button>
          )}

          <Flex alignItems="center" gap="16px" justifyContent={"center"}>
            <Flex
              width="230px"
              height="1px"
              background="var(--Caption, #696969)"
            />
            <Text
              color="var(--Caption, #696969)"
              className={"Plus Jakarta Sans"}
              fontSize="12px"
              fontStyle="normal"
              fontWeight="500"
              lineHeight="18px"
              // letterSpacing="0.15px"
            >
              or sign up with
            </Text>
            <Flex
              width="244.5px"
              height="1px"
              background="var(--Caption, #696969)"
            />
          </Flex>
          <Flex gap={12}>
            <Button color={"#686B6E"} leftIcon={<Image src="/LinkedIn.png" />}>
              LinkedIn
            </Button>
            <Button color={"#686B6E"}  leftIcon={<FcGoogle />}>
              Google
            </Button>
            <Button color={"#686B6E"}  leftIcon={<Image src="/Outlook.png" />}>
              Outlook
            </Button>
          </Flex>
          <Text fontSize={'14px'} fontFamily={"Plus Jakarta Sans"} color={"#686B6E"}>
            Already Have an account?
            <span
              style={{
                color: "#277DE3",
                fontWeight: "bold",
                marginLeft: "7px",
                cursor: "pointer",
                fontSize:'14px'
              }}
              onClick={() => router.push("/login")}
            >
              Login
            </span>{" "}
          </Text>
          {showSignUp && (
            <Flex
              flexDir={"column"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Text fontFamily={"Plus Jakarta Sans"} fontSize={'14px'} color={"#686B6E"}>
                By continuing, you are indicating that you accept our
              </Text>
              <Text
                style={{
                  color: "#277DE3",
                  fontWeight: "bold",
                  marginLeft: "7px",
                  cursor: "pointer",
                  textDecoration: "underline",
                }}
                fontSize={'14px'}
                onClick={() => router.push('/terms')}
              >
                Terms of Service and Privacy Policy.
              </Text>
            </Flex>
          )}
        </Flex>
        <Flex
          flexDir={"column"}
          gap={12}
          justifyContent={"center"}
          alignItems={"flex-start"}
          backgroundColor={"#F5F8FF"}
          flex={0.9}
          p={10}
          fontFamily={"Plus Jakarta Sans"}
          fontWeight={"500"}
        >
          <Text>
            FindU proved to be an indispensable partner throughout my UK study
            adventure. Its unwavering support, from assisting me in exploring
            top-tier universities to helping me adapt to campus life, made all
            the differen
          </Text>
          <Flex gap={3}>
            <Avatar alignSelf={"center"} src="/images/Mary.png" size={"sm"} />
            <Flex flexDir={"column"}>
              <Text fontFamily={"Plus Jakarta Sans"} fontWeight={"500"}>
                Mary Jane
              </Text>
              <Text fontFamily={"Plus Jakarta Sans"} fontSize={"12px"}>
                {" "}
                UI UX Artist{" "}
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default SignUp;
