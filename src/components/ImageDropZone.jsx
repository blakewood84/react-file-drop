import React, { useState, useCallback } from "react";

export default function ImageDropZone() {
  const [imagePreview, setImagePreview] = useState(null);
  const [isHover, setIsHover] = useState(false);

  const handleDrop = useCallback((event) => {
    event.preventDefault();

    const reader = new FileReader();
    const file = event.dataTransfer.files[0];

    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    reader.readAsDataURL(file);
  }, []);

  const handleDragOver = (event) => {
    console.log("set hover");
    event.preventDefault();
    setIsHover(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsHover(false);
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      style={{ border: "1px solid orange", padding: "10px" }}
    >
      {imagePreview ? (
        <img src={imagePreview} />
      ) : (
        <>
          <p>Drop an image here</p>
          {isHover && "+"}
        </>
      )}
    </div>
  );
}
