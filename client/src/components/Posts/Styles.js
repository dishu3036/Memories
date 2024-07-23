import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const MainContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
}));

export const SmMargin = styled("div")(({ theme }) => ({
  margin: theme.spacing(1),
}));

export const ActionDiv = styled("div")({
  textAlign: "center",
});
