const GITHUB_URI = process.env.REACT_APP_GITHUB_URI;
// const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

// Search Users
export const searchUsers = async (text) => {
  const queryParam = new URLSearchParams({
    q: text,
  });
  try {
    const response = await fetch(`${GITHUB_URI}/search/users?${queryParam}`);
    const data = await response.json();
    console.log(data);

    return data.items;
  } catch (error) {
    console.log(error);
  }
};
