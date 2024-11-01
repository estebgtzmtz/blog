import { BottomAppBar } from "../Layout/components/BottomAppBar/BottomAppBar";
import { PostForm } from "../../ui/components/PostForm/PostForm";
import { TopAppBar } from "../Layout/components/TopAppBar/TopAppBar";

const CreatePost = () => {
  return (
    <>
      <TopAppBar />
      <PostForm />;
      <BottomAppBar />
    </>
  );
};

export default CreatePost;
