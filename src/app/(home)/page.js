"use client";
import Logout from "@/components/Logout/Logout";
/* eslint-disable @next/next/no-img-element */
import Banner from "@/components/Pages/Banner";
import MapSection from "@/components/Pages/MapSection";

import Running_Banner from "@/components/Pages/Marquee";
import { BaseURL } from "@/utils/constant";
import axios from "axios";
import { useEffect, useState } from "react";
import { increment } from "../../../Redux/counterSlider";
import Modal1 from "@/components/Hooks/useModal";

const Home = () => {
  const [data, setData] = useState([]);
  console.log(BaseURL);

  const PrincipleMessage = {
    image: "https://utfs.io/f/7cc84e8d-179f-41c1-b9ea-74cba17b994a-o1vg1u.jpg",
    name: "মোঃ জালাল উদ্দিন",
    role: "Principal",
    designation: "অধ্যক্ষ (ভারপ্রাপ্ত), কিশোরগঞ্জ কেশবা ফাজিল মাদ্রাসা।",
    message:
      "বর্তমান প্রযুক্তিনির্ভর বিশ্বে, শিক্ষার সাথে তথ্য প্রযুক্তির সম্পৃক্ততা অনিবার্য। বলা হয়, তথ্যপ্রযুক্তি ও অর্থনীতি আজ সারা বিশ্বকে পরিচালনা করছে। এই ধারায়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার ডিজিটাল দেশ গঠনের জন্য যে উদ্যোগসমূহ গ্রহণ করেছেন, তার অধিকাংশই ইতিমধ্যেই বাস্তবায়িত হয়েছে। বিশ্বের সাথে তাল মিলিয়ে ডিজিটাল শিক্ষাপদ্ধতি গ্রহণ আজকের দিনের সবচেয়ে গুরুত্বপূর্ণ পদক্ষেপ। এই ধারাবাহিকতায়, প্রতিটি শিক্ষা প্রতিষ্ঠানকে ডিজিটাল রূপান্তর করার লক্ষ্যে সিজিএফ ফলস্‌ভিউ নামে একটি ওয়েবসাইট (kiskfm.edu.bd) তৈরি করা হয়েছে। এই ওয়েবসাইট চালু হওয়ার মাধ্যমে প্রতিষ্ঠানের প্রশাসনিক ও একাডেমিক কার্যক্রমকে আরও সুসংগঠিত করা সম্ভব হবে বলে আমি বিশ্বাস করি। অভিভাবক, শিক্ষার্থী এবং সংশ্লিষ্ট সবাই এই ওয়েবসাইটের মাধ্যমে প্রয়োজনীয় সকল তথ্য পেতে সক্ষম হবেন। আমি KISHORGONJ KESHBA FAZIL MADRASHA-এর ভবিষ্যৎ রূপান্তরে সকল ছাত্র-ছাত্রী, অভিভাবক এবং শুভাকাঙ্ক্ষীদের সহযোগিতা ও মতামত কামনা করছি। আসুন, আমরা নিজেদের পরিবর্তনের মাধ্যমে দেশকে এগিয়ে নিয়ে যাই। আপনাদের সহায়তায় আমাদের নির্ধারিত মাস্টারপ্ল্যান বাস্তবায়ন এবং মসজিদ, একাডেমিক ভবন ও শিক্ষকদের যাতায়াতের সুবিধার্থে ভবিষ্যৎ গঠন করা সম্ভব হবে। এই ওয়েবসাইট চালু করার ক্ষেত্রে যারা সহযোগিতা করেছেন, তাদের প্রতি আমি কৃতজ্ঞতা প্রকাশ করছি।",
  };
  const FounderMessage = {
    image: "https://utfs.io/f/7cc84e8d-179f-41c1-b9ea-74cba17b994a-o1vg1u.jpg",
    name: "মোঃ জালাল উদ্দিন",
    role: "Founder",
    designation: "প্রতিষ্ঠাতা, কিশোরগঞ্জ কেশবা ফাজিল মাদ্রাসা।",
    message:
      "বর্তমান প্রযুক্তিনির্ভর বিশ্বে, শিক্ষার সাথে তথ্য প্রযুক্তির সম্পৃক্ততা অনিবার্য। বলা হয়, তথ্যপ্রযুক্তি ও অর্থনীতি আজ সারা বিশ্বকে পরিচালনা করছে। এই ধারায়, গণপ্রজাতন্ত্রী বাংলাদেশ সরকার ডিজিটাল দেশ গঠনের জন্য যে উদ্যোগসমূহ গ্রহণ করেছেন, তার অধিকাংশই ইতিমধ্যেই বাস্তবায়িত হয়েছে। বিশ্বের সাথে তাল মিলিয়ে ডিজিটাল শিক্ষাপদ্ধতি গ্রহণ আজকের দিনের সবচেয়ে গুরুত্বপূর্ণ পদক্ষেপ। এই ধারাবাহিকতায়, প্রতিটি শিক্ষা প্রতিষ্ঠানকে ডিজিটাল রূপান্তর করার লক্ষ্যে সিজিএফ ফলস্‌ভিউ নামে একটি ওয়েবসাইট (kiskfm.edu.bd) তৈরি করা হয়েছে। এই ওয়েবসাইট চালু হওয়ার মাধ্যমে প্রতিষ্ঠানের প্রশাসনিক ও একাডেমিক কার্যক্রমকে আরও সুসংগঠিত করা সম্ভব হবে বলে আমি বিশ্বাস করি। অভিভাবক, শিক্ষার্থী এবং সংশ্লিষ্ট সবাই এই ওয়েবসাইটের মাধ্যমে প্রয়োজনীয় সকল তথ্য পেতে সক্ষম হবেন। আমি KISHORGONJ KESHBA FAZIL MADRASHA-এর ভবিষ্যৎ রূপান্তরে সকল ছাত্র-ছাত্রী, অভিভাবক এবং শুভাকাঙ্ক্ষীদের সহযোগিতা ও মতামত কামনা করছি। আসুন, আমরা নিজেদের পরিবর্তনের মাধ্যমে দেশকে এগিয়ে নিয়ে যাই। আপনাদের সহায়তায় আমাদের নির্ধারিত মাস্টারপ্ল্যান বাস্তবায়ন এবং মসজিদ, একাডেমিক ভবন ও শিক্ষকদের যাতায়াতের সুবিধার্থে ভবিষ্যৎ গঠন করা সম্ভব হবে। এই ওয়েবসাইট চালু করার ক্ষেত্রে যারা সহযোগিতা করেছেন, তাদের প্রতি আমি কৃতজ্ঞতা প্রকাশ করছি।",
  };

  useEffect(() => {
    const FetchData = async () => {
      try {
        const response = await axios.get(`${BaseURL}/api`);
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    FetchData();
  }, []);

  console.log(data);
  return (
    <main className=" px-4 md:px-6 lg:px-20">
      <Running_Banner />
      <Banner />
      <MapSection />
      <div className="flex flex-col md:flex-row items-center justify-evenly lg:w-1/2 mt-4 md:mt-10 gap-4 md:gap-2">
        <div>
          <div className="relative w-full mx-auto mb-2">
            <p className="text-green-600 font-bold text-xl">
              <span className="inline-block pb-2 ">
                অধ্যক্ষ
              </span>
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 border-b-2 border-green-600 rounded-b-full"></div>
          </div>
          <Modal1 data={PrincipleMessage} />
        </div>
        <div>
        <div className="relative w-full mx-auto mb-2">
            <p className="text-green-600 font-bold text-xl">
              <span className="inline-block pb-2 ">
              প্রতিষ্ঠাতা
              </span>
            </p>
            <div className="absolute bottom-0 left-0 w-full h-1 border-b-2 border-green-600 rounded-b-full"></div>
          </div>
          <Modal1 data={FounderMessage} />
        </div>
      </div>
    </main>
  );
};

export default Home;
