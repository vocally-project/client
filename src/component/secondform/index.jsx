import React from "react";
import { ButtonComponent } from "..";
import { Box, Typography } from "@mui/material";

const SecondForm = () => {
    return (
        <Box className="form-media">
            <Typography className="align-center-media" marginTop="5vh" color="#dfdfdf" fontWeight="bold" variant="h3">
                Focused on
            </Typography>
            <Typography className="align-center-media" color="#dfdfdf" fontWeight="bold" variant="h3">
                Time Saving
            </Typography>
            <Typography className="align-center-media" color="#afafaf" marginTop="10px">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
            </Typography>
            <Box marginTop="20px" className="full-width align-center-media" width="60%">
                <ButtonComponent size="large" fullWidth variant="outlined" name="Download the mobile app"  />
            </Box>
        </Box>
    )
};

export default SecondForm;