import {
  faClipboard,
  faImage,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faHouseChimney, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";

export default function HeaderMob(props) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
    console.log(isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  //   useEffect(() => {
  //     const handleClickOutside = (event) => {
  //       if (menuRef.current && !menuRef.current.contains(event.target)) {
  //         closeMenu();
  //       }
  //     };

  //     document.addEventListener("mousedown", handleClickOutside);
  //     return () => {
  //       document.removeEventListener("mousedown", handleClickOutside);
  //     };
  //   }, []);

  const scrollToSection = (elementRef, number) => {
    elementRef.current?.scrollIntoView({
      behavior: "smooth", // برای اسکرول صاف
      block: "center", // قرار دادن بخش در مرکز صفحه
    });

    props.setItemNum(number);
  };

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
      threshold: 0.6, // می‌توانید این مقدار را بر اساس نیاز تغییر دهید
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
      <div className="md:hidden fixed top-20 right-25 bg-orange-btn z-100 rounded-full cursor-pointer">
        <input
          id="checkbox"
          type="checkbox"
          checked={isOpen ? true : false}
          onChange={toggleMenu}
        />
        <label className="toggle" htmlFor="checkbox">
          <div id="bar1" className="bars"></div>
          <div id="bar2" className="bars"></div>
          <div id="bar3" className="bars"></div>
        </label>
      </div>

      {isOpen && <div className="overlay" onClick={closeMenu} />}

      <div
        ref={menuRef}
        className={`md:hidden offcanvas-menu ${isOpen ? "open" : ""}`}
      >
        <ul>
          <li
            onClick={() => {
              closeMenu();
              scrollToSection(props.heroRef, 1);
            }}
            style={{ backgroundColor: props.itemNum === 1 && "#2980b9" }}
            className="group flex justify-start items-center font-montserrat-bold h-52 bg-[rgba(0,0,0,.1)] hover:bg-blue-light px-14 rounded-full cursor-pointer duration-300 mb-10"
          >
            <a href="#Home" className="flex-center">
              <FontAwesomeIcon
                icon={faHouseChimney}
                style={{ height: "18px", color: props.itemNum === 1 && "#ecf0f1" }}
                className="text-gray-text group-hover:text-white-back mr-8 transition-all duration-300"
              />
              <span
                style={{ color: props.itemNum === 1 && "#fff" }}
                className="font-montserrat-bold text-[14px] group-hover:text-white-back transition-all duration-300"
              >
                Home
              </span>
            </a>
          </li>

          <li
            onClick={() => {
              closeMenu();
              scrollToSection(props.aboutMeRef, 2);
            }}
            style={{ backgroundColor: props.itemNum === 2 && "#2980b9" }}
            className="group flex justify-start items-center font-montserrat-bold h-52 bg-[rgba(0,0,0,.1)] hover:bg-blue-light px-14 rounded-full cursor-pointer duration-300 mb-10"
          >
            <a href="#About" className="flex-center">
              <FontAwesomeIcon
                icon={faUser}
                style={{ height: "18px", color: props.itemNum === 2 && "#ecf0f1" }}
                className="text-gray-text group-hover:text-white-back mr-8 transition-all duration-300"
              />
              <span
                style={{ color: props.itemNum === 2 && "#fff" }}
                className="font-montserrat-bold text-[14px] group-hover:text-white-back transition-all duration-300"
              >
                About
              </span>
            </a>
          </li>

          <li
            onClick={() => {
              closeMenu();
              scrollToSection(props.workRef, 3);
            }}
            style={{ backgroundColor: props.itemNum === 3 && "#2980b9" }}
            className="group flex justify-start items-center font-montserrat-bold h-52 bg-[rgba(0,0,0,.1)] hover:bg-blue-light px-14 rounded-full cursor-pointer duration-300 mb-10"
          >
            <a href="#Resume" className="flex-center">
              <FontAwesomeIcon
                icon={faClipboard}
                style={{ height: "18px", color: props.itemNum === 3 && "#ecf0f1" }}
                className="text-gray-text group-hover:text-white-back mr-8 transition-all duration-300"
              />
              <span
                style={{ color: props.itemNum === 3 && "#fff" }}
                className="font-montserrat-bold text-[14px] group-hover:text-white-back transition-all duration-300"
              >
                Resume
              </span>
            </a>
          </li>

          <li
            onClick={() => {
              closeMenu();
              scrollToSection(props.portfolioRef, 4);
            }}
            style={{ backgroundColor: props.itemNum === 4 && "#2980b9" }}
            className="group flex justify-start items-center font-montserrat-bold h-52 bg-[rgba(0,0,0,.1)] hover:bg-blue-light px-14 rounded-full cursor-pointer duration-300 mb-10"
          >
            <a href="#Portfolio" className="flex-center">
              <FontAwesomeIcon
                icon={faImage}
                style={{ height: "18px", color: props.itemNum === 4 && "#ecf0f1" }}
                className="text-gray-text group-hover:text-white-back mr-8 transition-all duration-300"
              />
              <span
                style={{ color: props.itemNum === 4 && "#fff" }}
                className="font-montserrat-bold text-[14px] group-hover:text-white-back transition-all duration-300"
              >
                Portfolio
              </span>
            </a>
          </li>

          <li
            onClick={() => {
              closeMenu();
              scrollToSection(props.contactRef, 5);
            }}
            style={{ backgroundColor: props.itemNum === 5 && "#2980b9" }}
            className="group flex justify-start items-center font-montserrat-bold h-52 bg-[rgba(0,0,0,.1)] hover:bg-blue-light px-14 rounded-full cursor-pointer duration-300 mb-10"
          >
            <a href="#Contact" className="flex-center">
              <FontAwesomeIcon
                icon={faPhone}
                style={{ height: "18px", color: props.itemNum === 5 && "#ecf0f1" }}
                className="text-gray-text group-hover:text-white-back mr-8 transition-all duration-300"
              />
              <span
                style={{ color: props.itemNum === 5 && "#fff" }}
                className="font-montserrat-bold text-[14px] group-hover:text-white-back transition-all duration-300"
              >
                Contact
              </span>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
