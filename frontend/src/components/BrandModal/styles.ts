import { Chip, styled } from "@mui/material";

export const BrandLogoWrapper = styled("div")(({ theme }) => ({
  boxShadow: `${theme.palette.grey[500]} 0px 0px ${theme.spacing(2)}px 0px;`,
}));

export const BrandLogo = styled("img")(() => ({
  display: "block",
  width: "100%",
}));

export const BoldCaption = styled("span")(({ theme }) => ({
  ...theme.typography.caption,
  fontWeight: 800,
  fontSize: 12,
}));

export const StyledChip = styled(Chip)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
