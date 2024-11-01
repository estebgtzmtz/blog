import { FC, useCallback, useContext, useState } from "react";
import { DataContext } from "./DataContext";
import { Post } from "./DataContext.types";
import { ChildrenProps } from "../../common/types/types";
import useAxiosConfig from "../../hooks/useAxiosConfig";
import axios from "axios";
import { toast } from "react-toastify";

export const DataProvider: FC<ChildrenProps> = ({ children }) => {
  useAxiosConfig();

  const [posts, setPosts] = useState<Post[]>([]);
  const [currentPost, setCurrentPost] = useState<Post | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);

  const getPosts = async () => {
    setLoading(true);
    const {
      data: { ok, data },
    } = await axios.get("/api/getPosts");
    if (!ok) {
      setLoading(false);
    }

    setPosts(data);
    setLoading(false);
  };

  const getPostById = async (id: string) => {
    const {
      data: { ok, data },
    } = await axios.get(`/api/getPost/${id}`);
    if (!ok) {
      toast.error("Failed to find post.");
      return;
    }
    setCurrentPost(data);
    return;
  };

  const createPost = async (post: Post) => {
    const res = await Promise.all([
      await axios.post("/api/createPost", post),
      await getPosts(),
    ]);

    if (res[0].status !== 201) {
      toast.error("Failed to create post.");
      return;
    }

    toast.success("Post created successfully.");
    return;
  };

  const updatePost = async (id: string, updatedPost: Post) => {
    const res = await Promise.all([
      await axios.patch(`/api/updatePost/${id}`, updatedPost),
      await getPosts(),
    ]);

    if (res[0].status !== 200) {
      toast.error("Failed to update post.");
      return;
    }

    toast.success("Post updated successfully.");
    return;
  };

  const deletePost = async (id: string) => {
    const res = await Promise.all([
      await axios.delete(`/api/deletePost/${id}`),
      await getPosts(),
    ]);

    if (res[0].status !== 200) {
      toast.error("Failed to delete post.");
      return;
    }

    toast.info("Post deleted successfully.");
    return;
  };

  const searchPosts = useCallback(async (query: string) => {
    const {
      data: { data },
    } = await axios.get(`/api/searchPosts`, {
      params: { query },
    });

    setPosts(data);
  }, []);

  return (
    <DataContext.Provider
      value={{
        posts,
        setPosts,
        getPosts,
        getPostById,
        createPost,
        updatePost,
        deletePost,
        loading,
        currentPost,
        setCurrentPost,
        searchPosts,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
