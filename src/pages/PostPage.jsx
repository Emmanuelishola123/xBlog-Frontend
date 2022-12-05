import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { Post, ProfileCard, PostCTA } from "../components";

function PostPage() {
  return (
    <Box px={{ base: 6, lg: 10 }}>
      <Flex
        gap={4}
        direction={{ base: "column", lg: "row" }}
        alignItems="flex-start"
      >
        <Flex
          width={{ base: "100%", lg: "60px" }}
          borderTopRadius={{ base: "md", lg: "0" }}
          bg={{ base: "white", lg: "transparent" }}
          zIndex={{ base: "999", lg: "0" }}
          py="2"
          position={{ base: "fixed", lg: "sticky" }}
          bottom={{ base: "0" }}
          left="0"
          shadow={{ base: "sm", lg: "none" }}
          mt={{ lg: 16 }}
        >
          <PostCTA />
        </Flex>
        <Flex flex={{ base: 1, lg: 0.7 }} maxWidth="100%">
          <Post />
        </Flex>
        <Flex flex={{ base: 1, lg: 0.3 }}>
          <ProfileCard />
        </Flex>
      </Flex>
    </Box>
  );
}

export default PostPage;
