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
  chakra
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { FcGoogle } from "react-icons/fc";
import { instance } from "../../../instance";
import { useRouter } from "next/router";

const Login = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async () => {
    if (username && password !== "") {
      const res = await instance?.post("/login/", { username, password });
      localStorage.setItem("token", res?.data?.token);
      // alert('Logged In Successfully!')
      router.push('/userboard')
    } else {
      alert('Please Enter Credentials');
    }
  };
  return (
    <Box height={"100vh"}>
      <Flex height={"100%"}>
        <Flex
          flex={1}
          flexDir={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
          p={10}
        >
          <Image src="/Logo.png" alt="Company Logo" />
          <Flex flexDir={"column"} gap={4}>
            <Text fontFamily={"Plus Jakarta Sans"} fontSize={"2rem"}>
              Let&apos;s get{" "}
              <chakra.span style={{ color: "#277DE3", fontWeight: "bold" }}>
                creative!
              </chakra.span>
            </Text>
            <Text
              color={"#696969"}
              fontSize={"0.85rem"}
              fontFamily={"Plus Jakarta Sans"}
            >
              Log in to Chatgpt to start creating magic.
            </Text>
          </Flex>
          {!showLogin && (
            <Button
              backgroundColor={"#277DE3"}
              width={"80%"}
              borderRadius={"10px"}
              color={"#fff"}
              onClick={() => setShowLogin(true)}
            >
              Log in with email
            </Button>
          )}
          {showLogin && (
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
                  placeholder="Enter the email"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                
              </InputGroup>

              <InputGroup width="80%">
                <Input
                  fontFamily="Plus Jakarta Sans"
                  type="password"
                  placeholder="Enter the password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                
              </InputGroup>
            </Flex>
          )}

          {showLogin && (
            <Button
              backgroundColor={"#277DE3"}
              width={"80%"}
              borderRadius={"10px"}
              color={"#fff"}
              p={2}
              onClick={handleLogin}
            >
              Log in
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
              letterSpacing="0.15px"
            >
              or login with
            </Text>
            <Flex
              width="244.5px"
              height="1px"
              background="var(--Caption, #696969)"
            />
          </Flex>
          <Flex gap={12}>
            <Button color={"#686B6E"} leftIcon={<FcGoogle />}>
              Google
            </Button>
            <Button
              color={"#686B6E"}
              leftIcon={<Image src="/LinkedIn.png" />}
            >
              LinkedIn
            </Button>
            <Button
              color={"#686B6E"}
              leftIcon={<Image src="/Outlook.png" />}
            >
              Outlook
            </Button>
          </Flex>
          <Text fontFamily={"Plus Jakarta Sans"} color={"#686B6E"}>
            {" "}
            Don&apos;t have an account?{" "}
            <span
              style={{
                color: "#277DE3",
                fontWeight: "bold",
                marginLeft: "7px",
                cursor: "pointer",
              }}
              onClick={() => router.push('/signup')}
            >
              Sign Up
            </span>{" "}
          </Text>
          {showLogin && (
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
          fontSize={'20px'}
          fontFamily={"Plus Jakarta Sans"}
          fontWeight={"500"}
        >
          <Text>
            &quot;FindU proved to be an indispensable partner throughout my UK study
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

export default Login;
