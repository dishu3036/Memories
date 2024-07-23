import React from "react";
import {
  Root,
  PaperStyled,
  StyledForm,
  FileInput,
  ButtonSubmit,
} from "./Styles.js";
import { TextField, Button } from "@mui/material";

const Form = () => {
  return (
    <Root>
      <PaperStyled>
        <StyledForm>
          <TextField label="Name" variant="outlined" />
          <TextField label="Description" variant="outlined" />
          <FileInput type="file" />
          <ButtonSubmit variant="contained" color="primary">
            Submit
          </ButtonSubmit>
        </StyledForm>
      </PaperStyled>
    </Root>
  );
};

export default Form;
