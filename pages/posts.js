//import { useState, useEffect } from "react";
import { MainLayout } from "../components/MainLayout";

export default function Posts({ posts }) {
  //const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   async function load() {
  //     const response = await fetch("http://localhost:4200/posts");
  //     const posts = await response.json();
  //     setPosts(posts);
  //   }
  //   load();
  // }, []);

  return (
    <MainLayout title="Posts page">
      <h1>Posts page</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </MainLayout>
  );
}

Posts.getInitialProps = async () => {
  const response = await fetch("http://localhost:4200/posts");
  const posts = await response.json();

  return {
    posts,
  };
};
