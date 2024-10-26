export const GetNews = async () => {
  const response = await fetch(`ifac-backend.vercel.app/news`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  return response;
};
