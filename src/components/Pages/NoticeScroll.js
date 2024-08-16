"use client";
import { BaseURL } from "@/utils/constant";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "@/components/Navbar/menu.css";
import { Button } from "@material-tailwind/react";
import { FaFilePdf } from "react-icons/fa6";
import Link from "next/link";

const NoticeSlider = ({ notices }) => {
  const [index, setIndex] = useState(0);

  console.log(notices);

  // Create a duplicated list to enable infinite scroll effect
  const duplicatedNotices = [...notices, ...notices];

  console.log(duplicatedNotices);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) =>
        prevIndex === duplicatedNotices.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Adjust speed here (e.g., 3000ms for 3 seconds)

    return () => clearInterval(interval);
  }, [duplicatedNotices.length]);

  return (
    <div className="overflow-hidden h-64 relative">
      <div
        className="transition-transform ease-in-out duration-3000"
        style={{
          transform: `translateY(-${(index * 100) / duplicatedNotices.length}%)`,
        }}
      >
        {notices.map((notice, idx) => (
          <div
            key={idx}
            className="h-20 flex items-start  justify-start bg-transparent"
          >
            <div className="flex items-center justify-between w-full Navbar rounded-lg">
              <p className="text-lg w-full   px-2 py-1 rounded-l-lg">
               <span className="border-2 border-black px-2 rounded-full text-black"> {idx + 1}:</span> {notice?.title}
              </p>
              <Link href={notice?.file}>
              <button className=" px-2  text-lg rounded-r-lg">
                <FaFilePdf className="text-3xl " />
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios
      .get(`${BaseURL}/api/noticepdf`)
      .then((response) => {
        setNotices(response.data);
      })
      .catch((err) => {
        console.error("Error fetching data: ", err);
      });
  }, []);

  console.log(notices);

  return (
    <main className="p-4 h-96">
      <div className="flex items-center justify-between gap-4 mb-2">
        <button className="text-xl">Notice Board</button>
        <Link href="/notices">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All
        </button>
        </Link>
      </div>
      <hr className="border-2 border-black mb-2" />
      <NoticeSlider notices={notices} />
    </main>
  );
};

export default ScrollNotice;
