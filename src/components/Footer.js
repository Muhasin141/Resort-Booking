import React from "react";

import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const footerStyles = {
  container: {
    backgroundColor: "#1f2937",
    color: "white",
    padding: "2.5rem 1rem",
    marginTop: "4rem",
  },
  contentWrapper: {
    maxWidth: "72rem",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: "2.5rem",
  },
  mainSection: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "2.5rem",
  },
  brand: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: "#a5b4fc",
  },
  contactSection: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  contactItem: {
    fontSize: "0.875rem",
    color: "#d1d5db",
    display: "flex",
    alignItems: "center",
    gap: "0.5rem",
  },
  socialLinks: {
    display: "flex",
    gap: "1.5rem",
    marginTop: "0.5rem",
  },
  socialIcon: {
    fontSize: "1.5rem",
    color: "#9ca3af",
    textDecoration: "none",
    transition: "color 0.3s",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  navLink: {
    color: "#d1d5db",
    textDecoration: "none",
    fontSize: "1rem",
    transition: "color 0.3s",
  },
  copyright: {
    paddingTop: "1.5rem",
    borderTop: "1px solid #374151",
    textAlign: "center",
    fontSize: "0.875rem",
    color: "#6b7280",
  },
};

const Footer = () => {
  return (
    <footer style={footerStyles.container}>
      <div style={footerStyles.contentWrapper}>
        {/* Note: The 'md:flex md:justify-between' Tailwind classes remain for external styling support, 
            but the JavaScript style object no longer contains the @media query overrides. */}
        <div
          className="md:flex md:justify-between"
          style={footerStyles.mainSection}
        >
          <div style={footerStyles.brand}>Seaside Escape Resort</div>

          <div style={footerStyles.nav}>
            <a href="#book-now" style={footerStyles.navLink}>
              Book Now
            </a>
            <a href="#gallery" style={footerStyles.navLink}>
              Gallery
            </a>
            <a href="#services" style={footerStyles.navLink}>
              Services
            </a>
          </div>

          <div style={footerStyles.contactSection}>
            <div
              style={{
                ...footerStyles.brand,
                fontSize: "1rem",
                color: "#f9fafb",
                marginBottom: "0.5rem",
              }}
            >
              Contact Us
            </div>
            <div style={footerStyles.contactItem}>
              <FaPhone size={14} /> (555) 123-4567
            </div>
            <div style={footerStyles.contactItem}>
              <FaEnvelope size={14} /> hello@seasideresort.com
            </div>
            <div style={footerStyles.contactItem}>
              <FaMapMarkerAlt size={14} /> 101 Ocean View Dr, CA
            </div>

            <div style={footerStyles.socialLinks}>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.socialIcon}
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.socialIcon}
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                style={footerStyles.socialIcon}
              >
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <div style={footerStyles.copyright}>
          &copy; {new Date().getFullYear()} Seaside Escape Resort. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
