import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "../../assets/data.json";
import person from "../../assets/8-Photoroom.png-Photoroom.png";
import htmlIcon from "../../assets/html5-01-svgrepo-com.png";
import CSSIcon from "../../assets/css-fill-svgrepo-com.png";
import tailwindIcon from "../../assets/tailwind-css-svgrepo-com.png";
import BootstrapIcon from "../../assets/bootstrap-fill-svgrepo-com.png";
import SassIcon from "../../assets/sass-svgrepo-com.png";
import ReactIcon from "../../assets/react-svgrepo-com.png";
import NextIcon from "../../assets/nextjs-svgrepo-com.png";
import TypeIcon from "../../assets/typescript-svgrepo-com.png";
import ReduxIcon from "../../assets/redux-svgrepo-com.png";
import GitIcon from "../../assets/git-svgrepo-com.png";

export default function About(props) {
  const aboutRef = useRef(null);
  const [typing, setTyping] = useState(true);

  // if(aboutRef.current) {
  //   const typed = new Typed(aboutRef.current, {
  //     strings: [data.about?.text],
  //     typeSpeed: 35,
  //     backSpeed: 50,
  //     smartBackspace: true,
  //     showCursor: false,
  //     cursorChar: "|",
  //     autoInsertCss: true,
  //   });
  // }

  useEffect(() => {
    if (typing) {
      const typed = new Typed(aboutRef.current, {
        strings: [data.about?.text],
        typeSpeed: 10,
        backSpeed: 0,
        smartBackspace: true,
        showCursor: false,
        cursorChar: "|",
        autoInsertCss: false,
      });
      setTyping(false);
    }

    // return () => {
    //   // Destroy Typed instance during cleanup to stop animation
    //   typed.destroy();
    // };
  }, []);

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
    mirror: true, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  // useEffect(() => {
  //   console.log(props.aboutMeRef.current);
  // }, []);

  return (
    <>
      <div
        ref={props.aboutMeRef}
        className="flex-center flex-col py-60 md:px-80 px-10 lg:pl-140 overflow-clip scroll-mt-92"
      >
        <div className="container flex-center">
          <h2 className="about-title flex-center">About</h2>
        </div>
        <div
          className="container bg-white flex xl:flex-row flex-col items-start justify-between p-30 shadow-about rounded-md"
          data-aos="fade-up"
        >
          <section className="xl:w-[60%] w-full px-12">
            <div className="flex items-center md:justify-start justify-center">
              <img
                src={person}
                alt=""
                className="size-150 rounded-full mr-10"
              />
              <div className="md:block hidden">
                <p className="mb-12">
                  <strong className="font-extrabold text-black">Name: </strong>
                  <span className="font-light">Sadegh Analooee</span>
                </p>
                <p className="mb-12">
                  <strong className="font-extrabold text-black">Email: </strong>
                  <span className="font-light">sadeghanalooee31@gmail.com</span>
                </p>
                <p className="mb-12">
                  <strong className="font-extrabold text-black">Phone: </strong>
                  <span className="font-light">+989186916027</span>
                </p>
              </div>
            </div>
            <div className="mt-20">
              <h4>About me</h4>
              <p
                className="Justify-text text-orange-btn md:min-h-200 min-h-100"
                ref={aboutRef}
              ></p>
            </div>
          </section>

          <section className="xl:w-[40%] w-full px-12 flex-col justify-start items-center h-full md:mt-0 mt-25">
            <h5 className="w-full mb-10">Skills</h5>
            <div className="w-full grid md:grid-cols-[repeat(auto-fit,minmax(80px,1fr))] grid-cols-[repeat(auto-fit,minmax(60px,1fr))] place-items-center md:gap-20 gap-15">
              {/* {data.about?.skills.map((skill , index) => {
                return (
                  <div className="w-full my-25" key={index}>
                    <span className="progress-bar-title">skill.title</span>

                    <div className="progress-bar-box">
                      <span className={`progress-bar-box-span w-[${skill.percentage}%]`}>
                        <span className="progress-bar-box-tooltip">{skill.percentage}%</span>
                      </span>
                    </div>
                  </div>
                );
              })} */}

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="300"
                data-aos-once="true"
              >
                <img
                  src={htmlIcon}
                  alt="HTML-logo"
                  className="md:size-50 size-35"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="450"
                data-aos-once="true"
              >
                <img
                  src={CSSIcon}
                  alt="css-logo"
                  className="md:size-50 size-35"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="750"
                data-aos-once="true"
              >
                <img
                  src={tailwindIcon}
                  alt="tailwind-logo"
                  className="md:size-50 size-35"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1050"
                data-aos-once="true"
              >
                <img
                  src={BootstrapIcon}
                  alt="bootstrap-logo"
                  className="md:size-45 size-30"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1350"
                data-aos-once="true"
              >
                <img
                  src={SassIcon}
                  alt="sass-logo"
                  className="md:size-50 size-35"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1650"
                data-aos-once="true"
              >
                <img
                  src={ReactIcon}
                  alt="react-logo"
                  className="md:size-50 size-35"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="1950"
                data-aos-once="true"
              >
                <img
                  src={NextIcon}
                  alt="nextjs-logo"
                  className="md:size-60 size-40"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="2250"
                data-aos-once="true"
              >
                <img
                  src={TypeIcon}
                  alt="typescript-logo"
                  className="md:size-50 size-35"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="2550"
                data-aos-once="true"
              >
                <img
                  src={ReduxIcon}
                  alt="Redux-logo"
                  className="md:size-50 size-35"
                />
              </div>

              <div
                className="skill-back flex-center"
                data-aos="zoom-in"
                data-aos-duration="600"
                data-aos-delay="2850"
                data-aos-once="true"
              >
                <img
                  src={GitIcon}
                  alt="git-logo"
                  className="md:size-50 size-35"
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
