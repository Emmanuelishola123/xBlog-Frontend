import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Image,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
import { BsBell, BsSearch } from "react-icons/bs";
import UserAccount from "./UserAccount";
import { Link } from "react-router-dom";

const currentUser = true;

function Header() {
  return (
    <Box bg="white" shadow={"base"} position="sticky" top="0" left="0" zIndex={999}>
      <Flex
        justifyContent={"space-between"}
        alignItems="center"
        px={{ base: 6, lg: 10 }}
        color="white"
        borderBottom={"0.5px"}
      >
        <Flex alignItems={"center"}>
          <IconButton
            p={2}
            display={{ base: "flex", lg: "none" }}
            bg="transparent"
            color={"black"}
            _hover={{ bg: "gray.100", color: "blue.900" }}
          >
            <FaBars />
          </IconButton>

          <Link to={"/"}>
            <Image
              src="/assets/logo.png"
              alt="logo"
              width={{ base: "100px", lg: "120px" }}
              maxHeight='70px'
            />
          </Link>
          <Flex
            display={{ base: "none", md: "flex" }}
            alignItems="center"
            border={"0.5px solid black"}
            borderRadius="5px"
          >
            <Input
              placeholder="Search Post"
              color="black"
              display="flex"
              flex={1}
              border="none"
              px={2}
              focusBorderColor="transaparent"
            />
            <IconButton
              size={"md"}
              p={2}
              bg="transparent"
              color={"black"}
              _hover={{ bg: "gray.200" }}
            >
              <BsSearch />
            </IconButton>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} gap={2}>
          <IconButton
            size={"lg"}
            p={2}
            bg="transparent"
            color={"black"}
            _hover={{ bg: "gray.100", color: "blue.900" }}
            display={{ base: "flex", md: "none" }}
          >
            <BsSearch />
          </IconButton>
          {!currentUser ? (
            <>
              <IconButton
                size={"lg"}
                p={2}
                bg="transparent"
                color={"black"}
                _hover={{ bg: "gray.100", color: "blue.900" }}
              >
                <BsBell />
              </IconButton>
              <UserAccount />
            </>
          ) : (
            <>
              <Button
                display={{ base: "none", md: "flex" }}
                px={4}
                py={2}
                variant="outline"
                color={'black'}
              >
                  <Link to='/auth/login'>Login</Link>
              </Button>
              <Button px={4} py={2} colorScheme="blue">
              <Link to='/auth/join'>Create Account</Link> 
              </Button>
            </>
          )}
        </Flex>
      </Flex>
    </Box>
  );
}

export default Header;
