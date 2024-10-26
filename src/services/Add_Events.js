export const AddEvents = async (jsonbody) => {
  return fetch("https://ifac-backend.vercel.app/events", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(jsonbody),
  });
};
