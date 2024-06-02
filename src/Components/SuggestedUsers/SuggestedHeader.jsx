import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import React from "react";

const SuggestedHeader = () => {
  return (
    <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
      <Flex alignItems={"center"} gap={4}>
        <Avatar name="As a programmer " size={"lg"} src="/profilepic.png">
          <Text fontSize={12} fontWeight={"bold"} color={"white"}>
            asAProgrammer
          </Text>
        </Avatar>
      </Flex>
      <Link
        as={RouterLink}
        to={"/auth"}
        fontSize={14}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        style={{
            textDecoration:"none"
        }}
      >Log out</Link>
    </Flex>
  );
};

export default SuggestedHeader;
