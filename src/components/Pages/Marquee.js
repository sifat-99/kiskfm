"use client"
import Marquee from "react-fast-marquee";

const Running_Banner = () => {
  return (
    <div className="mb-4 pt-4" data-testid="homeBanner3">
      <div className="flex items-center justify-center">
       <div className="px-4 py-2 bg-[#FEF9C7] rounded-lg mr-2">
          button
       </div>
        <Marquee pauseOnHover={true} className="py-2 mx-20">
          hello this is notice so be aware of it
        </Marquee>
      </div>
    </div>
  );
};

export default Running_Banner;
