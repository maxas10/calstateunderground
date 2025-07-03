
"use client";
import Link from "next/link"
export default function Navbar() {
    return (
        <div className="flex flex-col w-72 justify-center items-center gap-5 h-screen fixed bg-black" id="navbar">
            <Link href="/"><img src="logo.jpg" alt="" className="rounded-full mb-5" /></Link>
            <button className="hover:text-teal-100"><Link href="/about">about</Link></button>
            <button className="hover:text-teal-100"><Link href="/covers">covers</Link></button>
            <button className="hover:text-teal-100"><Link href="/songs">songs</Link></button>
            <button className="hover:text-teal-100"><Link href="/contact">contact</Link></button>
        </div>
    );
}