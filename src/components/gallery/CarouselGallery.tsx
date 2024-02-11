import { Paper, Theme } from "@mui/material";
import React from "react";
import Carousel from "react-material-ui-carousel";

interface ImageItem {
  source: string;
}

const Item: React.FC<{ items: ImageItem[] }> = ({ items }) => {
  const imgStyle: React.CSSProperties = {
    width: "100%", // Occupy full width of the slot
    height: "100%", // Occupy full height of the slot
    objectFit: "cover", // Maintain aspect ratio and cover the entire slot
  };

  return (
    <Paper sx={{ width: "20%", display: "flex" }}>
      {items.map((item, index) => (
        <img
          key={index}
          src={item.source}
          style={imgStyle}
          alt={`carousel-item-${index}`}
        />
      ))}
    </Paper>
  );
};

const CarouselGallery: React.FC<{
  theme: Theme;
  slides: ImageItem[][];
}> = (props) => {
  return (
    <>
      <Carousel
        autoPlay={false}
        navButtonsAlwaysVisible={true}
        indicators={false}
        animation="slide"
        navButtonsProps={{
          style: {
            backgroundColor: "transparent",
            color: "#000",
          },
        }}
      >
        {props.slides.map((slideItems, index) => (
          <Item key={index} items={slideItems} />
        ))}
      </Carousel>
    </>
  );
};

export default CarouselGallery;
