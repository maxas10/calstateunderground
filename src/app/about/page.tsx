"use client";
import { motion } from "motion/react"


export default function Page() {
  const lines: string[][] = [
    ["About", "title"],
    ["Bio", "subtitle"],
    ["Cal State Underground is an alternative rock band based in the Bay Area, California.", "p"],
    ["Created in 2024, the band consists of 7 members.", "p"],
  ];
  return (
    <div className="flex flex-col gap-5 p-20 box-border tracking-wide">
      {lines.map((line, index) => {
        if (line[1] == "title") {
          return (
            <motion.h1
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-2xl mb-10 underline-offset-5 underline "
            >
              {line[0]}
            </motion.h1>
          )
        } else if (line[1] == "subtitle") {
          return (
            <motion.h2
              key={index}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-xl mb-2"
            >
              {line[0]}
            </motion.h2>
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
    </div>
  );
}