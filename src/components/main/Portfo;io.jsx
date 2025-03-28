import { Carousel } from "react-responsive-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef, useState } from "react";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import data from "../../assets/data.json";
import LoadingImage from "./LoadingImage";

export default function Portfolio(props) {
  const carouselRef = useRef(null);
  const [thumbsLoaded, setThumbsLoaded] = useState({});

  const renderThumbs = () => {
    return data.projects.map((pro, index) => (
      <div
        key={index}
        style={{ width: "100%", height: "auto", overflow: "hidden" }}
        className="relative cursor-pointer"
      >
        <img
          src={pro.src}
          alt="zabanmehrpub"
          className={`w-full md:h-80 h-50 `}
          title={`thumb-${index}`}
          loading="lazy"
          onLoad={() => {
            setThumbsLoaded((prev) => ({ ...prev, [index]: true }));
          }}
          onError={() => {
            // اضافه کردن هندلر برای خطا
            setThumbsLoaded((prev) => ({ ...prev, [index]: true }));
          }}
        />
        {!thumbsLoaded[index] && (
          <div className="absolute top-0 left-0 w-full h-full" title={`thumb-${index}`}>
            <LoadingImage />
          </div>
        )}
      </div>
    ));
  };

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 1000, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 200, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 400, // values from 0 to 3000, with step 50ms
    easing: "ease-in-out", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  useEffect(() => {
    if (carouselRef.current) {
      if (window.innerWidth < 768) {
        carouselRef.current
          .querySelector(".carousel-root")
          .setAttribute("data-aos", "fade-right");
      } else {
        carouselRef.current
          .querySelector(".thumbs-wrapper")
          .setAttribute("data-aos", "fade-left");
        carouselRef.current
          .querySelector(".carousel-slider")
          .setAttribute("data-aos", "fade-right");
        console.log("else");
      }
    }
  }, []);

  return (
    <>
      <div
        ref={props.portfolioRef}
        className="flex-center flex-col py-10 md:px-80 lg:pl-140 px-10 overflow-clip scroll-mt-92"
      >
        <div className="container flex-center">
          <h2 className="portfolio-title flex-center">Portfolio</h2>
        </div>

        <div className="container" ref={carouselRef}>
          <Carousel
            showArrows={false}
            emulateTouch={true}
            infiniteLoop={true}
            showStatus={false}
            showIndicators={false}
            renderThumbs={renderThumbs}
            dynamicHeight={false}
            ref={carouselRef}
          >
            {data.projects.map((pro, index) => {
              return (
                <div key={index} className="relative">
                  <iframe
                    src={pro.url}
                    frameBorder="0"
                    className="xl:w-[96%] md:h-500 h-350"
                    style={{ border: "none" }}
                  ></iframe>
                  <div className="cover-web"></div>
                  <div className=" w-3/4 text-left absolute bottom-15 left-15 text-white z-3">
                    <h2 className="text-white text-[18px]">{pro.title}</h2>
                    <p className="text-white text-[16px] opacity-70">
                      I used :
                      {pro?.tech.map((t, index) => {
                        return (
                          <span key={index} className="text-white text-[16px]">
                            {t}
                          </span>
                        );
                      })}
                      in this project.
                    </p>
                  </div>
                  <div className="flex lg:flex-row flex-col gap-x-15 gap-y-15 absolute bottom-15 right-15 z-100">
                    <a
                      href={pro.url}
                      target="_blank"
                      className="text-[24px]  inline-flex justify-center items-center group transition-all duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faEye}
                        beat
                        className="text-white group-hover:text-black border-2 border-white rounded-[50%] p-2 group-hover:border-black  transition-all duration-300"
                      />
                    </a>
                    <a
                      href={pro.urlGitHub}
                      target="_blank"
                      className="text-[24px]  inline-flex justify-center items-center group transition-all duration-300"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        beat
                        color="#fff"
                        className="text-white group-hover:text-black border-2 border-white rounded-[50%] p-2 group-hover:border-black  transition-all duration-300"
                      />
                    </a>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </>
  );
}
