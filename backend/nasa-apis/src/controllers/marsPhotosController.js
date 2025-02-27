const { getMarsPhotos } = require("../services/nasaService");

exports.fetchMarsPhotos = async (req, res) => {
    const { rover, sol, camera, earth_date, page = 1, limit = 20 } = req.query;

    try {
        if (!["curiosity", "opportunity", "spirit"].includes(rover?.toLowerCase())) {
            return res.status(400).json({ error: "Invalid rover name. Use 'curiosity', 'opportunity', or 'spirit'." });
        }

        const photos = await getMarsPhotos(rover, sol, camera, earth_date);

        if (photos.length === 0) {
            return res.status(404).json({ message: "No photos found for the specified criteria." });
        }

        // Pagination
        const pageNumber = parseInt(page, 10);
        const limitNumber = parseInt(limit, 10);
        const startIndex = (pageNumber - 1) * limitNumber;
        const endIndex = startIndex + limitNumber;
        const paginatedPhotos = photos.slice(startIndex, endIndex);

        res.json({
            page: pageNumber,
            limit: limitNumber,
            totalPhotos: photos.length,
            totalPages: Math.ceil(photos.length / limitNumber),
            photos: paginatedPhotos,
        });

    } catch (error) {
        console.error("Error fetching Mars Rover photos:", error.message || error);
        res.status(error.response?.status || 500).json({ error: error.response?.data?.error || "An error occurred while fetching Mars Rover photos." });
    }
};
