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
        <div className="flex flex-col gap-5 p-20 box-border tracking-wide" onMouseMove={handleMouseMove}>
            <motion.p
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-2xl mb-10 underline-offset-5 underline "
            >
                Songs
            </motion.p>

            <div className="flex flex-row gap-5 w-full song-container">
                <div className="flex flex-col gap-5 w-1/3 p-5 song-col">
                    <Card src="songs/departure.png" link="" index={1} desc="Departure (unreleased)" onHover={handleHover}></Card>
                    <p className="text-xl ">Departure (no preview) (coming soon)</p>
                </div>
                <div className="flex flex-col gap-5 w-1/3  p-5 song-col">
                    <Card src="songs/sunday2pm.png" link="https://www.instagram.com/p/DKsTj4KSBgF/" index={2} desc="Sunday 2 P.M. (unreleased)" onHover={handleHover} ></Card>
                    <p className="text-xl ">Sunday 2 P.M. (coming soon)</p>
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