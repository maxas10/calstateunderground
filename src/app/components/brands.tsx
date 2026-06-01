import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSpotify,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

export default function Brand() {
  return (
    <div className="flex sticky bottom-0 w-screen bg-[#C4C8BC] min-h-[10vh] justify-center items-center" id="brands">
      <div className="flex justify-end gap-10  items-center" id="brand-container">
          <Link href="https://www.instagram.com/caliground/"><FontAwesomeIcon icon={faInstagram}   style={{
    width: "32px",
    height: "32px",
  }}/></Link>
          <Link href="https://open.spotify.com/artist/4krLpMxi3DIaDzPDpSSlcQ"><FontAwesomeIcon icon={faSpotify}   style={{
    width: "32px",
    height: "32px",
  }} /></Link>
      </div>
    </div>
  );
}