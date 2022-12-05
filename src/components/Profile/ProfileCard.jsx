import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

function ProfileCard() {
  return (
    <Box mt={4} width={"100%"} rounded={"lg"} shadow="sm" bg='white'>
      <Box width={"100%"} height="32px" bg="blue" roundedTop={"lg"} />
      <Flex px={4} pb={3} direction={"column"} justifyContent="flex-start">
        <Flex gap={4} alignItems="center">
          <Avatar
            mt={"-16px"}
            size={"md"}
            src={
              "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
            }
          />
          <Heading as="h4" fontSize={"lg"} fontWeight="bold">
            Engr Solution
          </Heading>
        </Flex>
        <Button
          fontSize={"lg"}
          fontWeight="semibold"
          my={3}
          mx={"auto"}
          width={"100%"}
          py="2"
          variant={"solid"}
          bg="blue"
          color={"white"}
          _hover={{ bg: "blue", opacity: 0.8 }}
          _active={{ bg: "blue", opacity: 0.75 }}
        >
          Follow
        </Button>
        <Flex
          direction={"column"}
          gap={4}
          fontWeight="normal"
          fontSize={"md"}
          color="gray.600"
        >
          <Flex>
            <Text>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              corrupti reiciendis dignissimos pariatur aspernatur maxime esse?
            </Text>
          </Flex>
          <Flex direction={"column"} gap={1}>
            <Text fontWeight="semibold" textTransform={"uppercase"}>
              Skills
            </Text>
            <Text>My skills Js Py Ts</Text>
          </Flex>
          <Flex direction={"column"} gap={1}>
            <Text fontWeight="semibold" textTransform={"uppercase"}>
              Education
            </Text>
            <Text>Bsc Software Engineering</Text>
          </Flex>{" "}
          <Flex direction={"column"} gap={1}>
            <Text fontWeight="semibold" textTransform={"uppercase"}>
              Work
            </Text>
            <Text>Software Developer & Automation Engineer</Text>
          </Flex>{" "}
          <Flex direction={"column"} gap={1}>
            <Text fontWeight="semibold" textTransform={"uppercase"}>
              Joined
            </Text>
            <Text>May 2022</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default ProfileCard;
