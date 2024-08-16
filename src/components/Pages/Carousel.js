"use client";
import { BaseURL } from "@/utils/constant";
/* eslint-disable @next/next/no-img-element */
import { Carousel } from "@material-tailwind/react";
import axios from "axios";
import { useEffect, useState } from "react";
 
export function CarouselDefault() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get(`${BaseURL}/api/images`)
    .then((res) => {
      console.log(res.data);
      setImages(res.data);
    })
  }
  , []);

  return (
    <Carousel loop={true} autoplay={0.5}  className="rounded-xl h-[350px]">
      {
        images.map((image,index) => (
          <img
          key={index}
        src={image?.imageUrl}
        alt={image?.title}
        className="h-full w-full object-cover"
      />
        ))
      }
      
    </Carousel>
  );
}