"use client";
import Image from "next/image"
export default function Page() {

    return <div className="flex flex-col gap-10 w-1/2 pt-[2vh] pb-[2vh]">
        <h1 className="text-2xl">songs</h1>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/sunday2pm.jpg"} width={200} height={200} alt={""}></Image>
            <p className="text-2xl">Sunday 2PM</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/propane.jpg"} width={200} height={200} alt={""}></Image>
            <p className="text-2xl">Propane</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">Dawn</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">American Life</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">Bury Me In Roses</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">Deflation</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">Puncture</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">Stonefish</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">Untitled Love Song</p>
        </div>
        <div className="flex flex-row gap-10 items-center">
            <Image src={"/newlogo.jpg"} width={200} height={200} alt={""} className="grayscale blur-xs"></Image>
            <p className="text-2xl">Tidal Waves</p>
        </div>
    </div>
}