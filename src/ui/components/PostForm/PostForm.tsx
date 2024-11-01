import { useForm, SubmitHandler } from "react-hook-form";
import { PostFormInputsProps } from "./PostForm.types";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useData } from "../../../contexts/DataContext/DataProvider";
import { useNavigate, useParams } from "react-router-dom";
import { FC } from "react";

export const PostForm: FC<PostFormInputsProps> = ({
  postTitle,
  postDescription,
}) => {
  const { id } = useParams<{ id: string }>();
  const { createPost, updatePost, deletePost } = useData();
  const navigation = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<PostFormInputsProps>({
    defaultValues: {
      postTitle: postTitle,
      postDescription: postDescription,
    },
  });

  const onSubmit: SubmitHandler<PostFormInputsProps> = async (data) => {
    if (id) {
      await updatePost(id, data);
    } else {
      await createPost(data);
    }
    navigation("/");
    reset();
  };

  const handleDelete = async () => {
    if (id) {
      await deletePost(id);
      navigation("/");
    }
  };
  return (
    <Box
      component="form"
      noValidate
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width: "80vw",
        height: "50vh",
        margin: "auto",
      }}
    >
      <Typography variant="h4">
        {`${id ? "Update" : "Create"} a post`}
      </Typography>
      <TextField
        label="Post Title"
        type="text"
        fullWidth
        {...register("postTitle", {
          required: "Post title is required",
        })}
        error={!!errors.postTitle}
        helperText={errors.postTitle?.message}
      />

      <TextField
        label="Post Description"
        fullWidth
        multiline
        rows={4}
        {...register("postDescription", {
          required: "Post description is required",
        })}
        error={!!errors.postDescription}
        helperText={errors.postDescription?.message}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleSubmit(onSubmit)}
      >
        {`${id ? "Update" : "Create"} a post`}
      </Button>
      {id && (
        <Button
          type="submit"
          variant="contained"
          color="error"
          fullWidth
          onClick={handleDelete}
        >
          Delete
        </Button>
      )}
    </Box>
  );
};
