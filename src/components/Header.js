import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: 60vh;

  background-image: url("https://wallpapers.com/images/hd/green-trees-on-pathway-nature-6ak3wtd5xes20owl.jpg");
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  color: white;
`;
const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
`;
const Content = styled.div`
  position: relative;
  z-index: 1;
  padding-left: 40px;
`;

export default function Header() {
  return (
    <HeroSection>
      <Overlay />
      <Content>
        <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
          Seaside Escape Resort
        </h1>
        <p style={{ fontSize: "20px", marginTop: 10 }}>
          Relax. Explore. Repeat.
        </p>
        <a href="#book-now">
          <button
            style={{
              padding: "10px 20px",
              background: "gold",
              border: "none",
              marginTop: 20,
              borderRadius: "4px",
            }}
          >
            Book Now
          </button>
        </a>
      </Content>
    </HeroSection>
  );
}
