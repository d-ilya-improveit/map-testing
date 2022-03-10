import { styled } from "@mui/material";

export const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "stretch",
  cursor: "pointer",
  borderRight: "10px solid transparent",
  transition: "0.2s",

  "&:hover": {
    borderRight: `10px solid ${theme.palette.grey[300]}`,
  },
}));

export const BrandLogoWrapper = styled("div")(() => ({
  height: "100%",
}));

export const BrandLogo = styled("img")(() => ({
  maxWidth: 120,
  display: "block",
}));

export const BrandContent = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  padding: theme.spacing(2),
  flexDirection: "column",
}));
export const BrandName = styled("h2")(({ theme }) => ({
  ...theme.typography.h6,
  margin: 0,
  color: theme.palette.grey[900],
}));
export const BrandDescription = styled("h3")(({ theme }) => ({
  ...theme.typography.subtitle2,
  margin: 0,
  color: theme.palette.grey[500],
}));
export const BrandFooter = styled("div")(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));
export const BrandTag = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  height: 26,
  background: theme.palette.success.light,
  color: theme.palette.success.contrastText,
  borderRadius: 13,
  fontWeight: 600,
  textTransform: "uppercase",
  fontSize: 12,
  marginRight: theme.spacing(1),
}));
