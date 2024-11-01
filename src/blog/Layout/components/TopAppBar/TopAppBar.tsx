import { useEffect, useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  Container,
  Avatar,
  Tooltip,
  MenuItem,
} from "@mui/material";

import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { useAuth0 } from "@auth0/auth0-react";
import { useAuthCustom } from "../../../../contexts/AuthContext/AuthProvider";
import { Search, SearchIconWrapper, StyledInputBase } from "./TopAppBar.styled";
import { useData } from "../../../../contexts/DataContext/DataProvider";
import { useDebounce } from "../../../../hooks/useDebounce";
import { useNavigate } from "react-router-dom";

const settings = ["Logout"];

export const TopAppBar = () => {
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const { logout } = useAuth0();
  const { user } = useAuthCustom();
  const { searchPosts, getPosts } = useData();

  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    if (debouncedSearchQuery.trim()) {
      searchPosts(debouncedSearchQuery);
    } else {
      getPosts();
    }
  }, [debouncedSearchQuery, searchPosts]);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <IconButton onClick={handleHome}>
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handleHome}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blog
          </Typography>
          <IconButton onClick={handleHome}>
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="a"
            onClick={handleHome}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Blog
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              value={searchQuery}
              onChange={handleSearchChange}
            />
          </Search>
          <Box>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="user"
                  src={`${user ? user.picture : "/static/images/avatar/2.jpg"}`}
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography
                    sx={{ textAlign: "center" }}
                    onClick={() =>
                      logout({
                        logoutParams: { returnTo: window.location.origin },
                      })
                    }
                  >
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
