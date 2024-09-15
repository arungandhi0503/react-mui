import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom'; // Import Link from React Router
import { routeNavigation } from './routes/route';
function Navbar() {
    const drawerWidth = 240;
    const bgColor = "#003355";
    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                    backgroundColor: bgColor,
                    color: "#fff",
                },
            }}
            variant="permanent"
            anchor="left"
        >
            <List>
                {routeNavigation.map((text, index) => (
                    <ListItem key={text.id}>
                        <ListItemIcon sx={{ color: "#fff" }}>{text.icon}</ListItemIcon>
                        <ListItemButton component={Link} to={text.route}>
                            <ListItemText primary={text.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Drawer>
    );
}

export default Navbar;