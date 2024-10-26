export const GetNews = async () => {
  return fetch("https://ifac-backend.vercel.app/news", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
