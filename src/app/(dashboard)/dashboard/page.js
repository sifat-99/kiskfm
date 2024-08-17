'use client';
import UseLoader from '@/components/Loader/useLoader';
import { BaseURL } from '@/utils/constant';
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loadingIndicator, startLoading, stopLoading] = UseLoader();

  useEffect(() => {
    const fetchData = async () => {
      startLoading(); // Show loading indicator
      try {
        const response = await axios.get(`${BaseURL}/api/noticepdf`);
        setData(response.data);
      } catch (err) {
        console.error(err);
      } finally {
        stopLoading(); // Hide loading indicator
      }
    };

    fetchData(); // Only called once due to empty dependency array
  }, [startLoading, stopLoading]);

  return (
    <div>
      {loadingIndicator}
      {
        data.length > 0 ? (
          <div>
            {data.map((notice, idx) => (
              <div key={idx}>
                <p>{idx + 1}: {notice?.title}</p>
                <a href={notice?.file} target="_blank" rel="noreferrer">Download</a>
              </div>
            ))}
          </div>
        ) : <p></p>
      }
    </div>
  );
};

export default Dashboard;
