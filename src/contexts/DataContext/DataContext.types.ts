/* eslint-disable no-unused-vars */
export interface Post {
  _id?: string;
  postTitle: string;
  postDescription: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface DataContextProps {
  posts: Post[];
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  getPosts: () => Promise<void>;
  getPostById: (id: string) => Promise<void>;
  createPost: (post: Post) => Promise<void>;
  updatePost: (id: string, updatedPost: Post) => Promise<void>;
  deletePost: (id: string) => Promise<void>;
  searchPosts: (search: string) => void;
  loading: boolean;
  currentPost?: Post;
  setCurrentPost: React.Dispatch<React.SetStateAction<Post | undefined>>;
}
