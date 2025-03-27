import { faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import data from "../../assets/data.json";

export default function Contact(props) {
  return (
    <>
      <div
        ref={props.contactRef}
        className="flex-center flex-col mt-40 py-10 md:px-80 lg:pl-140 px-10 overflow-clip scroll-mt-92"
      >
        <div className="container flex-center">
          <h2 className="contact-title flex-center">Contact</h2>
        </div>
        <div className="container">
          <section className="flex md:flex-row flex-col justify-between md:items-center flex-wrap gap-y-20 gap-x-15 bg-white shadow-[0px_0px_20px_rgba(0,0,0,0.1)] p-30 mb-30">
            <div className="flex items-center">
              <a
                href={data.socialMedia?.telegram}
                target="_blank"
                className="flex-center bg-orange-btn hover:bg-white-back text-white size-50 rounded-full animate-pulse"
              >
                <FontAwesomeIcon
                  icon={faPaperPlane}
                  style={{ color: "#ffffff" }}
                  size="lg"
                />
              </a>
              <p className="text-orange-btn text-[18px] ml-8">@sno_tech</p>
            </div>

            <div className="flex items-center">
              <a
                href={data.socialMedia?.whatsApp}
                target="_blank"
                className="flex-center bg-orange-btn hover:bg-white-back text-white size-50 rounded-full animate-pulse"
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  style={{ color: "#ffffff" }}
                  size="lg"
                />
              </a>
              <p className="text-orange-btn text-[18px] ml-8">+989366797817</p>
            </div>

            <div className="flex items-center">
              <a
                href={data.socialMedia?.linkedin}
                target="_blank"
                className="flex-center bg-orange-btn hover:bg-white-back text-white size-50 rounded-full animate-pulse"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              </a>
              <p className="text-orange-btn text-[18px] ml-8">snotech</p>
            </div>

            <div className="flex items-center">
              <a
                href="mailto:sadeghanalooee31@gmail.com"
                target="_blank"
                className="flex-center bg-orange-btn hover:bg-white-back text-white size-50 rounded-full animate-pulse"
              >
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="lg"
                  style={{ color: "#ffffff" }}
                />
              </a>
              <p className="text-orange-btn text-[16px] ml-8">
                sadeghanalooee31@gmail.com
              </p>
            </div>
          </section>

          <form
            action="https://formspree.io/f/xkgjvnqb"
            method="POST"
            className="bg-white p-30 shadow-[0px_0px_20px_rgba(0,0,0,0.1)]"
          >
            <div className="md:flex items-center gap-x-10 w-full">
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                className="md:w-1/2 w-full border border-gray-text focus:border-blue-light rounded outline-0 text-[14px] text-gray-text px-10 py-7 mb-20 "
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Your Email"
                className="md:w-1/2 w-full border border-gray-text focus:border-blue-light rounded outline-0 text-[14px] text-gray-text px-10 py-7 mb-20 "
              />
            </div>
            <input
              type="text"
              name="subject"
              required
              placeholder="Subject"
              className="w-full border border-gray-text focus:border-blue-light rounded outline-0 text-[14px] text-gray-text px-10 py-7 mb-20"
            />
            <textarea
              name="message"
              id=""
              rows="6"
              required
              placeholder="Message"
              className="w-full border border-gray-text focus:border-blue-light rounded outline-0 text-[14px] text-gray-text px-10 py-7 mb-20"
            ></textarea>
            <div className="flex-center">
              <button
                type="submit"
                className="flex items-center bg-orange-btn text-white gap-7 px-10 py-7 cursor-pointer tracking-widest rounded-md hover:bg-blue-light duration-300 hover:gap-14 hover:translate-x-10"
              >
                Send Message
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-18"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
