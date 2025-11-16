import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const API_URL = "https://booking-resort-backend.vercel.app/api/bookings";

const Page = styled.div`
  min-height: 100vh;
  background: #f5f6fa;
  padding: 40px;
  font-family: Inter, sans-serif;

  @media (max-width: 600px) {
    padding: 20px 10px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const Header = styled.header`
  padding-bottom: 20px;
  margin-bottom: 30px;
  border-bottom: 4px solid #6366f1;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 800;
  color: #111827;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const SubText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #4f46e5;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

const TableWrapper = styled.div`
  background: white;
  border-radius: 14px;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

const Thead = styled.thead`
  background: #4f46e5;
  color: white;
`;

const Th = styled.th`
  padding: 14px 16px;
  font-size: 11px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: left;
  letter-spacing: 1px;
  white-space: nowrap;

  @media (max-width: 600px) {
    padding: 10px 8px;
  }
`;

const Tr = styled.tr`
  background: ${(props) => (props.even ? "#f9fafb" : "white")};

  &:hover {
    background: #eef2ff;
    transition: 0.15s;
  }
`;

const Td = styled.td`
  padding: 14px 16px;
  font-size: 14px;
  color: #1f2937;
  white-space: normal;
  word-break: break-word;
  max-width: 150px;

  @media (max-width: 600px) {
    padding: 10px 8px;
    font-size: 12px;
    max-width: 120px;
  }
`;

const Badge = styled.span`
  padding: 4px 8px;
  border-radius: 20px;
  font-size: 10px;
  font-weight: 800;
  text-transform: uppercase;
  background: ${(props) =>
    props.status === "cancelled"
      ? "#fee2e2"
      : props.status === "pending"
      ? "#fef9c3"
      : "#dcfce7"};
  color: ${(props) =>
    props.status === "cancelled"
      ? "#b91c1c"
      : props.status === "pending"
      ? "#b45309"
      : "#15803d"};
  border: 1px solid
    ${(props) =>
      props.status === "cancelled"
        ? "#fecaca"
        : props.status === "pending"
        ? "#fde68a"
        : "#bbf7d0"};
`;

const Footer = styled.footer`
  margin-top: 25px;
  font-size: 12px;
  text-align: center;
  color: #6b7280;

  @media (max-width: 600px) {
    font-size: 10px;
  }
`;

const BackButton = styled.button`
  background: #4f46e5;
  color: white;
  border: none;
  padding: 10px 18px;
  font-size: 14px;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 20px;
  font-weight: 600;
  transition: 0.2s;

  &:hover {
    background: #4338ca;
  }

  @media (max-width: 600px) {
    padding: 8px 14px;
    font-size: 12px;
  }
`;

const formatDateRange = (checkInDateString, checkOutDateString) => {
  if (!checkInDateString || !checkOutDateString) return "N/A";
  try {
    const checkIn = new Date(checkInDateString);
    const checkOut = new Date(checkOutDateString);

    const dateOnlyFormatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
    });

    const fullDateFormatter = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    return `${dateOnlyFormatter.format(checkIn)} - ${fullDateFormatter.format(
      checkOut
    )}`;
  } catch {
    return "Invalid Date";
  }
};

const AdminView = () => {
  const navigate = useNavigate();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error(`Server Error ${response.status}`);
        }

        const result = await response.json();
        setBookings(result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, []);

  if (loading) {
    return (
      <Page>
        <Container style={{ textAlign: "center", paddingTop: "80px" }}>
          <h2>Loading reservations…</h2>
        </Container>
      </Page>
    );
  }

  if (error) {
    return (
      <Page>
        <Container
          style={{ textAlign: "center", paddingTop: "80px", color: "red" }}
        >
          <BackButton onClick={() => navigate("/")}>← Go Back</BackButton>
          <h2>Error loading data</h2>
          <p>{error}</p>
        </Container>
      </Page>
    );
  }

  if (bookings.length === 0) {
    return (
      <Page>
        <Container style={{ textAlign: "center", paddingTop: "80px" }}>
          <h2>No Reservations Found</h2>
          <BackButton onClick={() => navigate("/")}>← Go Back</BackButton>
        </Container>
      </Page>
    );
  }

  return (
    <Page>
      <Container>
        <BackButton onClick={() => navigate("/")}>← Go Back</BackButton>
        <Header>
          <Title>Resort Reservations</Title>
          <SubText>Viewing {bookings.length} submitted reservations.</SubText>
        </Header>

        <TableWrapper>
          <Table>
            <Thead>
              <tr>
                <Th>Customer</Th>
                <Th>Dates</Th>
                <Th>Room Info</Th>
                <Th>Status</Th>
                <Th>Booking ID</Th>
              </tr>
            </Thead>

            <tbody>
              {bookings.map((booking, index) => (
                <Tr key={booking._id} even={index % 2 === 0}>
                  <Td>
                    <strong>{booking.name || "Anonymous"}</strong>
                    <div style={{ fontSize: "12px", color: "#4f46e5" }}>
                      {booking.email}
                    </div>
                  </Td>

                  <Td>{formatDateRange(booking.checkIn, booking.checkOut)}</Td>

                  <Td>
                    {booking.roomType} <br />
                    <small>{booking.guests} Guest(s)</small>
                  </Td>

                  <Td>
                    <Badge status={booking.status?.toLowerCase()}>
                      {booking.status}
                    </Badge>
                  </Td>

                  <Td style={{ fontSize: "12px", color: "#6b7280" }}>
                    {booking._id}
                  </Td>
                </Tr>
              ))}
            </tbody>
          </Table>
        </TableWrapper>

        <Footer>Data source: {API_URL}</Footer>
      </Container>
    </Page>
  );
};

export default AdminView;
