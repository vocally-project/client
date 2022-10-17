import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import { CustomTextField, ButtonComponent, CustomizedSnackbars } from "../../component";
import { createUser } from "../../apis";

const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [blurName, setBlurName] = useState(false);
    const [blurEmail, setBlurEmail] = useState(false);
    const [open, setOpen] = useState(false);
    const [snackbar, setSnackbar] = useState({
        message: "", severity: ""
    });
    const [error, setError] = useState({
        name: "", email: ""
    });
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        setOpen(false)
        return;
      }
      setOpen(false);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleNameBlur = () => {
        setBlurName(true);
    };

    const handleEmailBlur = () => {
        setBlurEmail(true);
    };

    const hasError = () => {
        if (blurName && !name) {
            setError({ ...error, name: "name is required" });
            return true;
        };
        if (blurEmail && !email) {
            setError({ ...name, email: "email is required" });
            return true;
        };
        if (blurEmail && email && !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setError({ ...name, email: "invalid email" });
            return true;
        };
        return false;
    };

    const handleSubmit = async () => {
        try {
            if (hasError()) {
                setOpen(true);
                setSnackbar({ severity: "error", message: error.name ? error.name : error.email })
            } else {
                const response = await createUser(email, name)
                if (response.data.status === 200) {
                    setSnackbar({ severity: "success", message: response.data.message })
                    setOpen(true)
                }
                setOpen(true)
                setSnackbar({ severity: "error", message: response.data.message })
            }
            setError({ name: "", email: "" });
        } catch (err) {
            setOpen(true)
            setSnackbar({ severity: "error", message: "Server error" })
            setError({ name: "", email: "" });
        }
    };

    return (
        <Box className="form-media">
            <CustomizedSnackbars open={open} handleClose={handleClose} severity={snackbar.severity} message={snackbar.message} />
            <Typography className="align-center-media" marginTop="5vh" color="#dfdfdf" fontWeight="bold" variant="h3">
                Vehicle Maintainance From The Comfort of Your Home
            </Typography>
            <Typography className="align-center-media" color="#afafaf" marginTop="10px">
                Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free
            </Typography>
            <Box marginTop="20px" className="full-width" width="60%">
                <CustomTextField
                    value={name}
                    error={error.name}
                    onBlur={handleNameBlur}
                    onChange={handleNameChange}
                    placeholder="Enter your Name"
                />
                <CustomTextField
                    value={email}
                    error={error.email}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    placeholder="Enter your Email"
                />
                <br />
                <br />
                <ButtonComponent
                    fullWidth
                    size="large"
                    name="submit"
                    variant="outlined"
                    onClick={handleSubmit}
                    disabled={!(blurEmail && blurName)} />
            </Box>
        </Box>
    )
};

export default Form;