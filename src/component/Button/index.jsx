import { Button } from '@mui/material';

const ButtonComponent = ({ name, ...rest }) => {
    return (
        <Button className="custom-button" sx={{ borderRadius: 8, color: 'white', borderColor: 'white' }} {...rest}>
            {name}
        </Button>
    )
}

export default ButtonComponent;