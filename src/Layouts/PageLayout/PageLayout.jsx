import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/*sidebar on left */}
      {pathname !== "/auth" ? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/*content on right */}
      <Box flex={1} w={{base:"calc(100%-70px)",m:"calc(100%-240px)"}} >{children}</Box>
    </Flex>
  );
};

export default PageLayout;
