import React from "react";
import { Post } from "./const/types";

type Props = {
  posts: Post[];
};

async function fetchPosts() {
  const res = await fetch("http://localhost:3001/api/v1/posts");
  const posts = await res.json();
  return posts;
}

export default async function Page() {
  const posts = await fetchPosts();
  console.log(posts); // ターミナルに出力されます

  return (
    <div>
      <h1>Posts</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
}
