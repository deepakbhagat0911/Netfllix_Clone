import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import styled from "@emotion/styled";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

const Appbar = styled(AppBar)`
  background: #000;
`;
const Image = styled("img")`
  height: 35px;
  width: auto;
`;
const Input = styled("input")`
  padding: 3px 5px;
  border: none;
  outline: none;
  color: #fff;
  background: #333;
`;
export default function SearchNav({ searchQuery, handleInputChange }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src="./logo/logo.png" alt="" />
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>My List</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>About</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Appbar component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
          >
            <Link to={"/main"}>
              <Image src="./logo/logo.png" alt="" />
            </Link>
          </Typography>
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => handleInputChange(e.target.value)}
          />

          <SearchIcon sx={{ mr: 2, display: { sm: "none" } }} />

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button sx={{ color: "#fff" }}>
              <SearchIcon />
            </Button>
            <Link to={"/main"}>
              <Button sx={{ color: "#fff" }}>Home</Button>
            </Link>
            <Link to={"/list"}>
              <Button sx={{ color: "#fff" }}>my list</Button>
            </Link>
            <Button sx={{ color: "#fff" }}>
              <Image
                src="./logo/Netflix-avatar.png"
                alt=""
                style={{ borderRadius: "3px" }}
              />
            </Button>
          </Box>
        </Toolbar>
      </Appbar>
      <Box component="nav">
        <Drawer
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
              width: "200px",
              height: "320px",
              background: "#181818",
              color: "#fff",
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}
