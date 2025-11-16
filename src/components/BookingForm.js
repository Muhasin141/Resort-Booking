import React, { useState } from "react";

const API_URL = "https://booking-resort-backend.vercel.app/api/bookings";

const roomTypes = [
  "Luxury Cabin (2 Guests)",
  "Premium Suite (4 Guests)",
  "Family Villa (6 Guests)",
  "Honeymoon Suite (2 Guests)",
  "Forest Tent (4 Guests)",
];

const styles = {
  formContainer: {
    maxWidth: "48rem",
    margin: "0 auto",
    padding: "2rem",
    backgroundColor: "white",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    borderRadius: "0.75rem",
  },
  label: {
    display: "block",
    fontSize: "0.875rem",
    lineHeight: "1.25rem",
    fontWeight: "500",
    color: "#4b5563",
  },
  input: {
    marginTop: "0.25rem",
    display: "block",
    width: "100%",
    border: "1px solid #d1d5db",
    borderRadius: "0.375rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    padding: "0.75rem",
  },
  submitButtonContainer: {
    marginTop: "2rem",
  },
};

const buttonStyles = {
  base: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    paddingTop: "0.75rem",
    paddingBottom: "0.75rem",
    paddingLeft: "1rem",
    paddingRight: "1rem",
    border: "1px solid transparent",
    borderRadius: "0.375rem",
    boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    fontSize: "1.125rem",
    fontWeight: "500",
    color: "white",
    backgroundColor: "#4f46e5",
    cursor: "pointer",
  },
  disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
  className:
    "hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
};

const StatusMessage = ({ status, message }) => {
  if (!status) return null;

  let baseStyle = {
    padding: "0.75rem",
    borderRadius: "0.375rem",
    marginBottom: "1rem",
    textAlign: "center",
    fontWeight: "600",
  };

  let specificStyle = {};
  if (status === "success") {
    specificStyle = {
      backgroundColor: "#d1fae5",
      color: "#047857",
    };
  } else if (status === "error") {
    specificStyle = {
      backgroundColor: "#fee2e2",
      color: "#b91c1c",
    };
  } else if (status === "loading") {
    specificStyle = {
      backgroundColor: "#dbeafe",
      color: "#1d4ed8",
    };
  }

  return <div style={{ ...baseStyle, ...specificStyle }}>{message}</div>;
};

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
    guests: 1,
    roomType: roomTypes[0],
    bookedByUserId: "test-user-fstack-123",
  });
  const [status, setStatus] = useState(null);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("Processing your booking...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        let errorMessage = "An unexpected error occurred.";
        if (result && result.error) {
          errorMessage = result.error;
        }
        throw new Error(errorMessage);
      }

      setStatus("success");
      setMessage(
        "Booking is Under Process,Please wait for the confirmation! Reference ID: " +
          result.data._id
      );

      alert("Your booking is placed");

      setFormData({
        name: "",
        email: "",
        checkIn: "",
        checkOut: "",
        guests: 1,
        roomType: roomTypes[0],
        bookedByUserId: "test-user-fstack-123",
      });
    } catch (error) {
      console.error("Booking submission error:", error);
      setStatus("error");
      setMessage("Booking Failed: " + (error.message || "Network error."));
    }
  };

  const finalButtonStyles = {
    ...buttonStyles.base,
    ...(status === "loading" ? buttonStyles.disabled : {}),
  };

  return (
    <form onSubmit={handleSubmit} style={styles.formContainer}>
      <StatusMessage status={status} message={message} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="col-span-1">
          <label htmlFor="name" style={styles.label}>
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            className="focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="email" style={styles.label}>
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            required
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            className="focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="checkIn" style={styles.label}>
            Check-in Date
          </label>
          <input
            type="date"
            name="checkIn"
            id="checkIn"
            required
            value={formData.checkIn}
            onChange={handleChange}
            style={styles.input}
            className="focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="checkOut" style={styles.label}>
            Check-out Date
          </label>
          <input
            type="date"
            name="checkOut"
            id="checkOut"
            required
            value={formData.checkOut}
            onChange={handleChange}
            style={styles.input}
            className="focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div className="col-span-1">
          <label htmlFor="roomType" style={styles.label}>
            Room Type
          </label>
          <select
            name="roomType"
            id="roomType"
            required
            value={formData.roomType}
            onChange={handleChange}
            style={{ ...styles.input, backgroundColor: "white" }}
            className="focus:ring-indigo-500 focus:border-indigo-500"
          >
            {roomTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="col-span-1">
          <label htmlFor="guests" style={styles.label}>
            Number of Guests
          </label>
          <input
            type="number"
            name="guests"
            id="guests"
            min="1"
            required
            value={formData.guests}
            onChange={handleChange}
            style={styles.input}
            className="focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
      </div>

      <div style={styles.submitButtonContainer}>
        <button
          type="submit"
          disabled={status === "loading"}
          style={finalButtonStyles}
          className={buttonStyles.className}
        >
          {status === "loading" ? "Submitting..." : "Confirm Booking"}
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
