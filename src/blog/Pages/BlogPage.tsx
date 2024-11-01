import { useData } from "../../contexts/DataContext/DataProvider";
import { BlogCard } from "../components/BlogCard/BlogCard";
import { BlogLayout } from "../Layout/BlogLayout";
import { Post } from "../../contexts/DataContext/DataContext.types";
import { Box, IconButton, Skeleton, Typography } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useNavigate } from "react-router-dom";

const BlogPage = () => {
  const { posts, loading } = useData();

  const navigate = useNavigate();

  const handleCreatePost = () => {
    navigate("/createPost");
  };

  return (
    <BlogLayout>
      {!loading ? (
        posts.length > 0 ? (
          posts.map((post: Post) => (
            <BlogCard
              key={post._id}
              id={post?._id as string}
              title={post.postTitle}
              description={post.postDescription}
              createdAt={post.createdAt}
              updatedAt={post.updatedAt}
            />
          ))
        ) : (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Typography variant="h4" textAlign="center" marginTop={4}>
              No posts available, create one!
            </Typography>
            <IconButton onClick={handleCreatePost}>
              <AddCircleOutlineIcon sx={{ fontSize: 60 }} />
            </IconButton>
          </Box>
        )
      ) : (
        <Box display="flex" flexDirection="column" gap={2}>
          {[...Array(5)].map((_, index) => (
            <Skeleton
              key={index}
              variant="rectangular"
              width="100%"
              height={118}
            />
          ))}
        </Box>
      )}
    </BlogLayout>
  );
};

export default BlogPage;
