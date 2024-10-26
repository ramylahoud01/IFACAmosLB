export const GetNews = async () => {
  console.log(`${process.env.REACT_APP_API_BASE_URL}/news`, "API");
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/news`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  return response;
};
