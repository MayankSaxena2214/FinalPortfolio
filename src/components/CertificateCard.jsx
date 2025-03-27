import React from 'react';

const CertificateCard = ({ image, subject, provider, link }) => {
  return (
    <div className="w-80 h-96 flex flex-col bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={image} alt={subject} className="w-full h-40 object-cover" />
      <div className="flex flex-col items-center p-4 text-center">
        <div className="text-xl text-white font-semibold">{subject}</div>
        <div className="text-lg text-blue-300 font-medium mt-2">{provider}</div>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-white hover:text-blue-500 transition duration-300"
        >
          View Certificate
        </a>
      </div>
    </div>
  );
}

export default CertificateCard;
