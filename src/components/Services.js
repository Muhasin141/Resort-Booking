import React from "react";
import styled from "styled-components";

// 1. New styling for the main container (Grid)
const ServicesContainer = styled.div`
  padding: 60px 20px; /* Add overall padding for breathing room */
  background-color: #f4f7f6; /* Subtle light background */
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(280px, 1fr)
  ); /* Slightly wider min width */
  gap: 30px; /* Increased gap */
  max-width: 1200px; /* Max width for central alignment */
  margin: 0 auto; /* Center the grid */
`;

// 2. Enhanced Card Styling
const Card = styled.div`
  padding: 30px;
  border: none;
  border-radius: 12px; /* Smoother corners */
  background: #ffffff;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08); /* Soft, prominent shadow */
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  /* Hover Effect */
  &:hover {
    transform: translateY(-8px); /* Lift the card */
    box-shadow: 0 15px 35px rgba(66, 135, 245, 0.2); /* Tinted shadow on hover */
  }
`;

// 3. Styling for the Icon/Emoji
const Icon = styled.span`
  display: block;
  font-size: 3rem; /* Large icon size */
  margin-bottom: 15px;
  color: #4287f5; /* Primary accent color (Blue for seaside) */
`;

// 4. Styling for the Header and Paragraph
const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #333;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
`;

export default function Services() {
  return (
    <ServicesContainer>
      <Grid>
        <Card>
          <Icon>🛌</Icon>
          <ServiceTitle>Accommodation</ServiceTitle>
          <ServiceDescription>
            Luxury sea-view rooms and private villas, designed for ultimate
            relaxation and comfort.
          </ServiceDescription>
        </Card>
        <Card>
          <Icon>🛶</Icon>
          <ServiceTitle>Adventure</ServiceTitle>
          <ServiceDescription>
            Guided tours, kayaking, challenging coastal trekking, and thrilling
            water sports activities.
          </ServiceDescription>
        </Card>
        <Card>
          <Icon>🧘‍♀️</Icon>
          <ServiceTitle>Wellness & Spa</ServiceTitle>
          <ServiceDescription>
            Rejuvenating massages, dedicated yoga sessions, and holistic
            treatments tailored to your needs.
          </ServiceDescription>
        </Card>
      </Grid>
    </ServicesContainer>
  );
}
