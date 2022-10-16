import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ value, onChange, label, error = "" }) => {
    return (
        <TextField
            id="outlined-helperText"
            label={label}
            value={value}
            onChange={onChange}
            helperText={error}
        />
    )
};

export default CustomTextField;
