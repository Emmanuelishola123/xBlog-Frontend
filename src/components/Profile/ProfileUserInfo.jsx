import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaSearchLocation } from "react-icons/fa";
import { RiFileList3Line } from "react-icons/ri";
import ProdileUserMoreInfo from "./ProdileUserMoreInfo";

function ProfileUserInfo() {
  return (
    <Box
      width={"100%"}
      rounded={{ base: "md", lg: "lg" }}
      bgColor={"white"}
      p={4}
      shadow="sm"
      border="1px solid #dcdcdc"
    >
      <Flex width={'100%'} alignItems={"center"} justifyContent="space-between">
        <Flex width={"150px"} display={{ base: "none", md: "flex" }} />
        <Flex
          //   width={"150px"}
          mt={{ base: "-60px", md: "-55px" }}
          p={{ base: "1", lg: "1.5" }}
          bgColor={"pink.500"}
          rounded="full"
        >
          <Avatar size={{ base: "md", md: "xl" }} />
        </Flex>
        <Flex width={"150px"} gap={4}>
          <Button variant={"solid"} colorScheme="blue">
            Follow
          </Button>
          <Button variant={"ghost"}>
            <BsThreeDots />
          </Button>
        </Flex>
      </Flex>
      <Flex
      width={'100%'}
        mt={4}
        gap={3}
        direction="column"
        alignItems={{ base: "flex-start", md: "center" }}
        px={{ base: "none", md: "10%" }}
      >
        <Heading>Eevis Kenny</Heading>
        <Text textAlign={{ base: "left", md: "center" }}>
          Web, Android and Accessibility || IAAP Certified Professional in Web
          Accessibility || NWITA Finalist || Women Techmakers Ambassador
        </Text>
        <Flex flexWrap={"wrap"} gap={8}>
          <Flex alignItems={"center"} gap="3" color="grey" fontWeight="medium">
            <Icon as={FaSearchLocation} />
            <Text textAlign={{ base: "left", md: "center" }}>
              Lagos, Nigeria
            </Text>
          </Flex>
          <Flex alignItems={"center"} gap="3" color="grey" fontWeight="medium">
            <Icon as={FaSearchLocation} />
            <Text textAlign={{ base: "left", md: "center" }}>
              Lagos, Nigeria
            </Text>
          </Flex>
        </Flex>
      </Flex>
      <Flex  display={{md: 'none'}}>
        <ProdileUserMoreInfo />
      </Flex>
    </Box>
  );
}

export default ProfileUserInfo;
