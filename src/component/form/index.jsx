import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

import { CustomTextField, ButtonComponent } from "../../component";
import { createUser } from "../../apis";

const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [blurName, setBlurName] = useState(false);
    const [blurEmail, setBlurEmail] = useState(false);
    const [error, setError] = useState({
        name: "", email: ""
    });

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
        return false;
    }

    const handleSubmit = async () => {
        try {
            const response = await createUser(email, name)
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <Box className="form-media">
            <Typography className="align-center-media" marginTop="5vh" color="#dfdfdf" fontWeight="bold" variant="h3">
                Vehicle Maintainance From The Comfort of Your Home
            </Typography>
            <Typography className="align-center-media" color="#afafaf" marginTop="10px">
                Open Auto Soothes the hassle of maintaining your vehicle and helps you deal with unexpected repairs worry-free
            </Typography>
            <Box marginTop="20px" className="full-width" width="60%">
                <CustomTextField
                    placeholder="Enter your Name"
                    value={name}
                    onBlur={handleNameBlur}
                    onChange={handleNameChange}
                    error={"nikhil"}
                />
                <CustomTextField
                    placeholder="Enter your Email"
                    value={email}
                    onBlur={handleEmailBlur}
                    onChange={handleEmailChange}
                    error={error.email}
                />
                <br />
                <br />
                <ButtonComponent size="large" fullWidth variant="outlined" onClick={hasError && handleSubmit} name="submit"  />
            </Box>
        </Box>
    )
};

export default Form;