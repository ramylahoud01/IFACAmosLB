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
  console.log(response.headers.get("content-type"));
  const rawText = await response.text();
  console.log("rawText", rawText);
  const data = await response.json();
  console.log("data", data);
  return response;
};
