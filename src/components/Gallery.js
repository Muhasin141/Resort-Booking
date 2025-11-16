import React from "react";
import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
`;
const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;
export default function Gallery() {
  const images = [
    "https://www.setaswall.com/wp-content/uploads/2017/12/Beach-Resort-Wallpaper-27-3840x2160.jpg",
    "https://wallpaper-house.com/data/out/9/wallpaper2you_305560.jpg",
    "https://images.pexels.com/photos/34732337/pexels-photo-34732337.jpeg?auto=compress&cs=tinysrgb&h=627&fit=crop&w=1200",
    "https://theluxurytravelexpert.com/wp-content/uploads/2023/02/THE-OBEROI-BEACH-RESORT-MAURITIUS.jpeg",
    "https://i.pinimg.com/originals/a3/49/1b/a3491bff425544c44a0deab9b06fbdb8.jpg",
  ];
  return (
    <div style={{ margin: "40px 0" }}>
      <h2 style={{ marginBottom: 20 }}>Gallery</h2>
      <Grid>
        {images.map((src, i) => (
          <Img key={i} src={src} />
        ))}
      </Grid>
    </div>
  );
}
