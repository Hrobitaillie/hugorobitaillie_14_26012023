import React from "react";

export const ErrorIcon = ({ stroke, width, overflow }) => {
  return (
    <svg
      width={width} 
      viewBox="0 0 20 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow={overflow}
    >
      <path
        d="M10 14.856V10.856M10 6.85604H10.01M1 6.79749V14.9146C1 15.2572 1 15.4286 1.05048 15.5814C1.09515 15.7165 1.16816 15.8406 1.26463 15.9453C1.37369 16.0636 1.52345 16.1468 1.82297 16.3132L9.22297 20.4244C9.50658 20.5819 9.64838 20.6607 9.79855 20.6916C9.93146 20.7189 10.0685 20.7189 10.2015 20.6916C10.3516 20.6607 10.4934 20.5819 10.777 20.4244L18.177 16.3132C18.4766 16.1468 18.6263 16.0636 18.7354 15.9453C18.8318 15.8406 18.9049 15.7165 18.9495 15.5814C19 15.4286 19 15.2572 19 14.9146V6.79749C19 6.45484 19 6.28352 18.9495 6.13072C18.9049 5.99555 18.8318 5.87146 18.7354 5.76678C18.6263 5.64844 18.4766 5.56524 18.177 5.39883L10.777 1.28772C10.4934 1.13017 10.3516 1.05139 10.2015 1.0205C10.0685 0.993166 9.93146 0.993166 9.79855 1.0205C9.64838 1.05139 9.50658 1.13017 9.22297 1.28772L1.82297 5.39883C1.52345 5.56524 1.37369 5.64844 1.26463 5.76678C1.16816 5.87146 1.09515 5.99555 1.05048 6.13072C1 6.28352 1 6.45484 1 6.79749Z"
        stroke="#CC2727"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};