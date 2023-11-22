"use client";

import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Plus_Jakarta_Sans } from "next/font/google";
import { useRouter } from "next/router";
const plus_jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export default function NewNavbar() {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon w={3} h={3} color={"#277DE3"} />
              ) : (
                <HamburgerIcon color={"#277DE3"} w={5} h={5} />
              )
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
          p={5}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="127"
            height="38"
            viewBox="0 0 127 38"
            fill="none"
          >
            <path
              d="M0 36.9203V6.40137H21.6029C21.6029 9.57308 19.0303 12.1105 15.8938 12.1105H6.51963V18.5244H15.5766C18.7483 18.5244 21.2857 21.097 21.2857 24.2335H6.51963V30.4007C6.48439 34.0305 3.59461 36.9203 0 36.9203Z"
              fill="#277DE3"
            />
            <path
              d="M58.3597 36.9203C55.1175 36.9203 52.5097 34.3124 52.5097 31.0702V23.5639C52.5097 20.815 51.1353 19.4406 48.4217 19.4406C46.4129 19.4406 44.7214 20.2864 43.3822 22.0132V31.1055C43.3822 34.3125 40.7743 36.9203 37.5674 36.9203V14.824H43.3822V17.6786C44.1927 16.727 45.25 15.9165 46.6244 15.2822C47.9988 14.6126 49.4789 14.2954 51.1353 14.2954C53.5317 14.2954 55.329 14.9297 56.5272 16.1632C57.7606 17.4319 58.3597 19.1235 58.3597 21.3437V36.9203Z"
              fill="#277DE3"
            />
            <path
              d="M92.1909 36.92C91.2394 36.92 90.4289 36.5676 89.7593 35.898C89.0897 35.2284 88.7373 34.3826 88.7373 33.4663C88.7373 32.5501 89.0897 31.7043 89.7593 31.0347C90.4289 30.3651 91.2394 30.0127 92.1909 30.0127C93.1777 30.0127 93.9882 30.3651 94.6578 31.0347C95.3274 31.7043 95.6798 32.5148 95.6798 33.4663C95.6798 34.4178 95.3274 35.2284 94.6578 35.898C93.9882 36.5676 93.1777 36.92 92.1909 36.92Z"
              fill="#277DE3"
            />
            <path
              d="M123.203 12.9563C124.049 12.5334 125.036 12.3219 126.023 12.3219V24.7269C126.023 28.6386 124.86 31.7399 122.534 34.0306C120.208 36.3212 116.789 37.4842 112.243 37.4842C107.732 37.4842 104.314 36.3212 101.953 34.0306C99.6268 31.7399 98.4639 28.6386 98.4639 24.7269V0.516113C100.296 0.516113 101.918 1.25618 103.116 2.45438C104.314 3.65259 105.054 5.30892 105.054 7.10622V24.5507C105.054 26.7356 105.688 28.4977 106.922 29.8016C108.19 31.1055 109.953 31.7399 112.243 31.7399C114.534 31.7399 116.296 31.1055 117.529 29.8016C118.763 28.4977 119.397 26.7709 119.397 24.5507V18.9825C119.397 16.8681 120.384 14.965 121.97 13.7668V9.85505C121.265 9.74932 120.666 9.43215 120.137 8.86829C119.468 8.1987 119.115 7.35291 119.115 6.43664C119.115 5.48513 119.432 4.67458 120.137 4.005C120.807 3.33541 121.617 2.983 122.569 2.983C123.556 2.983 124.366 3.33541 125.036 4.005C125.705 4.67458 126.058 5.48513 126.058 6.43664C126.058 7.38816 125.741 8.1987 125.036 8.86829C124.507 9.39691 123.908 9.71408 123.203 9.85505V12.9563Z"
              fill="#277DE3"
            />
            <path
              d="M79.2578 6.33078V17.6432C77.5662 15.3878 75.2755 14.2601 72.4562 14.2601C69.5665 14.2601 67.2405 15.3173 65.408 17.3965C63.5754 19.4758 62.6592 22.2951 62.6592 25.8544C62.6592 29.4491 63.5754 32.3036 65.408 34.3828C67.2405 36.4621 69.5665 37.4841 72.4562 37.4841C75.2051 37.4841 77.4605 36.3563 79.2578 34.1009V36.9554C82.5 36.9554 85.1079 34.3476 85.1079 31.1054V0.515973C81.8657 0.480732 79.2578 3.12383 79.2578 6.33078ZM74.2888 32.5855C73.2668 32.5855 72.2801 32.3388 71.4343 31.9159L68.0511 33.1494C67.4872 33.3608 66.8881 32.797 67.0996 32.1979L68.3683 28.8499C67.9454 27.9689 67.7339 27.0174 67.7339 25.9954C67.7339 22.8942 69.9189 20.2863 72.8087 19.5815C72.8791 19.5463 72.9496 19.5463 73.0201 19.5463C73.1258 19.511 73.2316 19.511 73.3373 19.4758C73.6544 19.4053 74.0069 19.4053 74.324 19.4053C77.9539 19.4053 80.9142 22.3656 80.9142 25.9954C80.8437 29.6605 77.9186 32.5855 74.2888 32.5855Z"
              fill="#277DE3"
            />
            <path
              d="M77.0734 26.806C77.56 26.806 77.9544 26.4116 77.9544 25.925C77.9544 25.4384 77.56 25.0439 77.0734 25.0439C76.5868 25.0439 76.1924 25.4384 76.1924 25.925C76.1924 26.4116 76.5868 26.806 77.0734 26.806Z"
              fill="#277DE3"
            />
            <path
              d="M74.1135 26.806C74.6 26.806 74.9945 26.4116 74.9945 25.925C74.9945 25.4384 74.6 25.0439 74.1135 25.0439C73.6269 25.0439 73.2324 25.4384 73.2324 25.925C73.2324 26.4116 73.6269 26.806 74.1135 26.806Z"
              fill="#277DE3"
            />
            <path
              d="M71.1525 26.806C71.6391 26.806 72.0335 26.4116 72.0335 25.925C72.0335 25.4384 71.6391 25.0439 71.1525 25.0439C70.6659 25.0439 70.2715 25.4384 70.2715 25.925C70.2715 26.4116 70.6659 26.806 71.1525 26.806Z"
              fill="#277DE3"
            />
            <path
              d="M29.4972 14.8237H31.7879V31.1052C31.7879 34.3121 29.18 36.92 25.973 36.92V14.8237H28.2637V12.3921C27.5589 12.2863 26.9598 11.9692 26.4312 11.4053C25.7616 10.7357 25.4092 9.88994 25.4092 8.97367C25.4092 8.02216 25.7616 7.21161 26.4312 6.54202C27.1008 5.87244 27.9113 5.52002 28.8628 5.52002C29.8496 5.52002 30.6954 5.87244 31.365 6.54202C31.9993 7.17637 32.3517 8.02215 32.3517 8.90318C32.3517 9.8547 32.0345 10.7005 31.3297 11.3701C30.8011 11.8987 30.202 12.2159 29.4972 12.3568V14.8237Z"
              fill="#277DE3"
            />
          </svg>

          <Flex display={{ base: "none", md: "flex" }} justify={"center"} width={'100%'} >
            <DesktopNav />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={"flex-end"}
          direction={"row"}
          spacing={6}
        >
          <Button
            as={"a"}
            fontSize={"md"}
            fontWeight={600}
            variant={"link"}
            href={"#"}
            color={"#277DE3"}
            className={plus_jakarta?.className}
            onClick={() => router?.push("/login")}
          >
            Log In
          </Button>
          <Button
            as={"a"}
            display={{ base: "none", md: "inline-flex" }}
            fontSize={"md"}
            fontWeight={600}
            color={"#277DE3"}
            backgroundColor={"transparent"}
            borderRadius="12px"
            border="1px solid #277DE3"
            className={plus_jakarta?.className}
            _hover={{
              backgroundColor: "#277DE3",
              color: "#fff",
            }}
            cursor={"pointer"}
            onClick={() => router?.push("/signup")}
          >
            Sign Up
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {

  return (
    <Stack direction={"row"} spacing={4}>
      <Box
         p={2}
         cursor={"pointer"}
         color="var(--Text, #131619)"
         className={plus_jakarta?.className}
         fontSize="16px"
         fontStyle="normal"
         fontWeight="500"
         lineHeight="normal"
         onClick={() => router?.push("/")}
      >
        Home
      </Box>
      <Box
        p={2}
        cursor={"pointer"}
        color="var(--Text, #131619)"
        className={plus_jakarta?.className}
        fontSize="16px"
        fontStyle="normal"
        fontWeight="500"
        lineHeight="normal"
        onClick={() => router?.push("/faq")}
      >
        FAQs
      </Box>
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Box
      as="a"
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      <MobileNavItem />
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      {/* <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse> */}
    </Stack>
  );
};

// const NAV_ITEMS = [
//   {
//     label: "Inspiration",
//     children: [
//       {
//         label: "Explore Design Work",
//         subLabel: "Trending Design to inspire you",
//         href: "#",
//       },
//       {
//         label: "New & Noteworthy",
//         subLabel: "Up-and-coming Designers",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Find Work",
//     children: [
//       {
//         label: "Job Board",
//         subLabel: "Find your dream design job",
//         href: "#",
//       },
//       {
//         label: "Freelance Projects",
//         subLabel: "An exclusive list for contract work",
//         href: "#",
//       },
//     ],
//   },
//   {
//     label: "Learn Design",
//     href: "#",
//   },
//   {
//     label: "Hire Designers",
//     href: "#",
//   },
// ];
