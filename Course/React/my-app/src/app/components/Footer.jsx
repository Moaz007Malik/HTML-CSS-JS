import React from 'react';

function Footer() {

    const currentYear = new Date().getFullYear()
  return (
    <div className="absolute text-center bottom-0 w-full h-10 ">
        <p className="text-gray-400">Copyright © {currentYear}</p>
    </div>
  )
}

export default Footer;
