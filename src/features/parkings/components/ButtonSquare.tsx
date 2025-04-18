import { Button } from "@mui/material";
import React from "react";

interface ButtonSquareProps {
    icon: React.ReactNode;
    onClick: () => void;
    disabled?: boolean;
};

const ButtonSquare = ({disabled, onClick, icon}: ButtonSquareProps) => {
  return (
    <Button
      sx={{
        width: 50,
        height: 50,
        minWidth: "unset",
        borderRadius: 1,
        bgcolor: (theme) =>
          disabled ? theme.palette.grey[100] : theme.palette.primary.main,
        p: 2,
        py: 2,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {icon}
    </Button>
  );
};

export default ButtonSquare;
