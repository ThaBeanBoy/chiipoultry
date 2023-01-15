import Image from "next/image";

import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const imagePaths: string[] = [
  "/sliders/chickens_drinking_from_drinker.png",
  "/sliders/chicks_drinking_from_drinker.png",
  "/sliders/example_of_water_outlet.png",
  "/sliders/using_hose_pipe_on_bucket.png",
];

export default function ImageSlider() {
  return (
    <Swiper
      id="image-slider"
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper mb-32 w-full max-w-[475px]"
    >
      {imagePaths.map((imagePath, key) => (
        <SwiperSlide key={key}>
          <Image
            className="w-full rounded"
            src={imagePath}
            alt="drinker image"
            width={475}
            height={633}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
