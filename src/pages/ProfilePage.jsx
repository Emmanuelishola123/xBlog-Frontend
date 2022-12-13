import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import { PostCard, ProfileUserInfo } from "../components";
import ProdileUserMoreInfo from "../components/Profile/ProdileUserMoreInfo";

function ProfilePage() {
  return (
    <Box width="100%">
      <Box bgColor={"pink.500"} pt={{ base: "80px", md: "100px" }} />
      <Box
        width={"100%"}
        mt={"-40px"}
        px={{ base: "0", md: "4", lg: "10vw", xl: "15vw" }}
      >
        <ProfileUserInfo />
      </Box>
      <Box px={{ base: "0", md: "4", lg: "10vw", xl: "15vw" }} mt={4}>
        <Flex width="full" direction={{ base: "column", md: "row" }} gap={4} alignItems='flex-start'>
          <Flex
            flex={{ base: "1", md: "0.3" }}
            display={{ base: "none", md: "flex" }}
            direction='column'
          >
            <ProdileUserMoreInfo />
          </Flex>
          <Flex direction={'column'} flex={{ base: "1", md: "0.7",  }}>
            {[1, 2, 3, 4, 5].map((data) => (
              <PostCard />
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
}

export default ProfilePage;
