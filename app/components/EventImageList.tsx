"use client";
import React, { useState } from "react";
import { ImageList, ImageListItem, Modal, Box } from "@mui/material";
import Image from "next/image";
import { FadeOnScroll } from "./FadeOnScroll";

interface EventImageListProps {
  eventPhotos: {
    src: string;
    alt: string;
  }[];
}

const EventImageList: React.FC<EventImageListProps> = ({ eventPhotos }) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleOpen = (src: string) => {
    setSelectedImage(src);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setOpen(false);
  };

  return (
    <>
      <ImageList
        sx={{
          width: "100%",
          height: "100%",
          margin: "5rem",
          overflow: "hidden",
        }}
        variant="woven"
        cols={3}
        gap={20}
      >
        {eventPhotos.map((item) => (
          <ImageListItem key={item.src}>
            <FadeOnScroll>
              <Image
                src={`${item.src}`}
                alt={item.alt}
                width={400}
                height={400}
                onClick={() => handleOpen(item.src)}
              />
            </FadeOnScroll>
          </ImageListItem>
        ))}
      </ImageList>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "3rem",
        }}
      >
        {selectedImage ? (
          <Box sx={{ outline: "none" }}>
            <Image
              src={selectedImage}
              alt="Selected"
              layout="responsive"
              width={800}
              height={600}
            />
          </Box>
        ) : (
          <></>
        )}
      </Modal>
    </>
  );
};

export default EventImageList;
