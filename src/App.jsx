import "./css/main.css";
import Summary from "./components/main/Sunnary";
import About from "./components/main/About";
import WorkExperience from "./components/main/WorkExperience";
import Portfolio from "./components/main/Portfo;io";
import Contact from "./components/main/Contact";
import Footer from "./components/main/footer";
import Header from "./components/hrader/Header";
import { useEffect, useRef, useState } from "react";
import HeaderMob from "./components/hrader/HeaderMob";
import Loading from "./components/main/Loading";
import FontFaceObserver from 'fontfaceobserver';
import ScrollToTop from "./components/main/ScrollToTop";

export default function App() {
  const heroRef = useRef();
  const aboutMeRef = useRef();
  const workRef = useRef();
  const portfolioRef = useRef();
  const contactRef = useRef();
  const [itemNum, setItemNum] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const font = new FontFaceObserver('Montserrat-bold');

    font.load().then(() => {
      console.log('فونت Montserrat بارگذاری شد');
      // اگر نیاز به رصد تصاویر هم دارید، می‌توانید در اینجا Promise.all استفاده کنید
      setLoading(false);
    }).catch((err) => {
      console.error('خطا در بارگذاری فونت:', err);
      setLoading(false);
    });
  }, [])

  return (
    <>
      <header>
        <Header
          heroRef={heroRef}
          aboutMeRef={aboutMeRef}
          workRef={workRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
          itemNum={itemNum}
          setItemNum={setItemNum}
        />

        <HeaderMob
          heroRef={heroRef}
          aboutMeRef={aboutMeRef}
          workRef={workRef}
          portfolioRef={portfolioRef}
          contactRef={contactRef}
          itemNum={itemNum}
          setItemNum={setItemNum}
        />
      </header>

      <main>
        <Summary
          heroRef={heroRef}
          itemNum={itemNum}
          setItemNum={setItemNum}
          aboutMeRef={aboutMeRef}
          contactRef={contactRef}
        />
        <About aboutMeRef={aboutMeRef} />
        <WorkExperience workRef={workRef} />
        <Portfolio portfolioRef={portfolioRef} />
        <Contact contactRef={contactRef} />
        <Footer />
        {loading && <Loading />}
        <ScrollToTop/>
      </main>
    </>
  );
}
