import React from "react";
import Post from "./Post/Post";
import { MainContainer, SmMargin, ActionDiv } from "./Styles";
import { Typography, Button } from "@mui/material";

const Posts = () => {
  return (
    <MainContainer maxWidth="lg">
      <Post />
    </MainContainer>
  );
};
export default Posts;
