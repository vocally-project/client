import React from "react";
import { TextField } from "@mui/material";

const CustomTextField = ({ value, onChange, placeholder, error = "", onBlur }) => {
    return (
        <TextField
            id="outlined-helperText"
            className="inputRounded"
            fullWidth
            placeholder={placeholder}
            value={value}
            margin="normal"
            onChange={onChange}
            onBlur={onBlur}
            helperText={error}
        />
    )
};

export default CustomTextField;
