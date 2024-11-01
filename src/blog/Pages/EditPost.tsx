import { useData } from "../../contexts/DataContext/DataProvider";
import { PostForm } from "../../ui/components/PostForm/PostForm";
import { BottomAppBar } from "../Layout/components/BottomAppBar/BottomAppBar";
import { TopAppBar } from "../Layout/components/TopAppBar/TopAppBar";

const EditPost = () => {
  const { currentPost } = useData();

  return (
    <>
      <TopAppBar />
      <PostForm
        postTitle={currentPost?.postTitle ?? ""}
        postDescription={currentPost?.postDescription ?? ""}
      />
      <BottomAppBar />
    </>
  );
};

export default EditPost;
