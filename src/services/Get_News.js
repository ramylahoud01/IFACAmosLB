export const GetNews = async () => {
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/news`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });

  return response;
};
