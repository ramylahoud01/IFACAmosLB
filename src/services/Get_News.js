export const GetNews = async () => {
  console.log(`${process.env.REACT_APP_API_BASE_URL}/news`, "API");
  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/news`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  console.log("response", response);
  console.log("hyyy");
  const data = await response.json();
  console.log("data", data);
  return response;
};
