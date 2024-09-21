export const AddNews = async (news, image) => {
  const formData = new FormData();
  formData.append("title", news.title);
  formData.append("content", news.content);
  formData.append("NewsImage", image); // Make sure to append the image file

  const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/news`, {
    method: "POST",
    body: formData, // No need to set Content-Type; fetch will handle this automatically for FormData
  });

  return response;
};