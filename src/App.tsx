import { useState, useEffect } from "react";

import { stories } from "./components/Story/stories";
import { testimonialData } from "./components/Testimonial/TestimonialData";
import { columnSectionData } from "./components/ColumnSection/ColumnSectionData";

import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import VideoSection from "./components/VideoSection/VideoSection";
import ColumnSection from "./components/ColumnSection/ColumnSection";
import Testimonial from "./components/Testimonial/Testimonial";
import LearnMore from "./components/LearnMore/LearnMore";

const App = () => {
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const updateWindowDimensions = () => {
    windowWidth;
    const width = window.innerWidth;
    setWindowWidth(width);
    setIsMobile(width < 700);
  };

  useEffect(() => {
    updateWindowDimensions();
    window.addEventListener("resize", updateWindowDimensions);
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <>
      <main>
        <article>
          <Hero isMobile={isMobile} />
          <Story
            isMobile={isMobile}
            text={stories[1].text}
            image={stories[1].image}
            mediaLeft={stories[1].mediaLeft}
            textBreak={stories[1].textBreak}
            isMediaSkinny={stories[1].isMediaSkinny}
            carousel={stories[1].carousel}
          />

          <Story
            isMobile={isMobile}
            text={stories[2].text}
            image={stories[2].image}
            mediaLeft={stories[2].mediaLeft}
            textBreak={stories[2].textBreak}
            isMediaSkinny={stories[2].isMediaSkinny}
            carousel={stories[2].carousel}
          />
          <Testimonial
            testimonial={testimonialData[1].testimonial}
            person={testimonialData[1].person}
            image={testimonialData[1].image}
            backgroundColor={testimonialData[1].backgroundColor}
            imgLeft={testimonialData[1].imgLeft}
          />
          <ColumnSection
            heading={columnSectionData[1].heading}
            text={columnSectionData[1].text}
            images={columnSectionData[1].images}
          />
          <Story
            isMobile={isMobile}
            text={stories[3].text}
            image={stories[3].image}
            mediaLeft={stories[3].mediaLeft}
            textBreak={stories[3].textBreak}
            isMediaSkinny={stories[3].isMediaSkinny}
            carousel={stories[3].carousel}
          />
          <VideoSection />
          <Story
            isMobile={isMobile}
            text={stories[4].text}
            image={stories[4].image}
            mediaLeft={stories[4].mediaLeft}
            textBreak={stories[4].textBreak}
            isMediaSkinny={stories[4].isMediaSkinny}
            carousel={stories[4].carousel}
          />
          <ColumnSection
            heading={columnSectionData[2].heading}
            text={columnSectionData[2].text}
            images={columnSectionData[2].images}
          />
          <Story
            isMobile={isMobile}
            text={stories[5].text}
            image={stories[5].image}
            mediaLeft={stories[5].mediaLeft}
            textBreak={stories[5].textBreak}
            isMediaSkinny={stories[5].isMediaSkinny}
            carousel={stories[5].carousel}
          />

          <Testimonial
            testimonial={testimonialData[2].testimonial}
            person={testimonialData[2].person}
            image={testimonialData[2].image}
            backgroundColor={testimonialData[2].backgroundColor}
            imgLeft={testimonialData[2].imgLeft}
          />

          <Story
            isMobile={isMobile}
            text={stories[6].text}
            image={stories[6].image}
            mediaLeft={stories[6].mediaLeft}
            textBreak={stories[6].textBreak}
            isMediaSkinny={stories[6].isMediaSkinny}
            carousel={stories[6].carousel}
          />

          <Story
            isMobile={isMobile}
            text={stories[7].text}
            image={stories[7].image}
            mediaLeft={stories[7].mediaLeft}
            textBreak={stories[7].textBreak}
            isMediaSkinny={stories[7].isMediaSkinny}
            carousel={stories[7].carousel}
          />

          <LearnMore />
        </article>
      </main>
    </>
  );
};

export default App;
