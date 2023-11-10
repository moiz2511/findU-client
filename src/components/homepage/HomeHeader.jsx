import { Flex, Text, Image, chakra } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const HomeHeader = () => {
  const router = useRouter()
  return (
    <Flex
      padding="100px 120px"
      flexDirection="column"
      alignItems="center"
      gap="52px"
      background="#FFF"
    >
      <Flex flexDirection="column" alignItems="center" gap="32px">
        <Flex
          flexDirection="column"
          alignItems="center"
          gap="24px"
          alignSelf="stretch"
        >
          <Text
            color="var(--Text, #131619)"
            textAlign="center"
            className={plus_jakarta?.className}
            fontSize="68px"
            fontStyle="normal"
            fontWeight="700"
            lineHeight="74px"
          >
            Supercharge your <br /> University Research
            {/* <chakra.span
              background="var(--Gradient, linear-gradient(45deg, #499CFF 0%, #002875 100%))"
              backgroundClip="text"
              WebkitBackgroundClip="text"
              WebkitTextFillColor="transparent"
              className={plus_jakarta?.className}
              fontSize="68px"
              fontStyle="normal"
              fontWeight="700"
              lineHeight="74px"
            >
              {" "}
              Ai Content
            </chakra.span> */}
          </Text>

          <Text
            color="var(--Input-Text-In-Active, #787878)"
            textAlign="center"
            className={plus_jakarta?.className}
            fontSize="16px"
            fontStyle="normal"
            fontWeight="500"
            lineHeight="24px"
          >
            Automate time-consuming university course research with our AI
            education counsellor in your preferred language
          </Text>
        </Flex>
      </Flex>
      <Flex
        padding="12px 30px"
        justifyContent="center"
        alignItems="center"
        gap="10px"
        borderRadius="12px"
        border="1px solid #277px3px"
        background="var(--Primary, #277DE3)"
        cursor={'pointer'}
        onClick={() => router.push('/signup')}
      >
        <Text
          color="#FDFDFD"
          className={plus_jakarta?.className}
          fontSize="16px"
          fontStyle="normal"
          fontWeight="500"
          lineHeight="normal"
        >
          Get Started
        </Text>
      </Flex>
      <Flex alignItems="center" gap="14px">
        <Flex flexDirection="column" alignItems="flex-start" gap="205px">
          <Flex
            width="122px"
            padding="0px 14.46px 10px 14.45px"
            flexDirection="column"
            alignItems="center"
            gap="15px"
          >
            <Flex
              width="61px"
              height="61px"
              maxWidth="122px"
              borderRadius="82px"
              background='url("a-2.jpg.png"), lightgray 0px 0px / 100% 100% no-repeat'
            ></Flex>
            <Flex
              padding="2.18px 16.09px 4.2px 15px"
              justifyContent="center"
              alignItems="flex-start"
              borderRadius="8px"
              background="rgba(253, 117, 223, 0.32)"
            >
              <Text
                color="var(--Input-Text-Active, #353535)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
              >
                Freelancer
              </Text>
            </Flex>
          </Flex>

          <Flex
            width="92px"
            padding="0px 4.28px 10px 4.27px"
            flexDirection="column"
            alignItems="center"
            gap="14.99px"
          >
            <Flex
              width="55.19px"
              height="55.19px"
              maxWidth="92px"
              borderRadius="82px"
              background='url("b.jpg.png"), lightgray 0px 0px / 100% 100% no-repeat'
            ></Flex>
            <Flex
              padding="2.19px 16.45px 4.19px 15px"
              justifyContent="center"
              alignItems="flex-start"
              borderRadius="8px"
              background="#E9E9FC"
            >
              <Text
                color="var(--Input-Text-In-Active, #787878)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
              >
                Marketer
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex>
          <Image src="/Hero-Image.png" />
        </Flex>

        <Flex flexDirection="column" alignItems="flex-start" gap="205px">
          <Flex
            width="122px"
            padding="0px 14.46px 10px 14.45px"
            flexDirection="column"
            alignItems="center"
            gap="15px"
          >
            <Flex
              width="61px"
              height="61px"
              maxWidth="122px"
              borderRadius="82px"
              background='url("c-1.jpg.png"), lightgray 0px 0px / 100% 100% no-repeat'
            ></Flex>
            <Flex
              padding="2.18px 16.09px 4.2px 15px"
              justifyContent="center"
              alignItems="flex-start"
              borderRadius="8px"
              background="rgba(218, 255, 205, 0.51)"
            >
              <Text
                color="var(--Input-Text-Active, #353535)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
              >
                Copywriter
              </Text>
            </Flex>
          </Flex>

          <Flex
            width="92px"
            padding="0px 4.28px 10px 4.27px"
            flexDirection="column"
            alignItems="center"
            gap="14.99px"
          >
            <Flex
              width="55.19px"
              height="55.19px"
              maxWidth="92px"
              borderRadius="82px"
              background='url("d.jpg.png"), lightgray 0px 0px / 100% 100% no-repeat'
            ></Flex>
            <Flex
              padding="2.19px 16.45px 4.19px 15px"
              justifyContent="center"
              alignItems="flex-start"
              borderRadius="8px"
              background="rgba(254, 255, 181, 0.65)"
            >
              <Text
                color="var(--Input-Text-In-Active, #787878)"
                textAlign="center"
                className={plus_jakarta?.className}
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="24px"
              >
                Blogger
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
export default HomeHeader;
