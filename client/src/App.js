// src/App.js
import React from "react";
import { Container, Grow, Grid } from "@mui/material";
import memories from "./images/memories.png";
import Form from "./components/Form/Form.js";
import Posts from "./components/Posts/Posts.js";
import { StyledAppBar, Heading, Image } from "./styles.js";

const App = () => {
  return (
    <Container maxWidth="lg">
      <StyledAppBar position="static" color="inherit">
        <Heading variant="h2" align="center">
          Memories
        </Heading>
        <Image src={memories} alt="memories" height="60" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
