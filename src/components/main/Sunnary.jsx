import {
  faGithub,
  faLinkedin,
  faSquareWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";
import Typed from "typed.js";
import data from "../../assets/data.json";
import hero from "../../assets/hero-bg.jpg";

export default function Summary(props) {
  const summaryRef = useRef();

  useEffect(() => {
    const typed = new Typed(summaryRef.current, {
      strings: ["Front-end Developer", "Web Developer"],
      typeSpeed: 100,
      backSpeed: 50,
      smartBackspace: true,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      cursorChar: "|",
      autoInsertCss: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  const scrollToSection = (elementRef, number) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth", // برای اسکرول صاف
      block: "center", // قرار دادن بخش در مرکز صفحه
    });

    props.setItemNum(number);
  };

  return (
    <>
      <div
        ref={props.heroRef}
        className="overflow-clip md:px-80 px-10 section w-full md:min-h-[100vh] min-h-[90vh] relative flex-center"
      >
        <div className="absolute size-full cover-box z-2"></div>
        
        <img
          src={hero}
          alt=""
          className="absolute w-full h-full block object-cover z-1"
        />

        <div className="flex justify-center w-full z-2">
          <div className="container" data-aos="zoom-out">
            <div className="lg:pl-80">
              <h2 className="lg:text-[64px] md:text-[50px] font-montserrat-bold text-[32px]">
                Sadegh Analooee
              </h2>

              <p className="text-blue-dark mt-5 lg:text-[26px] md:text-[22px] text-[18px]">
                I'm
                <span
                  className="text-blue-dark tracking-[1px] border-b border-blue-dark ml-5"
                  ref={summaryRef}
                ></span>
                <span className="" aria-hidden="true"></span>
              </p>

              <div className="mt-25">
                <div className="size-full flex items-center">
                  <div className="socialMedia-item child-1 group">
                    <a
                      className="Hover3D flex-center size-full border-0 bg-transparent text-[20px] transition duration-500 cursor-pointer"
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.68, -0.85, 0.265, 1.55)",
                      }}
                      href={data.socialMedia?.linkedin}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="md:scale-100 scale-85 text-gray-text group-hover:text-blue-light transition duration-300"
                        size="lg"
                      />
                    </a>
                  </div>

                  <div className="socialMedia-item child-2 group">
                    <a
                      className="Hover3D flex-center size-full border-0 bg-transparent text-[20px] transition duration-500 cursor-pointer"
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.68, -0.85, 0.265, 1.55)",
                      }}
                      href={data.socialMedia?.whatsApp}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faSquareWhatsapp}
                        className="md:scale-100 scale-85 text-gray-text group-hover:text-blue-light transition duration-300"
                        size="lg"
                      />
                    </a>
                  </div>

                  <div className="socialMedia-item child-3 group">
                    <a
                      className="Hover3D flex-center size-full border-0 bg-transparent text-[20px] transition duration-500 cursor-pointer"
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.68, -0.85, 0.265, 1.55)",
                      }}
                      href={data.socialMedia?.telegram}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faTelegram}
                        className="md:scale-100 scale-85 text-gray-text group-hover:text-blue-light transition duration-300"
                        size="lg"
                      />
                    </a>
                  </div>

                  <div className="socialMedia-item child-4 group">
                    <a
                      className="Hover3D flex-center size-full border-0 bg-transparent text-[20px] transition duration-500 cursor-pointer"
                      style={{
                        transitionTimingFunction:
                          "cubic-bezier(0.68, -0.85, 0.265, 1.55)",
                      }}
                      href={data.socialMedia?.github}
                      target="_blank"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="md:scale-100 scale-85 text-gray-text group-hover:text-blue-light transition duration-300"
                        size="lg"
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-x-20 capitalize md:mt-25 mt-15">
                <div
                  className="relative group cursor-pointer"
                  onClick={() => {
                    scrollToSection(props.contactRef, 5);
                  }}
                >
                  <div className="relative md:text-[18px] text-[14px] md:px-32 px-28 md:py-10 py-7 border-2 border-orange-btn text-orange-btn font-bold text-lg rounded-lg transform transition-all duration-300 group-hover:translate-y-4 group-hover:translate-x-4 shadow-[6px_6px_10px_rgba(0,0,0,0.6),-6px_-6px_10px_rgba(255,255,255,0.1)] group-hover:shadow-[8px_8px_15px_rgba(0,0,0,0.8),-8px_-8px_15px_rgba(255,255,255,0.15)]">
                    Hire Me
                  </div>

                  <div className="absolute inset-0 border-2 border-dashed border-orange-btn rounded-lg opacity-50 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="absolute md:-top-6 md:-right-4 -top-4 -right-1 md:size-13 size-9 bg-orange-btn rounded-full animate-ping shadow-lg"></div>
                  <div className="absolute md:-bottom-6 md:-left-4 -bottom-4 -left-1  md:size-13 size-9 bg-orange-btn rounded-full animate-ping shadow-lg"></div>
                  <div className="absolute top-1/3 md:left-10 left-5 md:size-9 size-6 bg-orange-btn rounded-full animate-ping opacity-70"></div>
                  <div className="absolute top-2/3 md:right-10 right-5 md:size-9 size-6 bg-orange-btn rounded-full animate-ping opacity-70"></div>
                </div>

                <a
                  href="/src/assets/SadeghAnalooeeCV3.pdf"
                  download={true}
                  className="group relative w-120 md:h-50 h-38 bg-transparent hover:bg-blue-light hover:opacity-50 text-center rounded-[.45em] transition-all duration-300 cursor-pointer"
                >
                  <div className="absolute left-0 size-full overflow-hidden">
                    <div className="flex-center md:text-[18px] text-[14px] text-orange-btn absolute top-0 group-hover:-top-full left-0 size-full overflow-hidden transition-all duration-500">
                      Download CV
                    </div>
                    <span className="flex-center md:text-[18px] text-[14px] text-white absolute top-full group-hover:-top-0 left-0 size-full overflow-hidden transition-all duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        role="img"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                        className="md:size-24 size-18"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {props.itemNum === 1 && (
          <div
            className="Arrow animate-bounce"
            onClick={() => {
              scrollToSection(props.aboutMeRef, 2);
            }}
          >
            <div className="rotate-90">
              <div className="Arrow-top"></div>
              <div className="Arrow-bottom"></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
