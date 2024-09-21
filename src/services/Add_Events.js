export const AddEvents = async (jsonbody) => {
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonbody),
    });
  
    return response;
  };
  