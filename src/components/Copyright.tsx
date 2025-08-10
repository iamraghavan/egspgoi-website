"use client";

import { useState, useEffect } from "react";

export function Copyright() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gray-800 py-4 text-center text-sm text-gray-300">
      <p>
        Copyright © 2006 - {isClient ? currentYear : "2024"} All Rights Reserved
        by EGS Pillay Group of Institutions
      </p>
      <p className="mt-1">Developed By Raghavan Jeeva</p>
    </div>
  );
}
