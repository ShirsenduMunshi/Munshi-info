"use client"
import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    // Parse the HTML content and extract h2 headings
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = htmlContent;
    const h2Elements = tempDiv.querySelectorAll('h2');
    const h2Data = Array.from(h2Elements).map(h2 => ({
      text: h2.textContent,
      id: h2.id
    }));
    setHeadings(h2Data);
  }, [htmlContent]);

  return (
    <div className="p-4 rounded-sm on-this-page fixed top-24 z-10 md:right-48 lg:right-[6%] backdrop-blur border hidden lg:block">
      <h2 className='text-md font-extrabold my-2 underline'>On This Page:</h2>
      <ul className='text-sm space-y-1'>
        {headings.map((heading, index) => (
          <li key={index}>
            <a href={`#${heading.id}`} className='font-bold text-violet-400 hover:text-violet-600 active:text-violet-800'>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OnThisPage;