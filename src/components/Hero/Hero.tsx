import { useEffect, useRef } from "react";
import "./Hero.scss";
import heroImg from "../../assets/images/desktop/heroImg.png";
import heroImgMobile from "../../assets/images/mobile/heroImg_mobile.png";
import googleLogoImg from "../../assets/images/desktop/googleLogo.png";

interface HeroProps {
  isMobile: boolean;
}

const Hero = ({ isMobile }: HeroProps) => {
  const heroImgRef = useRef<HTMLImageElement>(null);
  const heroMainRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        const scrollPosition = window.scrollY;
        heroImgRef.current.style.transform = `translateY(-${
          scrollPosition + 30
        }px)`;
      }
      if (heroMainRef.current) {
        const scrollPosition = window.scrollY;
        heroMainRef.current.style.transform = `translateY(-${
          scrollPosition + 30
        }px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={"hero"}>
      <img
        className={"hero-img"}
        src={isMobile ? heroImgMobile : heroImg}
        alt="woman lying down getting photo"
        ref={heroImgRef}
      />
      <main className={"hero-content"} ref={heroMainRef}>
        <div className={"collaboration-statement"}>
          {!isMobile && <p>In collaboration with</p>}
          <img src={googleLogoImg} alt="google pixel logo" />
        </div>

        <div className={"hero-main"}>
          <h1>A new camera for a new age</h1>
          <p>
            With the new Pixel 6 smartphone, Google has designed a camera with a
            diverse range of skin tones in mind.
          </p>

          {!isMobile && <button>Scroll for more</button>}
        </div>
      </main>
    </header>
  );
};

export default Hero;
