import React from "react";

function Card({ data, onUpdate, onDelete }) {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", padding: "20px" }}>
      {data &&
        data.map((item, i) => {
          return (
            <div
              key={i}
              style={{
                width: "250px",
                padding: "15px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "10px",
                backgroundColor: "#fff",
                textAlign: "center",
                transition: "transform 0.2s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <h1 style={{ fontSize: "18px", margin: "10px 0", color: "#333" }}>{item.name}</h1>
              <p style={{ fontSize: "14px", color: "#555", margin: "10px 0" }}>{item.desc}</p>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
                src={item.image}
                alt={item.name}
              />
              <div style={{ display: "flex", gap: "10px", marginTop: "15px" }}>
                <button
                  onClick={() => onUpdate(item)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Update
                </button>
                <button
                  onClick={() => onDelete(item)}
                  style={{
                    padding: "8px 12px",
                    backgroundColor: "#f44336",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default Card;
