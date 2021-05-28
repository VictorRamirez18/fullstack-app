import React from "react";

function Footer() {
  return (
    <div className="bg-gray-700 flex flex-col items-center p-4 text-white">
      <h2>Created by</h2>
      <h4>Víctor Ramírez</h4>
      <div className="flex justify-around gap-3 p-2">
        <span>Github</span>
        <span>Linkedin</span>
        <span>Gmail</span>
      </div>
      <span>©Víctor</span>
    </div>
  );
}

export default Footer;
