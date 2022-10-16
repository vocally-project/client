import { Box, Container } from "@mui/system";
import LogoImg from '../../assets/logo.png';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import MailIcon from '@mui/icons-material/Mail';
import { IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return ( 
        <Container maxWidth="xl">
            <Box paddingTop="20px" borderTop="1px solid" justifyContent="space-between" flexWrap="wrap" display="flex">
                <Box className="full-width align-center">
                    <img style={{ width: '200px' }} src={LogoImg} alt="logotemp" />
                </Box>
                <Box className="full-width space-around-flex-media" width="30%" justifyContent="flex-end" display="flex">
                    <Box color="#efefef" padding="5px" marginRight="5%" display="flex">
                        <LocalPhoneIcon sx={{ margin: '5px', marginRight: '10px' }} fontSize='sm' />
                        <Typography>
                            +769 586 4558
                        </Typography>
                    </Box>
                    <Box color="#efefef" padding="5px" display="flex">
                        <MailIcon sx={{ margin: '5px', marginRight: '10px' }} fontSize='sm' />
                        <Typography>
                            service@openauto.ca
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box paddingTop="10px" paddingBottom="10px" justifyContent="space-between" flexWrap="wrap" display="flex">
                <Typography className="full-width align-center" color="#efefef">
                    Open Auto @ all rights reserved
                </Typography>
                <Box color="#efefef" className="full-width space-around-flex-media" display="none">
                    <Typography>
                        Privacy policy
                    </Typography>
                    <Typography>
                        Terms of use
                    </Typography>
                    <Typography>
                        Cookie policy
                    </Typography>
                </Box>
                <Box className="space-around-flex-media full-width" color="#efefef" width="30%" justifyContent="flex-end" display="flex">
                    <IconButton color="inherit">
                        <FacebookIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <TwitterIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <YouTubeIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <LinkedInIcon />
                    </IconButton>
                    <IconButton color="inherit">
                        <InstagramIcon />
                    </IconButton>
                </Box>
            </Box>
        </Container>
    )
}

export default Footer;
