import { styled } from "@mui/system";
import { Paper, Button } from "@mui/material";

// Create styled components using the styled function
export const Root = styled("div")(({ theme }) => ({
  "& .MuiTextField-root": {
    margin: theme.spacing(1),
  },
}));

export const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export const StyledForm = styled("form")({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const FileInput = styled("input")({
  width: "97%",
  margin: "10px 0",
});

export const ButtonSubmit = styled(Button)({
  marginBottom: 10,
});
