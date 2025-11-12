// src/api/post.js
/**
 * Mock posts data with more meaningful content
 */
const mockPosts = [
  {
    id: 1,
    title: "Getting Started with React",
    body: "React is a popular JavaScript library for building user interfaces. Learn the basics of components, props, and state management."
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    body: "Hooks are a powerful feature in React that let you use state and other React features in functional components. Learn about useState, useEffect, and custom hooks."
  },
  {
    id: 3,
    title: "React Router Fundamentals",
    body: "Learn how to implement client-side routing in your React applications using React Router. Handle navigation, route parameters, and nested routes."
  },
  {
    id: 4,
    title: "State Management with Context API",
    body: "Explore React's built-in Context API for managing global state. Learn how to create contexts, providers, and consume context values in your components."
  },
  {
    id: 5,
    title: "Building Responsive UIs",
    body: "Create beautiful, responsive user interfaces using modern CSS techniques like Flexbox, Grid, and media queries. Ensure your app looks great on all devices."
  },
  {
    id: 6,
    title: "Working with APIs",
    body: "Learn how to fetch data from APIs, handle loading and error states, and update your UI with the retrieved data using async/await and useEffect."
  },
  {
    id: 7,
    title: "Form Handling in React",
    body: "Master form handling in React. Learn about controlled components, form validation, and handling form submissions effectively."
  },
  {
    id: 8,
    title: "React Performance Optimization",
    body: "Optimize your React application's performance using techniques like memo, useMemo, useCallback, and proper key usage in lists."
  },
  {
    id: 9,
    title: "Testing React Applications",
    body: "Learn how to write tests for your React components using Jest and React Testing Library. Cover unit tests, integration tests, and testing hooks."
  },
  {
    id: 10,
    title: "CSS-in-JS Solutions",
    body: "Explore different CSS-in-JS solutions like styled-components and emotion. Learn how to style your components in a more maintainable way."
  }
];

/**
 * Fetch mock posts
 * @param {AbortSignal} signal - AbortController signal (not used in mock)
 */
export const fetchPosts = async (signal) => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockPosts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};
