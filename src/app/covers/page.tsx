"use client";

import { motion } from "motion/react"
import Card from "../components/card";
import { useState } from "react";

export default function Page() {

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

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handlePlay = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index)); // toggle play/pause
  };
  return (
    <div className="flex flex-col gap-2  p-20 box-border relative" onMouseMove={handleMouseMove}>
      <motion.p
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-2xl mb-10 underline-offset-5 underline "
      >
        Covers
      </motion.p>

      <div className="gap-1 grid grid-cols-3 cover-container">

        <motion.div className="flex-col flex gap-1"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card src="songs/song1.mp4" index={1} desc="High Tides - The Poles" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song7.mp4" index={4} desc="Thornapple - Blue Spring" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song9.mp4" index={8} desc="Love - Wave To Earth" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song12.mp4" index={10} desc="Dilemma - Green Day" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song14.mp4" index={12} desc="Bleed - Dead Calm" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
        </motion.div>

        <motion.div className="flex-col flex gap-1"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card src="songs/song2.mp4" index={2} desc="Sailor Song - Gigi Perez" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song5.mp4" index={5} desc="Covet - Basement" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song8.mp4" index={7} desc="Creep - Radiohead" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
        </motion.div>

        <motion.div className="flex-col flex gap-1"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Card src="songs/song3.mp4" index={3} desc="Graduation - Daldam" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song6.mp4" index={6} desc="Creep - Radiohead (Acoustic)" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song10.mp4" index={9} desc="Riptide - Vance Joy" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song11.mp4" index={11} desc="Flying Bobs - The Black Skirts" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
          <Card src="songs/song13.mp4" index={13} desc="One Last Breath - Creed" onHover={handleHover} activeIndex={activeIndex} onPlay={handlePlay}></Card>
        </motion.div>

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