export const GetEvents = async () => {
  return fetch("https://ifac-backend.vercel.app/events", {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });
};
