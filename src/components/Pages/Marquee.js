"use client";
import { BaseURL } from "@/utils/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const Running_Banner = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    axios.get(`${BaseURL}/api/notice`).then((res) => {
      console.log(res.data);
      setNotices(res.data);
    });
  }, []);

  return (
    <div className="mb-4 pt-4" data-testid="homeBanner3">
      <div className="flex items-center justify-center">
        <div className="px-4 py-2 font-black bg-[#FEF9C7] rounded-lg mr-2 text-nowrap">জরুরি নোটিশ</div>

        <Marquee gradient={false} speed={50}>
          {notices.map((notice, index) => (
            <p key={index} className="text-[#333] font-semibold text-sm mr-10 py-4 relative pl-12">
              <span className="border text-xs p-2 mr-2 bg-red-500 absolute left-0 top-2 animate-slow-spin uppercase text-white rounded-full">
                নতুন
              </span>
              {notice?.description}{" "}
              <span className="text-red-400">({notice?.date})</span>
            </p>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Running_Banner;
