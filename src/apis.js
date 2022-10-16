import axios from "axios";

export const createUser = async (email, name) => {
    try {
        const response = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_BASEURL}/create-user`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: { email, name }
        });

        return response;
    } catch(err) {
        return err;
    }
};
