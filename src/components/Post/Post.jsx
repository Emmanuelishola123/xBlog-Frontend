import React from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PostContentFormatter, AddComment, Comments } from "../";

function Post() {
  return (
    <Box
      width={"100%"}
      maxWidth="100%"
      mt={4}
      bg="white"
      rounded={"lg"}
      shadow="sm"
      mx="auto"
    >
      <Image src="/assets/logo.png" width="100%" height="210px" />
      <Flex
        alignItems={"flex-start"}
        px="6"
        py={3}
        gap={2}
        direction={"column"}
      >
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
              Posted on Nov 14 - 12:30pm
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
        <Box>
          <PostContentFormatter />
        </Box>
        <Divider />
        <Box width={"100%"} maxWidth="100%">
          <Flex justifyContent={"space-between"} alignItems="center" mb="6">
            <Heading as={"h6"} color="gray.600">
              Comments (10)
            </Heading>
          </Flex>
          <AddComment />
          <Comments />
        </Box>
      </Flex>
    </Box>
  );
}

export default Post;
