import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <div className="bg-gray-700 flex flex-col items-center p-4 text-white">
      <h2>Created by</h2>
      <h4>Víctor Ramírez</h4>
      <div className="flex justify-around gap-3 text-2xl p-2">
        <a
          href="https://github.com/VictorRamirez18"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/victor-yahir-ramírez-martínez-39688020b/"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <span>©Víctor</span>
    </div>
  );
}

export default Footer;
