import NavBar from "../../components/Navbar";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';


export default function Support() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));
    return (
        <>
            <NavBar />
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>The quick brown fox jumps over the lazy dog</Item>
        </Grid>
        <Grid xs={6}>
          <Item>The quick brown fox jumps over the lazy dog</Item>
        </Grid>
        <Grid xs>
          <Item>The quick brown fox jumps over the lazy dog</Item>
        </Grid>
      </Grid>
    </Box>

  
    
    <Divider>
        <Chip label="" />
      </Divider>
      
     

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>The quick brown fox jumps over the lazy dog</Item>
        </Grid>
      </Grid>
    </Box>

    <Divider>
        <Chip label="" />
      </Divider>

    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs>
          <Item>The quick brown fox jumps over the lazy dog</Item>
        </Grid>
      </Grid>
    </Box>

    <Divider>
        <Chip label="" />
      </Divider>
    
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid xs={2}>
          <Item>The quick brown fox jumps over the lazy dog</Item>
        </Grid>
        <Grid xs={2}>
          <Item>The quick brown fox jumps over the lazy dog</Item>
        </Grid>
        <Grid xs={2}>
          <Item>The quick brown fox jumps over the lazy dog!</Item>
        </Grid>
      </Grid>
    </Box>
    
    </>
    );
}
