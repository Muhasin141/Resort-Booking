import React from "react";
import { useNavigate } from "react-router-dom";

const AdminSection = () => {
  const navigate = useNavigate();

  const handleViewBookings = () => {
    navigate("/admin-view");
  };

  const styles = {
    container: {
      padding: "2rem",
      maxWidth: "800px",
      margin: "0 auto",
      textAlign: "center",
    },
    heading: {
      fontSize: "2.5rem",
      color: "#333",
      marginBottom: "1.5rem",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      color: "white",
      backgroundColor: "#007bff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Admin View</h1>
      <button style={styles.button} onClick={handleViewBookings}>
        View Booking List
      </button>
    </div>
  );
};

export default AdminSection;
