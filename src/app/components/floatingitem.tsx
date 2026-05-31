import Image from 'next/image';

interface FloatingItemProps {
    src: string;
    // size: number
    onHover: () => void
}

export default function FloatingItem(props: FloatingItemProps) {


    // const handleIdle = () => {
    //     props.onHover()
    // }

    return <Image src={props.src} alt="" className="top-10 bobbing-image shadow-xl w-[33vh]" width={400} height={400}></Image>

}