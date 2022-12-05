import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { BsBookmark, BsSuitHeart } from "react-icons/bs";
import { VscComment } from "react-icons/vsc";

function Post() {
  return (
    <Box
      width={"100%"}
      mt={2}
      bg="white"
      rounded={"lg"}
      shadow="sm"
      mx="auto"
     
    >
      <Image src="/assets/logo.png" width="100%" height="210px" />
      <Flex alignItems={"flex-start"} px="6" py={3} gap={2} direction={"column"}>
        {/* AVATAR & NAME */}
        <Flex gap={3}>
          <Link to="/profile/solution">
            <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />{" "}
          </Link>
          <Flex direction={"column"}>
            {" "}
            <Link to="/profile/solution">
              <Text
                as={"h5"}
                color="gray.900"
                fontWeight={"medium"}
                fontSize={"lg"}
                _hover={{ color: "blue" }}
              >
                Solution Dev
              </Text>
            </Link>
            <Text as={"p"} color="gray.600">
              Nov 14 (10hours ago)
            </Text>
          </Flex>
        </Flex>
        {/* POST TITLE */}
        <Flex alignItems={"center"} gap={2}>
          <Link to="/post/title">
            <Text
              as={"h2"}
              color="gray.900"
              fontWeight={"bold"}
              fontSize={"3xl"}
              _hover={{ color: "blue" }}
              width="100%"
            >
              Awesome Productivity Tools for Dev in all field
            </Text>
          </Link>
        </Flex>
        {/* POST TAGS */}
        <Flex alignItems={"center"} gap={2}>
          <Link to="/t/tagname">
            <Text
              py={1}
              px={2}
              border={"0.5px"}
              borderRadius="md"
              _hover={{ color: "blue.400", border: "1px" }}
            >
              #WebDev
            </Text>
          </Link>
          <Link to="/t/tagname">
            <Text
              py={1}
              px={2}
              border={"0.5px"}
              borderRadius="md"
              _hover={{ color: "purple.400", border: "1px" }}
            >
              #WebDev
            </Text>
          </Link>
          <Link to="/t/tagname">
            <Text
              py={1}
              px={2}
              border={"0.5px"}
              borderRadius="md"
              _hover={{ color: "red.400", border: "1px" }}
            >
              #PythonExe
            </Text>
          </Link>
          <Link to="/t/tagname">
            <Text
              py={1}
              px={2}
              border={"0.5px"}
              borderRadius="md"
              _hover={{ color: "green.400", border: "1px" }}
            >
              #WebDev
            </Text>
          </Link>
        </Flex>
        {/* CARD FOOTER */}
        <Flex
          width={"100%"}
          alignItems={"center"}
          gap={2}
          justifyContent="space-between"
        >
          <Flex gap={3} alignItems="center">
            <Button
              leftIcon={<BsSuitHeart />}
              bg="transparent"
              color={"black"}
              _hover={{ bg: "gray.100", color: "blue" }}
            >
              10 reaction
            </Button>
            <Button
              leftIcon={<VscComment />}
              bg="transparent"
              color={"black"}
              _hover={{ bg: "gray.100", color: "blue" }}
            >
              10 comments
            </Button>
          </Flex>
          <Flex gap={3} alignItems="center">
            <Text as="p" fontSize={"16px"} color="gray.400">
              4 min read
            </Text>
            <IconButton
              icon={<BsBookmark />}
              p={2}
              bg="transparent"
              color={"black"}
              _hover={{ bg: "gray.100", color: "blue" }}
            >
              10 comments
            </IconButton>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Post;
