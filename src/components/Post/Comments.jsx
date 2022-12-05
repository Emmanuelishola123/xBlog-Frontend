import { Flex } from "@chakra-ui/react";

import SingleComment from "./SingleComment";

function Comments() {
  return (
    <Flex gap={3} mt={8} direction="column">
      {[1, 2, 3, 4].map((comment) => (
        <SingleComment key={comment} />
      ))}
    </Flex>
  );
}

export default Comments;
