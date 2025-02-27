import { api } from "./api";


const PhotoService = {
  /**
   * Fetches photos from the Mars Photos API.
   * @param {object} options
   * @param {string} options.roverName The name of the rover.
   * @param {number} options.sol The sol (martian day) to get photos for.
   * @param {string} [options.camera] The camera to get photos for.
   * @param {number} [options.page=1] The page number to get.
   * @param {number} [options.limit=20] The number of photos to return per page.
   * @returns {Promise<object[]>} A promise that resolves to an array of photos.
   */
  async getPhotos({ roverName, sol, camera, page = 1, limit = 20  }) {
    try {
      const response = await api.get(`mars-photos`, {
        params: {
            rover: roverName,
            sol: sol,
            camera : camera,
            page,  
            limit,  
        },
      });
      return response.data;
    } catch (error) {
      console.error("Error fetching photos:", error);
      throw error;
    }
  },
};
export default PhotoService;