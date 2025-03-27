import { faGithub, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../assets/data.json";

export default function Footer() {
  return (
    <>
      <div
        id="footer"
        className="flex-center flex-col py-20 px-80 lg:pl-140 overflow-clip scroll-mt-92"
      >
        <div className="container flex justify-between items-center px-20">
          <p>&copy; copyright. designed and developed by Sadegh</p>
          <section className="flex items-end gap-x-15">
            <a href={data.socialMedia.linkedin} target="_blank">
              <FontAwesomeIcon
                icon={faLinkedinIn}
                fade
                size="lg"
                color="#95a5a6"
              />
            </a>

            <a href={data.socialMedia.whatsApp} target="_blank">
              <FontAwesomeIcon
                icon={faWhatsapp}
                fade
                size="xl"
                color="#95a5a6"
              />
            </a>

            <a href={data.socialMedia.telegram} target="_blank">
              <FontAwesomeIcon
                icon={faPaperPlane}
                fade
                size="lg"
                color="#95a5a6"
              />
            </a>

            <a href={data.socialMedia.github} target="_blank">
              <FontAwesomeIcon icon={faGithub} fade size="xl" color="#95a5a6" />
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
