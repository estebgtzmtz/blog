import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { formatDate } from "./helpers";

import { FC, useMemo } from "react";
import { BlogCardProps } from "./BlogCard.types";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { useData } from "../../../contexts/DataContext/DataProvider";
import { useNavigate } from "react-router-dom";
import { useAuthCustom } from "../../../contexts/AuthContext/AuthProvider";

export const BlogCard: FC<BlogCardProps> = ({
  id,
  title,
  description,
  createdAt,
}) => {
  const navigate = useNavigate();
  const { user } = useAuthCustom();
  const { deletePost, getPostById } = useData();

  const createdAtFormattedDate = formatDate(createdAt as string);

  const handleDelete = async () => {
    await deletePost(id);
  };

  const handleEdit = async () => {
    await getPostById(id);
    navigate(`/editPost/${id}`);
  };

  const truncatedDescription = useMemo(() => {
    const maxLength = 400;
    return description.length > maxLength
      ? `${description.slice(0, maxLength)}...`
      : description;
  }, [description]);

  return (
    <Card sx={{ m: 4 }}>
      <CardHeader
        title={title}
        subheader={`Created At: ${createdAtFormattedDate}`}
        avatar={
          <Avatar
            sx={{ bgcolor: red[500] }}
            aria-label="recipe"
            src={user?.picture}
          />
        }
      />
      <CardContent>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {truncatedDescription}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          size="small"
          color="primary"
          variant="contained"
          onClick={handleEdit}
        >
          Edit
        </Button>
        <IconButton color="primary" aria-label="delete" onClick={handleDelete}>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
