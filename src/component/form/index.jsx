import React, { useState } from "react";
import axios from "axios";

import { Button } from "@mui/material";
import { CustomTextField } from "../../component";

const Form = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = async () => {
        try {
            const data = JSON.stringify({
                "email": email,
                "name": name
            });

            const config = {
                method: 'post',
                url: `${process.env.REACT_APP_SERVER_BASE_URL}/create-user`,
                headers: {
                    'Content-Type': 'application/json'
                },
                data: data
            };

            const response = await axios(config)
            console.log(response);
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <div>
            <CustomTextField
                label="Name"
                value={name}
                onChange={handleNameChange}
                error=""
            />
            <CustomTextField
                label="Email"
                value={email}
                onChange={handleEmailChange}
                error="Some important text"
            />
            <Button variant="outlined" onClick={handleSubmit} >Submit</Button>
        </div>
    )
};

export default Form;