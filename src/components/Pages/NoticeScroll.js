import React, { useState, useEffect } from "react";

const NoticeSlider = ({ notices }) => {
  const [index, setIndex] = useState(0);
  
  // Create a duplicated list to enable infinite scroll effect
  const duplicatedNotices = [...notices, ...notices];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex === duplicatedNotices.length - 1 ? 0 : prevIndex + 1));
    }, 3000); // Adjust speed here (e.g., 3000ms for 3 seconds)

    return () => clearInterval(interval);
  }, [duplicatedNotices.length]);

  return (
    <div className="overflow-hidden h-64 relative">
      <div
        className="transition-transform ease-in-out duration-3000"
        style={{ transform: `translateY(-${index * 100 / duplicatedNotices.length}%)` }}
      >
        {duplicatedNotices.map((notice, idx) => (
          <div
            key={idx}
            className="h-20 flex items-start justify-start bg-transparent"
          >
            <p className="text-lg">{notice}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollNotice = () => {
  const notices = [
    "Notice 1: Important announcement.",
    "Notice 2: Meeting at 3 PM.",
    "Notice 3: Office will be closed tomorrow.",
    "Notice 4: New policy updates available.",
    "Notice 5: Employee of the month announcement.",
  ];

  return (
    <main className="p-4 h-96">
      <div className="flex items-center justify-between gap-4 mb-2">
      <button className="text-xl">Notice Board</button>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        View All
      </button>
      </div>
      <hr className="border-2 border-black mb-2"/>
      <NoticeSlider notices={notices} />
    </main>
  );
};

export default ScrollNotice;
