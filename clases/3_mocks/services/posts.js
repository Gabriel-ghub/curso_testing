const endpoint = "https://jsonplaceholder.typicode.com/posts";

export const getPosts = async () => {
  const response = await fetch(endpoint);
  return response.json();
};
