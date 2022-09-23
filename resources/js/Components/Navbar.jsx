import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar, CssBaseline, Menu, MenuItem, Tooltip } from "@mui/material";
import { Link, usePage } from "@inertiajs/inertia-react";

const drawerWidth = 240;
const navItems = ["Service", "Training",  "About", "Contact"];
const settings = ['Profile', 'Booking'];



function DrawerAppBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const auth = usePage().props.auth;
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 1 }}>
                <Button sx={{ color: "#000" }} href="/#home">Geneva</Button>
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }} href={`/#${item.toLowerCase()}`}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider/>
            {auth.user ? (

            <List>
                {/* <ListItem key={setting} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={setting} />
                        </ListItemButton>
                </ListItem> */}
                
                <Box sx={{ marginTop: 2 }}>
                        <Link as="div" href={route('user.edit')}>
                            <Typography textAlign='center'>Profile</Typography>
                        </Link>
                </Box>
                <Box sx={{ marginTop: 2 }}>
                    <Button color="secondary" variant="outlined">
                        <Link as="div" method="post" href={route('logout')}>
                            <Typography textAlign='center'>Logout</Typography>
                        </Link>
                    </Button>
                </Box>
            </List>
            ) : (
                <Box sx={{ marginTop: 3}}>
                    <Button variant="contained" color="secondary">
                        <Link href="/login">
                            Login
                        </Link>
                    </Button>
                </Box>
            )
            }
            
        </Box>
    );

    const container =
        window !== undefined ? () => window().document.body : undefined;


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
    return (
        <Box sx={{display: 'block'}}>
            <AppBar sx={{backgroundColor: 'purple'}}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: "none" } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        <Link href="/#home">Geneva</Link>
                    </Typography>
                    <Box sx={{ display: { xs: "none", sm: "block" } }}>
                        {navItems.map((item) => (
                            <Button href={`/#${item.toLowerCase()}`} key={item} sx={{ color: "#fff", marginRight: 4 }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    {auth.user ? (
                        <Box sx={{ flexGrow: 0, display: {xs: 'none', sm: 'block'} }}>
                            <Tooltip title='Setting'>
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt='user' src="/images/cover.jpg" />
                            </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                            
                                <MenuItem onClick={handleCloseUserMenu}>
                                    <Link href={route('user.edit')}>
                                        <Typography textAlign="center">Profile</Typography>
                                    </Link>
                                </MenuItem>
                            
                                <MenuItem>
                                    <Link method="post" as="button" href={route('logout')}>
                                    <Button color="error" variant="outlined">
                                        Logout
                                    </Button>
                                    </Link>
                                </MenuItem>
                            
                            </Menu>
                        </Box>
                    ) : (
                        <Box sx={{ display: { xs: "none", sm: "block" } }}>
                            <Link href='/login'>Login</Link>
                        </Box>
                    )
                    }
                </Toolbar>
            </AppBar>
            <Box>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
            <Toolbar />
        </Box>
    );
}

DrawerAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DrawerAppBar;
