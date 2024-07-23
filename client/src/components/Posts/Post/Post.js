import React from "react";
import {
  media,
  border,
  fullHeightCard,
  Card,
  Overlay,
  Overlay2,
  Grid,
  Details,
  Title,
  CardActions,
} from "./Style.js";

const Post = () => {
  return (
    <Card>
      <Overlay>
        <h2>Overlay Content</h2>
      </Overlay>
      <Overlay2>
        <h2>Overlay2 Content</h2>
      </Overlay2>
      <Details>
        <Title>Post Title</Title>
      </Details>
    </Card>
  );
};

export default Post;
