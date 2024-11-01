import { useNavigate } from "react-router-dom";

import { Paper, BottomNavigation, BottomNavigationAction } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

import { useState } from "react";

export const BottomAppBar = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState(0);

  const handleCreatePost = () => {
    navigate("/createPost");
  };

  const handleMain = () => {
    navigate("/");
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(_, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Recents"
          icon={<HomeIcon />}
          onClick={handleMain}
        />
        <BottomNavigationAction
          label="Create Post"
          icon={<NoteAddIcon />}
          onClick={handleCreatePost}
        />
      </BottomNavigation>
    </Paper>
  );
};
