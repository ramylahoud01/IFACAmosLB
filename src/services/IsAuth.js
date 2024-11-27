export const login = (email, password) => {
  return fetch("https://ifac-backend.vercel.app/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).catch((error) => {
    console.error("Error occurred :", error.message);
    throw error;
  });
};
