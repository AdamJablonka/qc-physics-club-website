"use client";
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box, Container } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/swiper.scss";
import Image from "next/image";
import { useTheme } from "@mui/material/styles";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

interface ImageData {
  src: string;
  alt: string;
  legend?: string;
  width?: number;
  height?: number;
}

interface ImageCarouselProps {
  images: ImageData[];
  width: string;
}

export const ImageCarousel = ({ images, width}: ImageCarouselProps) => {
  const theme = useTheme();

  return (
    <Box>
      <Swiper
        style={
          {
            width: `${width}`,
            paddingBottom: "2rem",
          } as React.CSSProperties
        }
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect="coverflow"
        navigation
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1.25,
            spaceBetween: 10,
          },
          320: {
            slidesPerView: 1.25,
            spaceBetween: 0.5,
          },
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width || 1280}
              height={image.height || 720}
              layout="responsive"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};
