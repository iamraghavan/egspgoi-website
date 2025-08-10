"use client";

import { useState } from "react";

export function Copyright() {
  const [currentYear] = useState(new Date().getFullYear());

  return (
    <div className="bg-gray-800 py-4 text-center text-sm text-gray-300">
      <p>
        Copyright © 2006 - {currentYear} All Rights Reserved
        by EGS Pillay Group of Institutions
      </p>
      <p className="mt-1">
        Developed By{" "}
        <a
          href="https://jsraghavan.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >
          Raghavan Jeeva
        </a>
      </p>
    </div>
  );
}
