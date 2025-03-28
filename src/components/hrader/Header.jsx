import {
  faClipboard,
  faImage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHouseChimney, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function Header(props) {
  const scrollToSection = (elementRef, number) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth", // برای اسکرول صاف
      block: "center", // قرار دادن بخش در مرکز صفحه
    });

    props.setItemNum(number);
  };

  useEffect(() => {
    console.log(props.itemNum);
    
  } , [props.itemNum])

  useEffect(() => {
    const sections = [
      { ref: props.heroRef, id: 1 },
      { ref: props.aboutMeRef, id: 2 },
      { ref: props.workRef, id: 3 },
      { ref: props.portfolioRef, id: 4 },
      { ref: props.contactRef, id: 5 },
    ];

    const options = {
      root: null,
      threshold: 0.7, // می‌توانید این مقدار را بر اساس نیاز تغییر دهید
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const activeSection = sections.find(
            (section) => section.ref.current === entry.target
          );
          if (activeSection) {
            props.setItemNum(activeSection.id);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, options);

    sections.forEach((section) => {
      if (section.ref.current) {
        observer.observe(section.ref.current);
      }
    });

    return () => {
      sections.forEach((section) => {
        if (section.ref.current) {
          observer.unobserve(section.ref.current);
        }
      });
    };
  }, [
    props.heroRef,
    props.aboutMeRef,
    props.workRef,
    props.portfolioRef,
    props.contactRef,
  ]);

  return (
    <>
      <div className="hidden md:flex justify-center items-center fixed left-0 top-0 bottom-0 px-15 z-100">
        <nav className="flex flex-col items-start">
          <div
            onClick={() => {
              scrollToSection(props.heroRef, 1);
            }}
            className="group relative flex justify-center items-center text-white-back font-montserrat-bold mb-10"
          >
            <div
              style={{ backgroundColor: props.itemNum === 1 && "#2980b9" }}
              className="flex justify-center items-center lg:h-56 lg:min-w-56 h-48 min-w-48 group-hover:gap-x-8 bg-[rgba(0,0,0,.1)] group-hover:bg-blue-light lg:px-16 px-14 rounded-full cursor-pointer duration-300"
            >
              <FontAwesomeIcon
                icon={faHouseChimney}
                style={{ color: props.itemNum === 1 && "#ecf0f1" }}
                className="header-icon text-gray-text group-hover:text-white-back transition-all duration-300"
              />
              <span className="text-[0px] group-hover:lg:text-[15px] group-hover:text-[13px] group-hover:text-white-back duration-300">
                Home
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              scrollToSection(props.aboutMeRef, 2);
            }}
            className="group relative flex justify-center items-center text-white-back font-montserrat-bold mb-10"
          >
            <div
              style={{ backgroundColor: props.itemNum === 2 && "#2980b9" }}
              className="flex justify-center items-center lg:h-56 lg:min-w-56 h-48 min-w-48 group-hover:gap-x-8 bg-[rgba(0,0,0,.1)] group-hover:bg-blue-light lg:px-19 px-16  rounded-full cursor-pointer duration-300"
            >
              <FontAwesomeIcon
                icon={faUser}
                style={{ color: props.itemNum === 2 && "#ecf0f1" }}
                className="header-icon text-gray-text group-hover:text-white-back transition-all duration-300"
              />

              <span className="text-[0px] group-hover:lg:text-[15px] group-hover:text-[13px] group-hover:text-white-back duration-300">
                About
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              scrollToSection(props.workRef, 3);
            }}
            className="group relative flex justify-center items-center text-white-back font-montserrat-bold mb-10"
          >
            <div
              style={{ backgroundColor: props.itemNum === 3 && "#2980b9" }}
              className="flex justify-center items-center lg:h-56 lg:min-w-56 h-48 min-w-48 group-hover:gap-x-8 bg-[rgba(0,0,0,.1)] group-hover:bg-blue-light lg:px-20 px-17 rounded-full cursor-pointer duration-300"
            >
              <FontAwesomeIcon
                icon={faClipboard}
                style={{ color: props.itemNum === 3 && "#ecf0f1" }}
                className="header-icon text-gray-text group-hover:text-white-back transition-all duration-300"
              />

              <span className="text-[0px] group-hover:lg:text-[15px] group-hover:text-[13px] group-hover:text-white-back duration-300">
                Resume
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              scrollToSection(props.portfolioRef, 4);
            }}
            className="group relative flex justify-center items-center text-white-back font-montserrat-bold mb-10"
          >
            <div
              style={{ backgroundColor: props.itemNum === 4 && "#2980b9" }}
              className="flex justify-center items-center lg:h-56 lg:min-w-56 h-48 min-w-48 group-hover:gap-x-8 bg-[rgba(0,0,0,.1)] group-hover:bg-blue-light lg:px-20 px-15 rounded-full cursor-pointer duration-300"
            >
              <FontAwesomeIcon
                icon={faImage}
                style={{
                  height: "17px",
                  color: props.itemNum === 4 && "#ecf0f1",
                }}
                className="text-gray-text group-hover:text-white-back transition-all duration-300"
              />

              <span className="text-[0px] group-hover:lg:text-[15px] group-hover:text-[13px] group-hover:text-white-back duration-300">
                Portfolio
              </span>
            </div>
          </div>

          <div
            onClick={() => {
              scrollToSection(props.contactRef, 5);
            }}
            className="group relative flex justify-center items-center text-white-back font-montserrat-bold mb-10"
          >
            <div
              style={{ backgroundColor: props.itemNum === 5 && "#2980b9" }}
              className="flex justify-center items-center lg:h-56 lg:min-w-56 h-48 min-w-48 group-hover:gap-x-8 bg-[rgba(0,0,0,.1)] group-hover:bg-blue-light lg:px-20 px-15 rounded-full cursor-pointer duration-300"
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{
                  height: "16px",
                  color: props.itemNum === 5 && "#ecf0f1",
                }}
                className="text-gray-text group-hover:text-white-back transition-all duration-300"
              />

              <span className="text-[0px] group-hover:lg:text-[15px] group-hover:text-[13px] group-hover:text-white-back duration-300">
                Contact
              </span>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
