
import Link from "next/link"
export default function Navbar() {
    return (
        <div className="flex flex-col w-72 justify-center items-center gap-5 h-screen fixed bg-black">
            <Link href="/"><img src="logo.jpg" alt="" className="rounded-full mb-5"/></Link>
            <button><Link href="/about">about</Link></button>
            <button><Link href="/covers">covers</Link></button>
            <button><Link href="/songs">songs</Link></button>
            <button><Link href="/contact">contact</Link></button>
        </div>
    );
}