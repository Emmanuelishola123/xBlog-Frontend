import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { PostCard, PostTag } from "./components";

function App() {
  return (
    <Box mt={4} position="relative" px={{ base: 6, lg: 10 }}>
      <Flex>
        <Box
          position={"sticky"}
          top="75px"
          as="aside"
          width={"100%"}
          maxWidth={{ base: "230px", md: "290px" }}
          display={{ base: "none", md: "block" }}
          mr={3}
        >
          <Flex direction={"column"} gap={1}>
            {/* <Text
              fontWeight={"bold"}
              fontSize="2xl"
              color={"gray.500"}
              p={2}
              borderRadius={"md"}
            >
              Menu
            </Text> */}
            <NavLink to="/">
              <Flex
                alignItems={"center"}
                gap={2}
                width={"100%"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                <Image
                  src="/assets/logo.png"
                  width={10}
                  height={10}
                  rounded="sm"
                />
                Home
              </Flex>
            </NavLink>
            <NavLink to="/">
              <Flex
                alignItems={"center"}
                gap={2}
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                <Image
                  src="/assets/logo.png"
                  width={10}
                  height={10}
                  rounded="sm"
                />
                Home
              </Flex>
            </NavLink>
            <NavLink to="/">
              <Flex
                alignItems={"center"}
                gap={2}
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                <Image
                  src="/assets/logo.png"
                  width={10}
                  height={10}
                  rounded="sm"
                />
                Home
              </Flex>
            </NavLink>
            <NavLink to="/">
              <Flex
                alignItems={"center"}
                gap={2}
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                <Image
                  src="/assets/logo.png"
                  width={10}
                  height={10}
                  rounded="sm"
                />
                Home
              </Flex>
            </NavLink>
            <NavLink to="/">
              <Flex
                alignItems={"center"}
                gap={2}
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                <Image
                  src="/assets/logo.png"
                  width={10}
                  height={10}
                  rounded="sm"
                />
                Home
              </Flex>
            </NavLink>
            <NavLink to="/">
              <Flex
                alignItems={"center"}
                gap={2}
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                <Image
                  src="/assets/logo.png"
                  width={10}
                  height={10}
                  rounded="sm"
                />
                Home
              </Flex>
            </NavLink>
          </Flex>
          <Flex direction={"column"} gap={3}>
            <Text
              fontWeight={"bold"}
              fontSize="2xl"
              color={"gray.500"}
              p={2}
              borderRadius={"md"}
            >
              My Tags
            </Text>
            <NavLink to="/">
              <Text
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                #WebDev
              </Text>
            </NavLink>
            <NavLink to="/">
              <Text
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                #Software
              </Text>
            </NavLink>
            <NavLink to="/">
              <Text
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                #RegExp
              </Text>
            </NavLink>
            <NavLink to="/">
              <Text
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                #JS
              </Text>
            </NavLink>

            <NavLink to="/">
              <Text
                width={"100%"}
                as={"h6"}
                px={3}
                py={2}
                borderRadius="lg"
                fontWeight="semibold"
                fontSize={"xl"}
                minWidth="100%"
                _hover={{ color: "blue", bg: "white" }}
              >
                #Linux
              </Text>
            </NavLink>
          </Flex>
        </Box>

        <Box as="main" flex={1}>
          <Flex alignItems={"center"} gap={4}>
            <Text
              fontWeight={"bold"}
              fontSize="lg"
              _hover={{ bg: "white", color: "blue" }}
              p={3}
              borderRadius={"md"}
            >
              <NavLink to="/"> Relevant</NavLink>
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize="lg"
              _hover={{ bg: "white", color: "blue" }}
              p={3}
              borderRadius={"md"}
            >
              <NavLink to="/"> Latest</NavLink>
            </Text>
            <Text
              fontWeight={"bold"}
              fontSize="lg"
              _hover={{ bg: "white", color: "blue" }}
              p={3}
              borderRadius={"md"}
            >
              <NavLink to="/"> Top</NavLink>
            </Text>
          </Flex>
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <PostCard key={i} />
          ))}
        </Box>

        <Box
          position={"sticky"}
          top="75px"
          height={"auto"}
          as="aside"
          width={"100%"}
          maxWidth={{ base: "290px", md: "320px" }}
          display={{ base: "none", lg: "block" }}
          ml={3}
        >
          {/* <Text
            fontWeight={"bold"}
            fontSize="2xl"
            color={"gray.500"}
            p={2}
            borderRadius={"md"}
          >
            Let's Discuss
          </Text> */}
          <PostTag />
        </Box>
      </Flex>
    </Box>
  );
}

export default App;
