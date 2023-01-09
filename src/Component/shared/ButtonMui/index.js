import React from "react";
import { Button } from "@mui/material";

function ButtonMui({ title = "Button", className }) {
  return (
    <Button
      className={`!bg-btnBg !py-[1.3rem] !text-white !text-[1.5rem] !capitalize ${className} hover:!shadow-md`}
      variant="contained"
    >
      {title}
    </Button>
  );
}

export default ButtonMui;
