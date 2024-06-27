import React, { useRef, useEffect, useState } from "react";
import "./Story.scss";
import Carousel from "../Carousel/Carousel";

type SlideType = {
  id: number;
  image: string;
};

type SlidesArray = SlideType[] | [];

type CarouselType = {
  hasCarousel: boolean;
  slides: SlidesArray;
};

type ImageType = {
  imgSrc: string;
  imgAlt: string;
  hasImgBackground: boolean;
  backgroundColor: string;
  backgroundHigh: boolean;
};

type TextBreakType = {
  shouldBreak: boolean;
  breakAt: string;
};

interface StoryProps {
  isMobile: boolean;
  text: string;
  image: ImageType;
  mediaLeft: boolean;
  textBreak: TextBreakType;
  isMediaSkinny: boolean;
  carousel: CarouselType;
}

const Story = ({
  isMobile,
  text,
  image,
  mediaLeft,
  textBreak,
  isMediaSkinny,
  carousel,
}: StoryProps) => {
  const storyRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  let textParts = [text];

  if (textBreak.shouldBreak) {
    const breakIndex = text.indexOf(textBreak.breakAt);
    if (breakIndex !== -1) {
      textParts = [
        text.substring(0, breakIndex),
        textBreak.breakAt,
        text.substring(breakIndex + textBreak.breakAt.length),
      ];
    }
  }

  const imgContainerClass = `${
    mediaLeft ? "img-container_row" : "img-container_reverse"
  } ${isMediaSkinny && !isMobile ? "skinny" : ""}`;

  const backgroundClass =
    isMediaSkinny && !isMobile
      ? image.backgroundHigh
        ? "img-background_skinny"
        : "img-background_skinny_low"
      : image.backgroundHigh
      ? "img-background"
      : "img-background_low";

  const formattedText = text.split("/n").map((part, index) => (
    <React.Fragment key={index}>
      {part}
      {index < text.split("/n").length - 1 && (
        <>
          <br />
          <br />
        </>
      )}
    </React.Fragment>
  ));

  return (
    <section
      ref={storyRef}
      className={`${
        mediaLeft ? "story-container_row" : "story-container_reverse"
      } ${isInView ? "element-fade in-view" : "element-fade"}`}
    >
      {(!textBreak.shouldBreak || !isMobile) && (
        <>
          {carousel.hasCarousel ? (
            <Carousel isMediaSkinny={isMediaSkinny} slides={carousel.slides} />
          ) : (
            <div className={imgContainerClass}>
              <img
                className="story-img"
                src={image.imgSrc}
                alt={image.imgAlt}
              />
              {!isMobile && image.hasImgBackground && (
                <div
                  className={backgroundClass}
                  style={{ backgroundColor: image.backgroundColor }}
                ></div>
              )}
            </div>
          )}
        </>
      )}
      {!textBreak.shouldBreak && textBreak.breakAt === "" && (
        <p>{formattedText}</p>
      )}
      {!textBreak.shouldBreak && textBreak.breakAt.length > 1 && (
        <p>{formattedText}</p>
      )}
      {textBreak.shouldBreak && textBreak.breakAt.length > 1 && (
        <p>
          {textParts.map((part, index) => (
            <React.Fragment key={index}>
              {part === textBreak.breakAt ? (
                !isMobile ? (
                  <>
                    <br />
                    <br />
                  </>
                ) : null
              ) : (
                part
              )}
              {textBreak.shouldBreak && index === 0 && (
                <>
                  {isMobile && (
                    <div
                      className={imgContainerClass}
                      style={{ margin: "1.5rem 0" }}
                    >
                      {carousel.hasCarousel ? (
                        <Carousel
                          isMediaSkinny={isMediaSkinny}
                          slides={carousel.slides}
                        />
                      ) : (
                        <img
                          className="story-img"
                          src={image.imgSrc}
                          alt={image.imgAlt}
                        />
                      )}
                      {!isMobile && image.hasImgBackground && (
                        <div
                          className={backgroundClass}
                          style={{ backgroundColor: image.backgroundColor }}
                        ></div>
                      )}
                    </div>
                  )}
                </>
              )}
            </React.Fragment>
          ))}
        </p>
      )}
    </section>
  );
};

export default Story;
