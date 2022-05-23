import { Box, Typography } from '@mui/material'
import icon from '../assets/icon.png'

export const About = () => {
    return (
        <Box sx={{backgroundColor: 'primary.dark', mx:'auto', my: 20, py: 10}}>
            <Box sx={{ mx:'auto', width: 120}}>
                <img src={icon} width='120' height='120' alt='icon' />
            </Box>
            <Typography align='center' variant='h3' sx={{ my: 2}}>
                About Achilles
            </Typography>
            <Typography align='center' variant='body1' sx={{ mx: 'auto', width: 600}}>
                Achilles is the running statistics bot that highlights your server's athletic progress with graphs, weekly leaderboards and heat-maps!
            </Typography>
        </Box>
    )
}