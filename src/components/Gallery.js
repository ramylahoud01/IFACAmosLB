import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomNextButton = styled(Button)({
  width: "100px",
  height: "100px",
  fontSize: "36px",
});

const CustomPrevButton = styled(Button)({
  width: "100px",
  height: "100px",
  fontSize: "36px",
});

const Gallery = () => {
  const items = [
    {
      url: "https://i.ibb.co/DLn16ys/free-images.jpg"
    },
    {
      url: "https://i.ibb.co/y83z692/Zi-Cl-Jf-1920w.jpg"
    },
    {
      url: "https://i.ibb.co/DLn16ys/free-images.jpg"
    },
    {
      url: "https://i.ibb.co/y83z692/Zi-Cl-Jf-1920w.jpg"
    }
    

  ];

  return (
    <Carousel >
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = ({ item }) => {
  return (
    <Paper style={{ position: "relative" }}>
      <img src={item.url} alt={item.name} style={{ width: "100%" }} />
    </Paper>
  );
};

export default Gallery;
