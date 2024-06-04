import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import {
  CommentLogo,
  NotificationsLogo,
  UnlikeLogo,
} from "../../assets/constants";
import usePostComment from "../../hooks/usePostComment";
import useAuthStore from "../../store/authStore";
import useLikePost from "../../hooks/useLikePost";

const PostFooter = ({ post, username, isProfilePage }) => {
  const commentRef=useRef(null);

 
  const { isCommenting, handlePostComment } = usePostComment();
  const [comment, setComment] = useState("");
  const handleSubmitComment = async () => {
    await handlePostComment(post.id, comment);
    setComment("");
  };
  const authUser=useAuthStore(state=>state.user)
  const { handleLikePost, isLiked, likes } = useLikePost(post);

  return (
    <Box mb={10} mt={"auto"}>
      <Flex alignItems={"center"} gap={4} w={"full"} pt={0} my={4}>
        <Box onClick={handleLikePost} cursor={"pointer"} fontSize={18}>
          {!isLiked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>
        <Box cursor={"pointer"} fontSize={18} onClick={()=>{commentRef.current.focus()}}>
          <CommentLogo/>
        </Box>
      </Flex>
      <Text fontWeight={600} fontSize={"sm"}>
        {likes} Likes
      </Text>
      {!isProfilePage && (
        <>
          <Text fontSize="sm" fontWeight={700}>
            {username}{" "}
            <Text as="span" fontWeight={400}>
              hola
            </Text>
          </Text>
          <Text fontSize="sm" color={"gray"}>
            View all 0 comments
          </Text>
        </>
      )}

      {authUser && (
        <Flex
        alignItems={"center"}
        gap={2}
        justifyContent={"space-between"}
        w={"full"}
      >
        <InputGroup>
          <Input
            variant={"flushed"}
            placeholder={"Add a comment"}
            fontSize={14}
            onChange={(e) => setComment(e.target.value)}
            value={comment}
            ref={commentRef} 
          />
          <InputRightElement>
            <Button
              fontSize={14}
              color={"blue.500"}
              fontWeight={600}
              cursor={"pointer"}
              _hover={{ color: "white" }}
              bg={"transparent"}
              onClick={handleSubmitComment}
              isLoading={isCommenting}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      )}
    </Box>
  );
};

export default PostFooter;
