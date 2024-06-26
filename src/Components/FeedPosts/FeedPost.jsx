import React from 'react'
import PostHeader from './PostHeader'
import PostFooter from './PostFooter'
import { Box, Image } from '@chakra-ui/react'
import useGetUserProfileById from '../../hooks/useGetUserProfileById'

const FeedPost = ({post}) => {
  //console.log(post.createdBy)
  const { userProfile } = useGetUserProfileById(post.createdBy);
  //console.log(userProfile)

  return (
    <>
    <PostHeader post={post} creatorProfile={userProfile} />
    <Box my={2} borderRadius={4} overflow={"hidden"}>
      <Image src={post.imageURL} alt={"FEED POST IMG"} />
    </Box>
    <PostFooter post={post} creatorProfile={userProfile} />
  </>
  )
}

export default FeedPost