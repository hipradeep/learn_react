import React, { useState } from "react";

function CarDetails() {
    // State as an object
    const [car, setCar] = useState({
        brand: "Toyota",
        model: "Corolla",
        year: 2020
    });

    return (
        <div>
            <h2>Car Details</h2>
            <p>Brand: {car.brand}</p>
            <p>Model: {car.model}</p>
            <p>Year: {car.year}</p>
            <button onClick={() => setCar({ ...car, model: "Camry" })}>Change Model</button>
            <button onClick={() => setCar({ ...car, year: car.year + 1 })}>Update Year</button>
        </div>
    );
}

export default CarDetails;
