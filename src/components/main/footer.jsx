import {
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../assets/data.json";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="flex-center flex-col py-20 md:px-80 lg:pl-140 px-10 overflow-clip scroll-mt-92"
      >
        <div className="container flex justify-between items-center px-20">
          <p className="md:text-[16px] text-[12px]">
            &copy; copyright. designed and developed by Sadegh
          </p>
          <section className="flex items-end gap-x-15">
            <a
              href={data.socialMedia.linkedin}
              target="_blank"
              className=" md:text-[20px] text-[16px]"
            >
              <FontAwesomeIcon icon={faLinkedinIn} fade color="#95a5a6" />
            </a>

            <a
              href={data.socialMedia.whatsApp}
              target="_blank"
              className=" md:text-[20px] text-[16px]"
            >
              <FontAwesomeIcon icon={faWhatsapp} fade color="#95a5a6" />
            </a>

            <a
              href={data.socialMedia.telegram}
              target="_blank"
              className=" md:text-[20px] text-[16px]"
            >
              <FontAwesomeIcon icon={faPaperPlane} fade color="#95a5a6" />
            </a>

            <a
              href={data.socialMedia.github}
              target="_blank"
              className=" md:text-[20px] text-[16px]"
            >
              <FontAwesomeIcon icon={faGithub} fade color="#95a5a6" />
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
