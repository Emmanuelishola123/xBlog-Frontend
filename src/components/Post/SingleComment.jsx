import {
    Avatar,
    Box,
    Button,
    ButtonGroup,
    Flex,
    Textarea,
  } from "@chakra-ui/react";
  import React from "react";
  import { BsChat, BsHeart } from "react-icons/bs";
  
  function SingleComment() {
    return (
      <Flex gap={4} maxWidth="100%">
        <Avatar size={"sm"} />
        <Box width="100%">
          <Box border={'0.5px solid grey'} rounded='md' p='3'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt
            quas, at inventore cupiditate assumenda repellat voluptatibus omnis
            tempore accusantium nostrum ullam quia. Fugiat consequuntur pariatur
            amet sit. Doloribus rem veniam harum et laudantium, itaque
            reprehenderit iure ea necessitatibus praesentium exercitationem
            maxime, sint assumenda perferendis. Porro!
          </Box>
          <ButtonGroup >
            <Button px='2' py='1' variant={"ghost"} colorScheme="red">
              <BsHeart />
            </Button>
            <Button px='2' py='1' variant={"ghost"} colorScheme="blue">
              <BsChat />
            </Button>
          </ButtonGroup>
        </Box>
      </Flex>
    );
  }
  
  export default SingleComment;
  