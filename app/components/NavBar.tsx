"use client";
import MenuIcon from "@mui/icons-material/Menu";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@/node_modules/@mui/material/index";
import Image from "next/image";

const drawerWidth = 240;
const navItems = ["Home", "Events", "About"];

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        QC Physics Club
      </Typography>
      <Divider />
      <List sx={{ width: "100%" }}>
        {navItems.map((item, index) => (
          <Link key={item} href={["./", "./events", "./about"][index]}>
            <ListItem
              key={item}
              disablePadding
              sx={{ alignItems: "start", width: "100%" }}
            >
              <ListItemButton sx={{ textAlign: "start", width: "100%" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex", marginBottom: "96px" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backdropFilter: "blur(10px)", // Apply a blur effect
          backgroundColor: "rgba(255, 255, 255, 0)",
          // Other styles...
        }}
      >
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
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block", fontWeight: "bold" },
            }}
          >
            <Link href={"./"}>
              <Image
                src="/images/official_logo.png"
                alt="qcpc logo"
                height={50}
                width={50}
              />
            </Link>
          </Typography>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              display: {
                xs: "block",
                sm: "none",
                fontWeight: "bold",
              },
            }}
          >
            <Link href={"./"}>
              <Image
                src="/images/official_logo.png"
                alt="qcpc logo"
                width={35}
                height={35}
              />
            </Link>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, index) => (
              <Link key={item} href={["/", "/events", "/about"][index]}>
                <Button
                  sx={{
                    color: "#fff",
                    fontSize: "1.25rem",
                    textTransform: "none",
                  }}
                >
                  {item}
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
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
      </nav>
    </Box>
  );
}
