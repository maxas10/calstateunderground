"use client";
import { motion } from "motion/react";
import { useRef, useEffect } from "react"

interface cardProps {
    src: string,
    index: number,
    desc: string,
    onHover: (desc: string | null) => void;
    activeIndex: number | null;
    onPlay: (index: number) => void;
}
export default function Card(props: Readonly<cardProps>) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (!videoRef.current) return;
        if (props.activeIndex === props.index) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    }, [props.activeIndex, props.index]);

    return (
        <motion.div
            className={`flex h-fit bg-black overflow-hidden justify-center w-full shadow-lg rounded-2xl card`}
            whileHover={{
                scale: 1.05,
                cursor: "pointer",
            }}
            whileTap={{
                scale: 0.9,
                rotate: `${Math.random() * 10 - 5}deg`,
            }}
            onTap={() => {
                props.onPlay(props.index);
            }}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: props.index * 0.1 } }}

            onMouseEnter={() => props.onHover(props.desc)}
            onMouseLeave={() => props.onHover(null)}
        >
            <video className="object-cover min-w-[200%]" ref={videoRef}>
                <source src={props.src} type="video/mp4" />
            </video>


        </motion.div>

    )
}