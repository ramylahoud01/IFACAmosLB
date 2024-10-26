import { GetNews } from "../../services/Get_News";
import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Thumbnail_Image from "../../Thumbnail_Image.jpg";
import { CircularProgress } from "@mui/material";

const NewsContent = () => {
  const [loading, setLoading] = useState(false);
  const [Newslist, SetNewslist] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await GetNews();
        console.log("response", response);
        const data = await response.json();
        console.log("response", response);
        console.log("hyyy");
        console.log("data", data);
        if (response.status === 200) {
          // const data = await response.json();
          SetNewslist(data);
        } else {
          console.log("error");
        }
      } catch (error) {
        console.log("error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <CircularProgress />
      ) : (
        <Grid container spacing={3}>
          {Newslist.map((item, i) => (
            <Grid item key={i} xs={12}>
              <Item item={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

function Item({ item }) {
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "stretch", // Make image and content take the same height
        padding: "10px",
        maxWidth: 1000,
        margin: "auto",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 200, // Slightly larger width
          height: "auto", // Adjust height to match content
          objectFit: "cover", // Cover image without distortion
          borderRadius: "10px",
        }}
        image={
          // item.image
          //   ? `${process.env.REACT_APP_API_BASE_URL}${item.image}`
          //   :
          Thumbnail_Image
        }
        alt={item.title}
      />
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Make title and content fill height
          flex: 1,
          paddingLeft: "16px",
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          component="div"
          sx={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "8px", // Space between title and content
          }}
        >
          {item.title}
        </Typography>

        {/* Content */}
        <Typography
          variant="body2"
          sx={{
            fontSize: "14px",
            color: "#555",
            backgroundColor: "#f9f9f9",
            padding: "8px",
            borderRadius: "6px",
            flexGrow: 1, // Make content grow to take up available space
          }}
        >
          {item.content}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default NewsContent;
