import React from "react";
import Logo from "/public/Logo.png";
import Image from "next/image";
import "./Nav.css";
import Link from "next/link";

const containerStyle = {
  backgroundImage: "url('https://i.ibb.co/s93XJjs/menu.png')",
  backgroundColor: "#FEF9C7",
  backgroundSize: "3%",
  backgroundPosition: "bottom",
  backgroundRepeat: "repeat-x",
  transition: "background-size 0.5s ease, background-color 0.5s ease",
};

const Navbar = () => {
  const year = new Date().getFullYear();
  return (
    <div
      className="container-fluid bgImage flex flex-wrap items-center justify-center md:justify-between p-4 transition-all duration-500 ease-in-out"
      style={containerStyle}
    >
      <div className="flex-shrink-0 flex justify-center w-full md:w-auto mb-4 md:mb-0">
        <Image
          width="auto"
          height="auto"
          src={Logo}
          alt="Logo"
          priority
          className="w-[150px] h-auto transition-all duration-500 ease-in-out"
        />
      </div>
      <div className="flex-grow text-center w-full md:w-auto mb-4 md:mb-0 transition-all duration-500 ease-in-out">
        <h1 className="text-sm font-bold transition-all duration-500 ease-in-out">
          بِسْمِ ٱللَّهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </h1>
        <h1 className="text-lg md:text-2xl font-black font-arabic transition-all duration-500 ease-in-out">
          كِيشُورْجَانْج كِيشْبَا فَاضِل مَدْرَسَة
        </h1>
        <h1 className="text-lg md:text-xl font-bold font-nano transition-all duration-500 ease-in-out">
          কিশোরগঞ্জ কেশবা ফাজিল মাদরাসা
        </h1>
        <h1 className="text-lg md:text-xl font-black transition-all duration-500 ease-in-out">
          Kishorgonj Keshba Fazil Madrasah
        </h1>
        <p className="font-nano transition-all duration-500 ease-in-out">
          ডাকঘর ও উপজেলা: কিশোরগঞ্জ, জেলা: নীলফামারী
        </p>
        <p className="font-nano transition-all duration-500 ease-in-out">
          স্থাপিতঃ ১৯৭৩ ইং
        </p>
        <p className="font-nano transition-all duration-500 ease-in-out">
          ইআইআইএন নংঃ ১২৫০২৪, মাদরাসা কোডঃ ১৪৯০১
        </p>
      </div>
      <div className="flex-shrink-0 flex justify-center w-full md:w-auto text-center md:text-right font-nano transition-all duration-500 ease-in-out">
        <div className="flex  md:flex-col gap-2">
          <button className="Btn-Container">
            <span className="text">Online Admission</span>
            <span className="icon-Container">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="nones"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </span>
          </button>
          <Link href="https://xiclassadmission.gov.bd/">
          <button className="Btn-Container">
            <span className="text">
              Xi Class Admission {year}-{year + 1}{" "}
            </span>
            <span className="icon-Container">
              <svg
                width="16"
                height="19"
                viewBox="0 0 16 19"
                fill="nones"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="1.61321" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="1.61321" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="5.5566" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="9.85851" cy="13.4434" r="1.5" fill="black"></circle>
                <circle cx="1.61321" cy="17.3868" r="1.5" fill="black"></circle>
                <circle cx="5.73583" cy="17.3868" r="1.5" fill="black"></circle>
              </svg>
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
