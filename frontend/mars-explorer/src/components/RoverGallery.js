import React, { useState, useEffect, useRef } from "react";
import { Galleria } from "primereact/galleria";
import "primeflex/primeflex.css";
import "../App.css";
import PhotoService from "../services/PhotosService";
import { Skeleton } from "primereact/skeleton";
import { Paginator } from "primereact/paginator";
import errorAnimation from "../assets/images-not-found.json";
import Lottie from "lottie-react";

/**
 * A component that displays a gallery of images taken by a Mars rover.
 *
 * @param {Object} selectedRover - The Mars rover to fetch images for.
 * @param {string} selectedCamera - The camera to fetch images for.
 * @param {number} selectedSol - The Sol (Martian day) to fetch images for.
 * @returns {ReactElement} A React element containing the gallery of images.
 */
export default function RoverGallery({
  selectedRover,
  selectedCamera,
  selectedSol,
}) {
  const [images, setImages] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [errorOccured, setErrorOccured] = useState(false);
  const galleria = useRef(null);
  const limit = 20;

  const [first, setFirst] = useState(0);

  const onPageChange = (event) => {
    setFirst(event.first);
  };
  const fetchImages = async () => {
    setLoading(true);
    setErrorOccured(false);
    try {
      const data = await PhotoService.getPhotos({
        roverName: selectedRover.name.toLowerCase(),
        sol: selectedSol,
        camera: selectedCamera,
        page: page,
        limit: limit,
      });

      // Check if photos exist
      if (data.photos.length === 0) {
        setImages([]);
        return;
      }

      // Format images for Galleria
      const formattedImages = data.photos.map((photo) => ({
        itemImageSrc: photo.img_src,
        thumbnailImageSrc: photo.img_src,
        alt: `Mars Rover - ${photo.camera.full_name}`,
      }));

      setImages(formattedImages);
      // Set total pages from backend
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching images:", error);
      setErrorOccured(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (selectedSol && selectedCamera) {
      fetchImages();
    }
  }, [selectedRover, selectedSol, page, selectedCamera]);

  const itemTemplate = (item) => (
    <img
      src={item.itemImageSrc}
      alt={item.alt}
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );

  const thumbnailTemplate = (item) => (
    <img
      src={item.thumbnailImageSrc}
      alt={item.alt}
      style={{
        width: "80px",
        height: "80px",
        display: "block",
        objectFit: "cover",
      }}
    />
  );

  return (
    <div className="flex flex-column align-items-center justify-content-center h-full w-full ">
      {loading ? (
        <div className="flex justify-content-center align-items-center grid w-full gap-4">
          {Array.from({ length: 20 }).map((_, index) => (
            <Skeleton key={index} size="9rem" className="col-3" />
          ))}
        </div>
      ) : !errorOccured && images.length > 0 ? (
        <div className="flex flex-column align-items-center">
          <Galleria
            ref={galleria}
            value={images}
            numVisible={7}
            style={{ maxWidth: "850px" }}
            activeIndex={activeIndex}
            onItemChange={(e) => setActiveIndex(e.index)}
            circular
            fullScreen
            showItemNavigators
            showThumbnails={false}
            item={itemTemplate}
            thumbnail={thumbnailTemplate}
          />

          <div className="grid w-full justify-content-center gap-4">
            {images.map((image, index) => (
              <div
                className="w-9rem h-9rem col-3 flex justify-content-center"
                key={index}
              >
                <img
                  key={index}
                  className="w-9rem h-9rem cursor-pointer"
                  src={image.thumbnailImageSrc}
                  alt={image.alt}
                  style={{ display: "block", objectFit: "cover" }}
                  onClick={() => {
                    setActiveIndex(index);
                    galleria.current.show();
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-column align-items-center justify-content-center h-full w-full text-center">
          <Lottie
            animationData={errorAnimation}
            loop={true}
            style={{ width: 300, height: 300 }}
          />
          <p className="text-lg font-semibold mt-4">
            {selectedRover
              ? `No images of the ${selectedRover.name} rover found for Sol ${selectedSol} and Camera ${selectedCamera}.`
              : "No rover is selected, please select one!"}
          </p>
        </div>
      )}
      <div className="flex align-items-center justify-content-center p-4 mt-4">
        <Paginator
          first={(page - 1) * limit}
          rows={limit}
          totalRecords={totalPages * limit}
          onPageChange={(e) => setPage(e.page + 1)}
        />
      </div>
    </div>
  );
}
