import { AppBar, Toolbar, Typography } from "@mui/material"

export const Navbar = () => {
    return (
        <AppBar sx={{ borderBottom: 1 }}>
            <Toolbar>
                <Typography >
                    Achilles
                </Typography>
            </Toolbar>
        </AppBar>
    )
}