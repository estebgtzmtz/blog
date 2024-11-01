/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import styled from "@emotion/styled";
import { alpha, InputBase } from "@mui/material";

export const Search = styled("div")(({ theme }) => ({
  margin: "0 1rem",
  position: "relative",
  borderRadius: 60,
  backgroundColor: alpha("#ffffff", 0.15),
  "&:hover": {
    backgroundColor: alpha("#ffffff", 0.25),
  },
  marginLeft: 0,
  width: "100%",
  "@media (min-width: 600px)": {
    marginLeft: "8px",
    width: "auto",
  },
}));

export const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: "0 16px",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = styled(InputBase)(() => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: "8px 8px 8px 0",
    paddingLeft: "calc(1em + 32px)",
    transition: "width 300ms",
    "@media (min-width: 600px)": {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));
