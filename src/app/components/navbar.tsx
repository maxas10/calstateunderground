
"use client";
import Link from "next/link"
import Image from "next/image"
export default function Navbar() {
    return (
        <div className="flex flex-row w-full justify-center items-center min-h-[10vh] bg-[#8C9988] sticky">
            <div className="flex items-center justify-between" id="nav-container">
                    <Link href="/" className="flex flex-row gap-10 items-center" id="logo-container"><Image src="/newlogo.jpg" id="logo" alt={""} className="rounded-full border-4" width={300} height={300} />
                    <h1 className="text-2xl">caliground</h1></Link>
                <div className="flex flex-row gap-10">
                    <button className="hover:text-[#68746B]"><Link href="/about">about</Link></button>
                    {/* <button className="hover:text-teal-100 "><Link href="/covers">covers</Link></button> */}
                    <button className="hover:text-[#68746B]"><Link href="/songs">songs</Link></button>
                    <button className="hover:text-[#68746B]"><Link href="/contact">contact</Link></button>
                </div>
            </div>
            {/* <p>About</p>
            <p>Songs</p>
            <p>Contact</p> */}
        </div>
    );
}