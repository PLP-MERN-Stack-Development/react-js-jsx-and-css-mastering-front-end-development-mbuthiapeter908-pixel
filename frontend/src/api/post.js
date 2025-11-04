// src/api/posts.js
/**
 * Fetch posts from JSONPlaceholder API
 */
export const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error("Failed to fetch posts");
    const data = await response.json();
    return data.slice(0, 20); // return first 20 posts
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
