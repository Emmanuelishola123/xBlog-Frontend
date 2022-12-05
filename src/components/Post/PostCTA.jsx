import { ButtonGroup, Flex, IconButton } from "@chakra-ui/react";
import React from "react";
import { BsHeart } from "react-icons/bs";

function PostCTA() {
  return (
    <Flex
      direction={{ base: "rows", lg: "column" }}
      justifyContent={{ base: "space-around", lg: "center" }}
      alignItems={{ base: "flex-start", lg: "center" }}
      gap="4"
     width={'100%'}
    >
      <Flex>
        <IconButton
          rounded={"full"}
          colorScheme={"red"}
          p="1"
          icon={<BsHeart />}
        />
      </Flex>
      <Flex>
        <IconButton
          rounded={"full"}
          colorScheme={"orange"}
          p="1"
          icon={<BsHeart />}
        />
      </Flex>
      <Flex>
        <IconButton
          rounded={"full"}
          colorScheme={"blue"}
          p="1"
          icon={<BsHeart />}
        />
      </Flex>
      <Flex>
        <IconButton
          rounded={"full"}
          colorScheme={"gray"}
          p="1"
          icon={<BsHeart />}
        />
      </Flex>
    </Flex>
  );
}

export default PostCTA;
