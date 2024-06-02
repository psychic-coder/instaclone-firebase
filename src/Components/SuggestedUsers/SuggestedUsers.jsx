import { Box, Flex, Link, Text, VStack } from "@chakra-ui/react";
import React from "react";
import SuggestedHeader from "./SuggestedHeader";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  return (
    <>
      <VStack py={8} px={6} gap={4}>
        <SuggestedHeader />
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"}>
          <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
            Suggested for you
          </Text>
          <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.400"}} cursor={"pointer"}>
                See All
          </Text>
        </Flex>
        <SuggestedUser name="dan" followers={234} avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBdsgFMQ4zWMhaFArqP16uCQ5NNq4GPkocA&s"/>
        <SuggestedUser name="dana" followers={235} avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBdsgFMQ4zWMhaFArqP16uCQ5NNq4GPkocA&s"/>
        <SuggestedUser name="danny" followers={233} avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmBdsgFMQ4zWMhaFArqP16uCQ5NNq4GPkocA&s"/>
      </VStack>
      <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"} >
         @2024 Build By{" "}
         <Link href="https://github.com/psychic-coder" target="_blank" color={"blue.500"} fontSize={14}>
         psychic-coder
         </Link>
      </Box>
    </>
  );
};

export default SuggestedUsers;
