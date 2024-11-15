import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full viewport height to center vertically
        backgroundColor: "#f5f5f5",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#4CAF50",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#4CAF50")}
        >
          <Link to="signup">Signup</Link>
        </button>
        <button
          style={{
            padding: "10px 20px",
            margin: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#2196F3",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1976D2")}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#2196F3")}
        >
                    <Link to="login">Login</Link>

        </button>
      </div>
    </div>
  );
}

export default Home;
