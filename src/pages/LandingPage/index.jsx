import React from "react";
import { Footer, Navbar, SecondForm, Form } from '../../component'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Box } from "@mui/system";
import Pickup_Illustration from '../../assets/Pickup_Illustration.png';
import picku_service from '../../assets/picku_service.png';
import { Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const theme = createTheme({
  palette: {
    primary: {
      main: '#121821',
    },
    secondary: {
      main: purple[500],
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

const LandingPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <div style={{ background: "#121821" }} >
                <Navbar />
                <Box flexWrap="wrap" display="flex">
                    <Box marginTop='5vh' className="full-width" width="40%">
                        <Form />
                    </Box>
                    <Box marginTop='5vh' className="full-width" width="55%">
                        <Box width="100%">
                            <img className="form-media" style={{ width: '90%' }} src={Pickup_Illustration} alt="picku" />
                        </Box>
                    </Box>
                </Box>
                <Container maxWidth="lg">
                    <Typography className="break-small" color="white" align="center">
                    <IconButton color="inherit">
                            V
                        </IconButton>
                    </Typography>
                    <Typography color="#efefef" className="align-center-media" align="right">
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
                    </Typography>
                </Container>
            </div>
            <div style={{ background: "#141922" }}>
                <Box flexWrap="wrap-reverse" display="flex">
                    <Box marginTop='5vh' className="full-width" width="50%">
                        <Box width="100%">
                            <img className="form-media" style={{ padding: '5%', width: '90%' }} src={picku_service} alt="picku" />
                        </Box>
                    </Box>
                    <Box marginTop='15vh' className="full-width" width="45%">
                        <SecondForm />
                    </Box>
                </Box>
                <Box>
                    <Footer />
                </Box>
            </div>
        </ThemeProvider>
    )
};

export default LandingPage;
