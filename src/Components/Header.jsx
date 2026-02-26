import React from "react";
import { useTheme, Typography, Box } from "@mui/material";
import { tokens } from "../../theme";

const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box className="mb-8">
      <Typography
        variant="h2"
        color={colors.grey[100]}
        fontWeight={"bold"}
        className="mb-2"
      >
        {title}
      </Typography>
      <Typography variant="h5" color={colors.greenAccent[400]}>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default Header;
