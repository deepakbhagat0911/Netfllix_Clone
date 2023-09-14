import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import "./NavBar.css";
const Appbar = styled(AppBar)`
  background: #000;
`;
const Image = styled("img")`
  height: 35px;
  width: auto;
`;
export default function NavBar({ profile }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [logout, setLogout] = React.useState(false);
  const navigate = useNavigate();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleLogOut = () => {
    setLogout((prevState) => !prevState);
  };
  const handlelogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <Image src="./logo/logo.png" alt="" />
      </Typography>

      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>Hello, {profile}</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link to={"/main"}>Home</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ListItemText>
              <Link to={"/list"}>My List</Link>
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{ textAlign: "center" }} onClick={handlelogout}>
            <ListItemText>Log Out</ListItemText>
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
          <Link to={"/all"} style={{ marginTop: "10px" }}>
            <SearchIcon sx={{ mr: 2, display: { sm: "none" } }} />
          </Link>

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
              <Link to={"/search"} style={{ marginTop: "10px" }}>
                <SearchIcon />
              </Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link to={"/main"}>Home</Link>
            </Button>
            <Button sx={{ color: "#fff" }}>
              <Link to={"/list"}>my list</Link>
            </Button>{" "}
            <Button sx={{ color: "#fff" }} onClick={handleLogOut}>
              <Image
                src="./logo/Netflix-avatar.png"
                alt=""
                style={{ borderRadius: "3px" }}
                className="profile"
              />
            </Button>
            <Drawer
              variant="temporary"
              anchor="right"
              open={logout}
              onClose={handleLogOut}
              sx={{
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: "200px",
                  height: "120px",
                  background: "#181818",
                  color: "#fff",
                  marginTop: "50px",
                },
              }}
            >
              <div className="logout-div">
                <p>Hello, {profile}</p>
                <p onClick={handlelogout}>Log out</p>
              </div>
            </Drawer>
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
