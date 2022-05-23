import { Box, Grid, Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

export const Features = () => {
    return (
        <Box sx={{ flexGrow: 1, mx: 25}}>
        
        <Grid container spacing={2}>
            <Grid item xs={6}>
            <Typography variant='h4'>Leaderboards for everyone</Typography>
            <Typography variant='body1'>Let members compete for the top spot on your community's rankings. Display the runners who have run the most distance or the most time and let your community know who’s the best! Give leveled roles automatically when users reach a certain leaderboard score!</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography>Demo Video Goes Here</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography>Demo Video Goes Here</Typography>
            </Grid>
            <Grid item xs={6}>
            <Typography variant='h4'>Leaderboards for everyone</Typography>
            <Typography variant='body1'>Let members compete for the top spot on your community's rankings. Display the runners who have run the most distance or the most time and let your community know who’s the best! Give leveled roles automatically when users reach a certain leaderboard score!</Typography>
            </Grid>
        </Grid>
    </Box>)
}