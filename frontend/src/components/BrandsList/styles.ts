import { styled } from "@mui/material";

export const StyledBrandsList = styled("div")(({ theme }) => ({
  maxWidth: "40vw",
  width: "50%",
  height: "100vh",
  position: "relative",
  zIndex: 1000,
  boxShadow: `${theme.palette.grey[500]} 0px ${theme.spacing(
    1
  )}px ${theme.spacing(4)}px 0px;`,
}));

export const NotFoundMessage = styled("p")(({ theme }) => ({
  ...theme.typography.h4,
  color: theme.palette.info.main,
  textAlign: "center",
}));
