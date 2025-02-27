const { getMarsWeather } = require("../services/nasaService");

exports.fetchMarsWeather = async (req, res) => {
    try {
        const weatherData = await getMarsWeather();
        const solKeys = weatherData.sol_keys;

        const formattedWeather = solKeys.map((sol) => {
            const data = weatherData[sol];
            return {
                date: data.First_UTC?.split("T")[0] || "Unknown",
                sol: sol,
                temperature: {
                    average: data.AT?.av || "Missing data",
                    high: data.AT?.mx || "Missing data",
                    low: data.AT?.mn || "Missing data",
                },
                wind_speed: {
                    average: data.HWS?.av || "Missing data",
                    max: data.HWS?.mx || "Missing data",
                    min: data.HWS?.mn || "Missing data",
                },
                pressure: {
                    average: data.PRE?.av || "Missing data",
                    max: data.PRE?.mx || "Missing data",
                    min: data.PRE?.mn || "Missing data",
                },
                season: data.Season || "Unknown",
            };
        });

        res.json(formattedWeather);
    } catch (error) {
        console.error("Error fetching Mars weather data:", error.message || error);
        res.status(error.response?.status || 500).json({ error: error.response?.data?.error || "An error occurred while fetching Mars weather data." });
    }
};
