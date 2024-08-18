"use client";
import { BaseURL } from "@/utils/constant";
import axios from "axios";
import React, { useState, useEffect } from "react";
import "@/components/Navbar/menu.css";
import { FaFilePdf } from "react-icons/fa6";
import Link from "next/link";
import '@/components/Navbar/menu.css'
import UseLoader from "../Loader/useLoader";

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
            className="h-auto flex items-start  justify-start bg-transparent"
          >
            <div className="flex items-center justify-between w-full Navbar mt-2 py-1 rounded-lg">
              <p className="text-lg w-full   px-2 py-1 rounded-l-lg">{idx + 1}: {notice?.title}
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
  const [loadingIndicator, startLoading, stopLoading] = UseLoader();

  useEffect(() => {
    const fetchData = async () => {
      startLoading(); // Show loading indicator
      try {
        const response = await axios.get(`${BaseURL}/api/noticepdf`);
        setNotices(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        stopLoading(); // Hide loading indicator
      }
    };

    fetchData(); // Only called once due to empty dependency array
  }, [startLoading, stopLoading]);

  console.log(notices);

  return (
    <main className="p-4 h-96">
      <div className="flex items-center justify-between gap-4 mb-2">
        <button className="text-2xl">Notice Board</button>
        <Link href="/notices">
        <button className="bg-black hover:bg-blue-gray-200 text-white hover:text-black font-bold py-2 px-4 rounded">
          View All
        </button>
        </Link>
      </div>
      <hr className="border-2 border-black mb-2" />
      {
        notices.length > 0 ? <NoticeSlider notices={notices} /> : loadingIndicator
      }
    </main>
  );
};

export default ScrollNotice;
