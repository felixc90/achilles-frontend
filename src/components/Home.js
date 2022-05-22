import { Typography, Box, Button } from "@mui/material"

export const Home = () => {
    return (
        <>
        <Box sx={{mt: 20, mb:15}}>
            <Typography align='center' variant='h1' >
                Meet Achilles
            </Typography>
            <Typography align='center' variant='h2'>
                A running bot
            </Typography>
        </Box>
        <Box sx={{mx:'auto', width: 350}}>
            <Button sx={{mx:'inherit', width: 'inherit'}} variant="outlined" href='https://discord.com/oauth2/authorize?client_id=925565690054856735&permissions=8&scope=bot applications.commands'>
                Invite Achilles and start competing!
            </Button>
        </Box>
        </>
    )
}