import {
  AppBar,
  Backdrop,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import React, { Suspense, lazy, useState } from "react";
import { Add, Menu as MenuIcon, Notifications } from "@mui/icons-material";
import { Search as SearchIcon ,Logout as LogoutIcon } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Add as AddIcon, Group as GroupIcon } from "@mui/icons-material";

const SearchDialog = lazy(()=> import ("../specific/Search"))
const NotificationDialog = lazy(()=> import ("../specific/Notifications"))
const NewgroupDialog = lazy(()=> import ("../specific/NewgroupDialog"))

const Header = () => {

    const [isMobile ,setMobile] = useState(false);
    const [isSearch ,setSearch] = useState(false);
    const [isNewGroup ,setNewGroup] = useState(false);
    const [isNotification ,setNotification] = useState(false);



  const navigate = useNavigate();

  const handleMobile = () => {
     setMobile((prev)=>!prev)
  };
  const handleSearch = () => {
   setSearch((prev)=>!prev)
  };
  const handleGroup = () => {
   setNewGroup((prev)=>!prev)
  };
 const OpenNotification =()=>{
   setNotification((prev)=>!prev)
 }


  const navigateGroup = () => navigate("/groups");
  const handleLogout =()=>{
   console.log("logout")
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }} height={"4rem"}>
        <AppBar
          position="static"
          sx={{
            bgcolor: "#ef6408",
          }}
        >
          <Toolbar>
            <Typography
              variant="h6"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            >
              Chat APP
            </Typography>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            ></Box>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
              }}
            >
              <IconButton color="inherit" onClick={handleMobile}>
                <MenuIcon /> 
              </IconButton>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
              }}
            />
            <Box>
              <IconBtn
                title={"search"}
                icon={<SearchIcon />}
                onClick={handleSearch}
              />

              <IconBtn
                title={"New Group"}
                icon={<AddIcon />}
                onClick={handleGroup}
              />

              <IconBtn
                title={"mange Group"}
                icon={<GroupIcon />}
                onClick={navigateGroup}
              />
              <IconBtn
                title={"Notification"}
                icon={<Notifications />}
                onClick={OpenNotification}
              />
               <IconBtn
                title={"Logout"}
                icon={<LogoutIcon />}
                onClick={handleLogout}
              />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {isSearch && 
      <Suspense fallback={<Backdrop open/>}>
        <SearchDialog/>
        </Suspense>}
        {isNotification && <Suspense fallback={<Backdrop open/>}>
          <NotificationDialog/>
        </Suspense>}
        {isNewGroup && <Suspense fallback={<Backdrop open/>}>
          <NewgroupDialog/>
        </Suspense>}
    </>
  );
};

const IconBtn = ({ title, icon, onClick }) => {
  return (
    <Tooltip title={title}>
      <IconButton color="inherit" size="large" onClick={onClick}>
        {icon}
      </IconButton>
    </Tooltip>
  );
};

export default Header;
