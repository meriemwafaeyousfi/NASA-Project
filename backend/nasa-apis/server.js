require("dotenv").config();
const express = require("express");
const cors = require("cors");
const marsPhotosRoutes = require("./src/routes/marsPhotosRoutes");
const marsWeatherRoutes = require("./src/routes/marsWeatherRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({ origin: "http://localhost:3001" }));
app.use(express.json());

// Routes
app.use("/mars-photos", marsPhotosRoutes);
app.use("/mars-weather", marsWeatherRoutes);

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});