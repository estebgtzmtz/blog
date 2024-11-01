import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const BlogPage = lazy(() => import("../Pages/BlogPage"));
const CreatePost = lazy(() => import("../Pages/CreatePost"));
const EditPost = lazy(() => import("../Pages/EditPost"));

const BlogRoutes = () => {
  return (
    <Suspense fallback={<div>Loading page...</div>}>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/editPost/:id" element={<EditPost />} />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default BlogRoutes;
