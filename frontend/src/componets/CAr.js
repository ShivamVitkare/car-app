import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

function CAr() {
  const [data, setData] = useState([]);

  // Fetch all car data
  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:4000/api/v1/get");
      console.log("Fetch response:", res.data);
      setData(res.data.cars); // Ensure `cars` exists in the response
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Handle update operation
  const handleUpdate = async (item) => {
    const updatedCar = { ...item, name: "Updated Car Name" }; // Example updated data
    try {
      const res = await axios.put(`http://localhost:4000/api/v1/updateCar/${item.id}`, updatedCar);
      console.log("Update response:", res.data);
      setData((prevData) =>
        prevData.map((car) => (car.id === item.id ? { ...car, ...res.data.updatedCar } : car))
      );
    } catch (error) {
      console.error("Error updating car:", error);
    }
  };

  // Handle delete operation
  const handleDelete = async (item) => {
    try {
      await axios.delete(`http://localhost:4000/api/v1/delete/${item.id}`);
      console.log(`Deleted car with ID: ${item.id}`);
      setData((prevData) => prevData.filter((car) => car.id !== item.id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  };

  return (
    <div>
      <div style={{ margin: "20px 0" }}>
        <h3
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Car Section
        </h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {data.length > 0 ? (
          <Card data={data} onUpdate={handleUpdate} onDelete={handleDelete} />
        ) : (
          <h3 style={{ color: "#777" }}>Loading...</h3>
        )}
      </div>
    </div>
  );
}

export default CAr;
