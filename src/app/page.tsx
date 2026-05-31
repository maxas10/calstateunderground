"use client";
import { motion } from "motion/react"
import Image from "next/image"
import FloatingItem from "./components/floatingitem";


export default function Page() {
  return <div className="flex flex-col w-1/2" id="main-container">
    <div className="flex items-center justify-center flex-1 gap-20" id="page-container">
      <FloatingItem src="/tidalwaves.jpg" onHover={() => { }} />
      <div className="flex flex-col gap-2 ">
        <h1 className="text-8xl vadionka">tidal waves</h1>
        <p>album releasing soon</p>
      </div>
    </div>
  </div>;
}