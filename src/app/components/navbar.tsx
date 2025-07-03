
"use client";
import { motion } from "motion/react"
import Link from "next/link"
import { useState } from "react"
export default function Navbar() {
    return (
        <div className="flex flex-col w-72 justify-center items-center gap-5 h-screen fixed bg-black" id="navbar">
            <Link href="/"><img src="logo.jpg" alt="" className="rounded-full mb-5 logo-image" /></Link>
            <button><Link href="/about">about</Link></button>
            <button><Link href="/covers">covers</Link></button>
            <button><Link href="/songs">songs</Link></button>
            <button><Link href="/contact">contact</Link></button>
        </div>
    );
}