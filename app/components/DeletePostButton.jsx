"use client";

import { useRouter } from "next/navigation";

export default function DeletePostButton({ postId }) {
  const route = useRouter();
  async function handleClick() {
    try {
      await fetch(`/api/post/${postId}`, {
        method: "DELETE",
      });
      route.refresh();
    } catch (error) {
      console.error(e);
    }
  }
  return <button onClick={handleClick}>Delete Post</button>;
}
