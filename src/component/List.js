import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Avatar, Container, Stack, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import axios from 'axios';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



const pages = ['All', 'Asia', 'Europe'];

export default function List() {
const [page, setPage] = React.useState('All')
const [filteredData, setFilteredData] = React.useState([]);
const [alldata , setAllData] = React.useState([])
const [imageUrl, setImageUrl] = React.useState('');
const [anchorElNav, setAnchorElNav] = React.useState(null);
const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);

  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


const getData = async () => {
  const response = await axios.get('https://restcountries.com/v2/all?fields=name,region,flag')
  const {data} = response
  setAllData(data)
  setFilteredData(data)
}

React.useEffect(() => {
  getData()
},[])

React.useEffect(() => {
  if(page === 'All') {
    setFilteredData(alldata)
  } else {
    const filtered = alldata.filter((val) => val.region === page)
    setFilteredData(filtered)
  }
},[page, alldata])
  return (
<>
    <AppBar position="static" sx={{backgroundColor: 'white'}}>
    <Container maxWidth="xl">
      <Toolbar disableGutters sx={{justifyContent: 'right'}}>
      <Typography component='h2' varient='h3' sx={{color: '#3D3D3D'}}>Countries </Typography>

        <Box sx={{ flexGrow: 1, color: '#3D3D3D', display: { xs: 'flex', md: 'none' }, justifyContent: 'right'}}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page}  onClick={() => {
                setPage(page)
                handleCloseNavMenu()
              }}>
                <Typography textAlign="center">{page}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } , justifyContent: 'right' }}>
          {pages.map((page) => (
            <Button
              key={page}
              onClick={() => setPage(page)}
              sx={{ my: 2, color: '#3D3D3D', display: 'block' , textDecorationLine: page === page ? 'underline' : '',}}
            >
              {page}
            </Button> 
          ))}
        </Box>
        
        
      </Toolbar>
    </Container>
  </AppBar>

    <Container maxWidth={'lg'}>
    
     <Box sx={{ width: '100%' }}>
     
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }}   direction={{xs: 'column', sm: 'row',  md: 'row'}}>

      {filteredData.map((task) => (
              <Grid item xs={6} mt={4} key={task.name}>
                
                <Item sx={{ border: '2px solid  #3D3D3D', borderRadius: '1px' , display: 'flex'}}>
                  <Avatar sx={{ bgcolor: 'grey' }} variant="square">
                    <img src={task.flag} alt={task.name} style={{ width: '100%' }} />
                  </Avatar>
                  <Typography component="h2" variant="h3" fontSize={'1rem'} padding={'10px'}>
                    {task.name} <br></br>
                    <Typography component="h2" variant="h6" fontSize={'0.80rem'}>   {task.region} </Typography>
                 
                  </Typography>
                </Item>
              </Grid>
            ))}
      </Grid>

    </Box> 

    <Box sx={{textAlign: 'center'}}>
               
           <Stack gap={2}
               direction="row"  justifyContent="center" mt={2}>
                 <TwitterIcon/>
                 <FacebookOutlinedIcon/>
                 <GoogleIcon/>
                 
                 </Stack>

                 <Typography component="h3" variant="h6"  fontWeight={200} fontSize={10}>
           vijin1697@gmail.com
           </Typography>

           
           <Typography component="h3" variant="h6" fontWeight={100} fontSize={10}>
            Copyright @ 2023 vijin.All rights reserved
           </Typography>
             </Box>
             
             <Box sx={{ flexGrow: 1 }}>

    </Box>
    </Container>
    </>
  );
}