import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import data from "../../assets/data.json";

export default function WorkExperience(props) {
  const elmentRef = useRef(null);
  const [fad, setFade] = useState("fade-left");

  useEffect(() => {
    if (window.innerWidth < 768) {
      setFade("fade-left");
    } else {
      setFade("fade-right");
    }
  }, [window.innerWidth]);

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 100, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  return (
    <>
      <div
        ref={props.workRef}
        className="flex-center flex-col py-10 md:px-80 lg:pl-140 px-10 overflow-clip scroll-mt-92"
      >
        <div className="container flex-center">
          <h2 className="experience-title flex-center">Working Experience</h2>
        </div>

        <div className="container">
          <div className="relative w-full after:content-[''] after:absolute after:bg-orange-btn after:top-0 after:bottom-0 md:after:left-1/2 after:left-8 after:w-2 after:-ml-1 after:-z-1">
            {data.experiences.map((exp, index) => {
              if (exp.id % 2 !== 0) {
                return (
                  <section
                    className="experience-card md:left-1/2 md:pl-30 left-0 pr-0 pl-38 before:md:left-10 before:left-18 before:border-[transparent_#27ae60_transparent_transparent] md:after:-left-8 after:left-0"
                    data-aos="fade-left"
                    key={index}
                  >
                    <div className="shadow-about relative bg-white p-30 border-l-5 border-l-[#27ae60]">
                      <div className="w-full text-[16px] font-[600] md:text-right text-left text-[#EF233C] md:absolute md:top-44 md:left-auto md:right-[calc(100%+55px)] z-1 relative top-0 left-0 right-auto md:mb-0 mb-10">
                        {exp.date}
                      </div>
                      <h2 className="text-[20px] font-[600] mb-5">
                        {exp.type}
                      </h2>
                      <h4 className="font-montserrat text-[16px] italic mb-10">
                        {exp.companyName}
                      </h4>
                      <p className="text-[15px]">{exp.descriptionText}</p>
                      {exp.descriptionPages.map((d, index) => {
                        return (
                          <p className="text-[15px]" key={index}>
                            {d}
                          </p>
                        );
                      })}

                      <h5 className="mt-5">
                        Site Address:
                        <a href={exp.siteAddress} className="ml-4 font-montserrat">
                          {exp.siteAddress}
                        </a>
                      </h5>
                    </div>
                  </section>
                );
              } else {
                return (
                  <section
                    className="experience-card left-0 md:pr-30 pr-0 md:pl-0 pl-38 md:before:border-[transparent_transparent_transparent_#27ae60] before:border-[transparent_#27ae60_transparent_transparent] before:md:left-auto before:left-18 after:md:left-auto after:left-0"
                    data-aos={fad}
                    key={index}
                  >
                    <div className="shadow-about relative bg-white p-30 md:border-r-5 md:border-r-green-btn border-l-5 md:border-l-0 border-l-green-btn">
                      <div className="w-full text-[16px] font-[600] text-left text-black md:absolute md:top-44 md:left-[calc(100%+55px)] z-1 relative top-0 left-0 right-auto md:mb-10 mb-10">
                        {exp.date}
                      </div>
                      <h2 className="text-[20px] font-[600] mb-5">
                        {exp.type}
                      </h2>
                      <h4 className="font-montserrat text-[16px] italic mb-10">
                        {exp.companyName}
                      </h4>
                      <p className="text-[15px]">{exp.descriptionText}</p>
                      {exp.descriptionPages.map((d, index) => {
                        return (
                          <p className="text-[15px]" key={index}>
                            {d}
                          </p>
                        );
                      })}
                      <h5 className="mt-5">
                        Site Address:
                        <a href={exp.siteAddress} className="ml-4 font-montserrat">
                          {exp.siteAddress}
                        </a>
                      </h5>
                    </div>
                  </section>
                );
              }
            })}
          </div>
        </div>
      </div>
    </>
  );
}
