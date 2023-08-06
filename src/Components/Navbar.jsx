import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import MenuIcon from '@mui/icons-material/menu';

export default function Navbar(){
    return (
        <AppBar position="sticky" sx={{bgcolor: "primary.main", color:"secondary.main"}}>
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Blog
            </Typography>
            <Button color="inherit" href="/login">Login</Button>
            </Toolbar>
        </AppBar>
    );
}