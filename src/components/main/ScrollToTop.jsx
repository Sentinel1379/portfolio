import { useEffect, useState } from "react";

export default function ScrollToTop() {
  // وضعیت نمایش دکمه
  const [isVisible, setIsVisible] = useState(false);

  // تابعی برای بررسی موقعیت اسکرول صفحه
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // تابع اسکرول به بالای صفحه
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // برای اسکرول نرم
    });
  };

  // اضافه کردن event listener برای اسکرول صفحه
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to Top"
          className="flex justify-center text-white bg-blue-light text-[30px] size-60 fixed bottom-40 right-40 border-0 rounded-full z-100 transition duration-300 hover:scale-[1.1] cursor-pointer"
        >
          <div className="size-0 border-x-10 border-x-transparent border-b-15 border-b-white mx-auto mt-[35%] mb-[60%]"></div>
        </button>
      )}
    </>
  );
}
