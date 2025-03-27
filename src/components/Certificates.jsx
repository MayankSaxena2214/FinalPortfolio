import React from 'react';
import CertificateCard from './CertificateCard';

const certificates = [
  { image: "/assets/c.png", subject: "C Language", provider: "Great Learning", link: "https://drive.google.com/open?id=13abjSc1xKxo3NPwgE7w4wttOP5YDJ86d&usp=drive_copy" },
  { image: "/assets/cloud.png", subject: "Cloud Basics", provider: "Great Learning", link: "https://drive.google.com/open?id=1i_TDPbWK9FiOfIo5dOHk3BMS5n15je_g&usp=drive_copy" },
  { image: "/assets/cpp.png", subject: "C++ Language", provider: "Udemy", link: "https://drive.google.com/open?id=1oo_MhG9KtR3QcDtK_aUqliWpe_iNHeZv&usp=drive_copy" },
  { image: "/assets/cyber.png", subject: "Cyber Security", provider: "Great Learning", link: "https://drive.google.com/open?id=13OBQDm52lvPCWpQeHUvcpyJDTZi2Ugad&usp=drive_copy" },
  { image: "/assets/datascience.png", subject: "Data Science", provider: "Great Learning", link: "https://drive.google.com/open?id=1NJDfgaXV13TzjtHCEWE37R-tPTDfCvIx&usp=drive_copy" },
  { image: "/assets/html.png", subject: "HTML", provider: "Udemy", link: "https://drive.google.com/open?id=1u5UenYhce6MZPzbZQmoLY3pxgjidP7ie&usp=drive_copy" },
  { image: "/assets/java.png", subject: "Java", provider: "Udemy", link: "https://drive.google.com/open?id=1oo_MhG9KtR3QcDtK_aUqliWpe_iNHeZv&usp=drive_copy" },
  { image: "/assets/javascript.png", subject: "JavaScript", provider: "Udemy", link: "https://drive.google.com/open?id=1VXkRCYFI_OQY0rB2B8R3e_vRi0t8x97e&usp=drive_copy" },
  { image: "/assets/mysql.png", subject: "MySQL", provider: "Udemy", link: "https://drive.google.com/open?id=1olqQefy0dQP4is_HirHZT68iNDfcHWm_&usp=drive_copy" },
  { image: "/assets/octanet.png", subject: "Web Development Training", provider: "Octanet", link: "https://drive.google.com/open?id=1CO3qGVFoQ6y6A89CWNBTYeaTuuT3NOYT&usp=drive_copy" },
  { image: "/assets/react.png", subject: "React", provider: "Udemy", link: "https://drive.google.com/open?id=1rL1lWj5HSIooLRCDBXzIiWuUaNpsexaR&usp=drive_copy" },
  { image: "/assets/python.png", subject: "Python", provider: "Red Hat", link: "https://drive.google.com/open?id=1iaO4mUG8uLBbedHVbiKxLjDvowLKemJm&usp=drive_copy" }
];

const Certificate = () => {
  return (
    <div className="w-full flex flex-col items-center gap-8 bg-indigo-900 py-12 px-4">
      <h1 className="text-white text-4xl font-bold">Certifications</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <CertificateCard key={index} image={cert.image} subject={cert.subject} provider={cert.provider} link={cert.link} />
        ))}
      </div>
    </div>
  );
}

export default Certificate;
