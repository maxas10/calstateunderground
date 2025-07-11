"use client";
import { motion } from "motion/react"
import { useState } from "react"
import Card from "../components/card";
import { p } from "motion/react-client";


export default function Page() {
  const lines: string[][] = [
    ["About", "title"],
    ["Bio", "subtitle"],
    ["Cal State Underground is an alternative rock band based in the Bay Area, California.", "p"],
    ["Created in 2024, the band consists of 7 members.", "p"],
    ["", "p"],
  ];

  const [tooltip, setTooltip] = useState({
    visible: false,
    text: "",
    x: 0,
    y: 0,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (tooltip.visible) {
      setTooltip((t) => ({ ...t, x: e.clientX + 10, y: e.clientY + 10 }));
    }
  };

  const handleHover = (desc: string | null) => {
    if (desc) {
      setTooltip((t) => ({ ...t, visible: true, text: desc }));
    } else {
      setTooltip((t) => ({ ...t, visible: false, text: "" }));
    }
  };
  return (
    <div className="flex flex-col gap-5 p-20 box-border tracking-wide" onMouseMove={handleMouseMove}>
      {lines.map((line, index) => {
        if (line[1] == "title") {
          return (
            <motion.p
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl mb-10 underline-offset-5 underline "
            >
              {line[0]}
            </motion.p>
          )
        } else if (line[1] == "subtitle") {
          return (
            <motion.p
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl mb-2"
            >
              {line[0]}
            </motion.p>
          )
        } else {
          return (
            <motion.p
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {line[0]}
            </motion.p>
          )
        }
      })}
      <div className="flex flex-row gap-5 w-full song-container">

        <div className="flex flex-col gap-5 w-1/3 p-5 song-col">
          <Card src="people/ronnie.JPG" link="https://www.instagram.com/rrrrronnie_" index={2} desc="@rrrrronnie_" onHover={handleHover}></Card>
          <p className="text-xl ">Ronnie (I smash)</p>
          <p>- Beloved Drummer</p>
        </div>
        <div className="flex flex-col gap-5 w-1/3  p-5 song-col">
          <Card src="people/noah.png" link="https://www.instagram.com/pear.hyunoo/" index={3} desc="@pear.hyunoo" onHover={handleHover} ></Card>
          <p className="text-xl ">Hyunhoo (no gf guitarist)</p>
          <p>- Guitarist, Social Media Manager</p>
        </div>
        <div className="flex flex-col gap-5 w-1/3  p-5 song-col">
          <Card src="people/joshua.png" link="https://www.instagram.com/joshuanguyen857" index={4} desc="@joshuanguyen857" onHover={handleHover} ></Card>
          <p className="text-xl ">Joshua (unc guitarist)</p>
          <p>- Co-Frontman, Guitarist</p>
        </div>

      </div>

      <div className="flex flex-row gap-5 w-full song-container">

        <div className="flex flex-col gap-5 w-1/3 p-5 song-col">
          <Card src="people/ryan.JPEG" link="https://www.instagram.com/ryannnn.__09" index={5} desc="@ryannnn.__09" onHover={handleHover}></Card>
          <p className="text-xl ">Ryan (freaky pianist)</p>
          <p>- Pianist</p>
        </div>
        <div className="flex flex-col gap-5 w-1/3  p-5 song-col">
          <Card src="people/yunho.png" link="https://www.instagram.com/yun_ho.06/" index={6} desc="@yun_ho.06" onHover={handleHover} ></Card>
          <p className="text-xl ">Yunho</p>
          <p>- Bassist</p>
        </div>
        <div className="flex flex-col gap-5 w-1/3  p-5 song-col">
          <Card src="/people/default.png" link="https://www.instagram.com/adrianlee0/" index={7} desc="@adrianlee0" onHover={handleHover} ></Card>
          <p className="text-xl ">Adrian</p>
          <p>- Producer</p>
        </div>

      </div>

      <div className="flex flex-row gap-5 w-full song-container">

        <div className="flex flex-col gap-5 w-1/3 p-5 song-col">
          <Card src="people/default.png" link="https://www.instagram.com/maxseun" index={8} desc="@maxseun" onHover={handleHover}></Card>
          <p className="text-xl ">Max (wolfcut max)</p>
          <p>- Website Manager 👋, Editor/Cameraman</p>
        </div>
        
      </div>

      {tooltip.visible && (
        <div
          style={{
            position: "fixed",
            top: tooltip.y,
            left: tooltip.x,
            backgroundColor: "rgba(0,0,0,0.8)",
            color: "white",
            padding: "6px 10px",
            borderRadius: 6,
            pointerEvents: "none",
            whiteSpace: "nowrap",
            zIndex: 9999,
            userSelect: "none",
            transform: "translate(0%, 0%)",
          }}
        >
          {tooltip.text}
        </div>
      )}
    </div>
  );
}