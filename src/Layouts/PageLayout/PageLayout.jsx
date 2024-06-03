import { Box, Flex, Spinner } from "@chakra-ui/react";
import React from "react";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { useLocation } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from "../../Firebase/firebase";
import Navbar from "../../Components/Navbar/Navbar";

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();

  //its getting hold of the user we signedin
  const [user, loading, error] = useAuthState(auth);
  const canRenderSidebar=pathname !== "/auth"  && user;
  const canRenderNavbar=!user&&pathname !== "/auth"

  const checkingUserIsAuth=!user &&loading
  if(checkingUserIsAuth) return <PageLayoutSpinner />

  return (
    <Flex flexDir={canRenderNavbar ? "column" : "row"}>
      {/*sidebar on left */}
      {canRenderSidebar? (
        <Box w={{ base: "70px", md: "240px" }}>
          <Sidebar />
        </Box>
      ) : null}
      {/**/}
      {canRenderNavbar ? <Navbar/>:null }
      {/*content on right */}
      <Box flex={1} w={{base:"calc(100%-70px)",m:"calc(100%-240px)"}} mx={"auto"} >{children}</Box>
    </Flex>
  );
};

export default PageLayout;

const PageLayoutSpinner = () => {
	return (
		<Flex flexDir='column' h='100vh' alignItems='center' justifyContent='center'>
			<Spinner size='xl' />
		</Flex>
	);
};