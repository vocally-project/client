import React from 'react';
import { AppBar, Box, Container, Toolbar, Typography } from '@mui/material';
import LogoImg from '../../assets/logo.png';
import ButtonComponent from '../Button';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';

const Navbar = () => {
    return (
        <>
            <AppBar className='clear-shadow' position='static'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Box marginTop="20px" boxSizing="border-box" width="30%">
                    <img style={{ width: '100%' }} src={LogoImg} alt="logotemp" />
                </Box>
                <Box className='break-small' display="flex" sx={{ width: '100%', justifyContent: 'flex-end' }}>
                    <Box padding="5px" marginRight="5%" display="flex">
                        <LocalPhoneIcon sx={{ margin: '5px', marginRight: '10px' }} fontSize='sm' />
                        <Typography>
                            +769 586 4558
                        </Typography>
                    </Box>
                    <Box padding="5px" marginRight="5%" display="flex">
                        <MailIcon sx={{ margin: '5px', marginRight: '10px' }} fontSize='sm' />
                        <Typography>
                            service@openauto.ca
                        </Typography>
                    </Box>
                    <ButtonComponent variant="outlined" color="secondary" name="Download the mobile app" />
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
        </>
    )
}

export default Navbar;