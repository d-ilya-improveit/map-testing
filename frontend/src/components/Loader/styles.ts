import { styled } from "@mui/material";
import { keyframes } from "@emotion/react";

const ring = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const LoaderWrapper = styled("div")({
  display: "block",
  width: 80,
  height: 80,
  position: "relative",
  margin: "0 auto",
});

export const LoaderElem = styled("div")`
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 8px solid ${({ theme }) => theme.palette.success.light};
  border-radius: 50%;
  animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: ${({ theme }) => theme.palette.success.light} transparent
    transparent transparent;
`;
