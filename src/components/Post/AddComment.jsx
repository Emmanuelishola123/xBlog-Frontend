import { Avatar, Box, Button, ButtonGroup, Flex } from "@chakra-ui/react";
import React from "react";
import { Editor } from "../";

function AddComment() {
  return (
    <Flex mx={"auto"} gap={4} maxWidth='100%' >
      <Avatar size={"sm"} />
      <Box width='100%'>
        <Editor />
        <ButtonGroup mt='3'>
            <Button variant={"solid"} colorScheme='blue'>Submit</Button>
            <Button variant={"outline"}>Preview</Button>
          </ButtonGroup>
        </Box>
    </Flex>
  );
}

export default AddComment;
