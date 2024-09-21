export const GetEvents  = async () => {

  
    const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/events`, {
      headers: {
      },
      method: "GET",
    });
  
    return response;
  };
  