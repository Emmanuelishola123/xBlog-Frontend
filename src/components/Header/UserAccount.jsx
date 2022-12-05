import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import React from "react";

function UserAccount() {
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={"full"}
        variant={"link"}
        cursor={"pointer"}
        minW={0}
      >
        <Avatar
          size={"sm"}
          src={
            "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
          }
        />{" "}
      </MenuButton>
      <MenuList color="black" fontWeight={"extrabold"}>
        <MenuItem _hover={{ bg: "gray.100" }}>Solution @solution_dev</MenuItem>
        <MenuDivider />
        <MenuItem _hover={{ bg: "gray.100" }}>Dashboard</MenuItem>
        <MenuItem _hover={{ bg: "gray.100" }}>Create Post</MenuItem>
        <MenuItem _hover={{ bg: "gray.100" }}>Reading List</MenuItem>
        <MenuItem _hover={{ bg: "gray.100" }}>Settings</MenuItem>
        <MenuDivider />
        <MenuItem color="red" _hover={{ bg: "red.100" }}>
          Logout
        </MenuItem>
      </MenuList>
    </Menu>
  );
}

export default UserAccount;
