"use client";
import { motion } from "motion/react"
export default function Page() {
  // const userExists = false;

  // if (!userExists) {
  //   notFound();
  // }
  return (

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col gap-2 h-full p-20 box-border justify-center items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/graduation.jpg')" }}>
    </motion.div>
  );
}