import styled from "@emotion/styled";
import { Container } from "@mui/material";

export const media = styled(Container)(({ theme }) => ({
  height: 0,
  paddingTop: "56.25%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  backgroundBlendMode: "darken",
}));

export const border = styled("div")(({ theme }) => ({
  border: "solid",
}));

export const fullHeightCard = styled("div")({
  height: "100%",
});

export const Card = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "15px",
  height: "100%",
  position: "relative",
});

export const Overlay = styled("div")({
  position: "absolute",
  top: "20px",
  left: "20px",
  color: "white",
});

export const Overlay2 = styled("div")({
  position: "absolute",
  top: "20px",
  right: "20px",
  color: "white",
});

export const Grid = styled("div")({
  display: "flex",
});

export const Details = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  margin: "20px",
});

export const Title = styled("div")({
  padding: "0 16px",
});

export const CardActions = styled("div")({
  padding: "0 16px 8px 16px",
  display: "flex",
  justifyContent: "space-between",
});
