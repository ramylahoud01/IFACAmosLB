import { Typography, Button, TextField, Stack } from "@mui/material";
import React, { useState, useEffect } from "react";
import { AddNews } from "../../services/Add_News";
import { Form, useNavigate } from "react-router-dom";
import ImageUploader from "../Image/ImageUploader";

function AddNewsPage() {
  const [News, setNews] = useState({ title: "", content: "" });
  const [image, setImage] = useState(null);
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the auth token is present in localStorage
    const token = localStorage.getItem("token");
    if (!token) {
      // Redirect to login page if no token
      navigate("/login");
    }
  }, [navigate]);

  const updateValue = (e, type) => {
    setNews((prevNewsData) => ({
      ...prevNewsData,
      [type]: e.target.value,
    }));
  };

  const HandleAddNews = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const response = await AddNews(News, image);
      if (response) {
        setloading(false);
        setNews({
          title: "",
          content: "",
        });
        navigate("/");
      } else {
        console.error("Failed to add News");
      }
    } catch (error) {
      console.error("Failed to add News");
    }
  };

  const handleSelectedFile = (selectedFile) => {
    setImage(selectedFile);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #F0F8FF 100%)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          component={"div"}
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "10px",
            display: "inline-block",
            justifyContent: "center",
            margin: "0 auto",
            boxShadow: "0 4px 8px rgba(170,170,170, 0.5)",
            padding: "0px 35px 20px 35px",
            marginTop: "100px",
          }}
        >
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              position: "relative",
            }}
            onSubmit={HandleAddNews}
            method="Post"
            encType="multipart/form-data"
          >
            <h2 style={{ color: "#004953", textAlign: "center" }}>News :</h2>
            <Stack>
              <TextField
                value={News.title}
                sx={{
                  m: "10px 0 0 0",
                  width: { xs: "25ch", md: "35ch", sm: "25ch" },
                }}
                onChange={(e) => updateValue(e, "title")}
                fullWidth
                label="Title"
                required
                variant="filled"
              />
            </Stack>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              spacing={2}
              mt={"10px"}
            >
              <TextField
                sx={{
                  m: "10px 0 0 0",
                  width: { xs: "25ch", md: "35ch", sm: "25ch" },
                }}
                value={News.content}
                onChange={(e) => updateValue(e, "content")}
                fullWidth
                label="Content"
                multiline
                rows={6}
                variant="filled"
                required
              />
            </Stack>
            <Stack
              direction={{ sm: "row", xs: "column" }}
              spacing={2}
              mt={"10px"}
            >
              <ImageUploader
                name={"candidateImage"}
                getSelectedFile={handleSelectedFile}
              />
            </Stack>
            <Button
              type="submit"
              sx={{ marginTop: "20px" }}
              color="primary"
              variant="contained"
            >
              {loading ? "Creating" : "Create"}
            </Button>
          </Form>
        </Typography>
      </div>
    </div>
  );
}

export default AddNewsPage;
