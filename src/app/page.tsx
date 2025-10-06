"use client";

import LiquidEther from "@/components/LiquidEther/LiquidEther";
import TargetCursor from "@/components/TargetCursor/TargetCursor";
import React from "react";

const Home = () => {
  return (
    <>
      <TargetCursor spinDuration={2.5} hideDefaultCursor={true} />
      <div className="flex justify-center items-center bg-black relative">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white z-10">
          <div>
            <h1 className="text-5xl font-bold mb-4 cursor-target">Hi there,</h1>
          </div>
        </div>
        <div className="w-full h-screen">
          <LiquidEther />
        </div>
      </div>
    </>
  );
};

export default Home;
