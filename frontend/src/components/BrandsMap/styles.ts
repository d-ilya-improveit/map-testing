import { styled } from "@mui/material";

export const StyledMarkerWrapper = styled("div")(({ theme }) => ({
  width: 40,
  height: 40,
  borderRadius: 20,
  overflow: "hidden",
  boxShadow: `${theme.palette.grey[500]} 0px 0px ${theme.spacing(2)}px 0px;`,
}));

export const StyledMarkerLogo = styled("img")(() => ({
  display: "block",
  width: "100%",
}));
