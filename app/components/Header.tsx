"use client";

import Link from "next/link";
import React from "react";
import TheSVG from "@/public/svg/the.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className={`flex  items-center h-[72px] justify-center`}>
      <Link href="/">
        <h3 className="flex items-center secondary-text text-3xl text-center">
          7-Day Price Chart for $ATOM-$NTRN
        </h3>
      </Link>
    </div>
  );
};

export default Header;
