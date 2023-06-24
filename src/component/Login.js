import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import { Divider, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const defaultTheme = createTheme({
  palette: {
    primary : {
      main: '#3D3D3D',
   
    }
  },
});

export default function Login() {

  const navigate = useNavigate()
 const [email , setEmail] = React.useState('')
 const [password, setPassword] = React.useState('')


const req = {
  email,
  password,
}
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(email === '' || password === '') {
      alert('Please Login')
    } else{
   await axios.post('https://64324ac3d0127730d2cfdc8f.mockapi.io/user', req)
   navigate('/home')
    }
  
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
      
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              //alignItems: 'center',
            }}
          >
          
            <Typography component="h1" variant="h4" >
             Sign in
            </Typography>
                
            <Typography component="h1" variant="h6" >
              New User ? <Link href='#' sx={{textDecoration: 'none', color: '#587fff', fontWeight: 200}}>Create and account</Link>
            </Typography>
                
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                Focus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value = {password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Keep me signed in"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Box sx={{textAlign: 'center'}}>
               
                <Typography component="h3" variant="h6" >
                <Divider orientation="harizontal" flexItem >Or Sign In With</Divider> 
            </Typography>
            <Stack gap={2}
                direction="row"  justifyContent="center" mt={2}>
                  <TwitterIcon/>
                  <FacebookOutlinedIcon/>
                  <GoogleIcon/>
                  
                  </Stack>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(../illustration.png)',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            bgcolor: 'white',
              backgroundSize: 'auto 70%'
           
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}