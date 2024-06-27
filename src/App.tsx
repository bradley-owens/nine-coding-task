import { useState, useEffect } from "react";

import Hero from "./components/Hero/Hero";
import Story from "./components/Story/Story";
import VideoSection from "./components/VideoSection/VideoSection";
import ColumnSection from "./components/ColumnSection/ColumnSection";
import Testimonial from "./components/Testimonial/Testimonial";

import storyOneImg from "./assets/images/desktop/storyOneImg.png";
import storyTwoImg from "./assets/images/desktop/storyTwoImg.png";
import storyThreeImg from "./assets/images/desktop/StoryThreeImg.png";
import storyFourImg from "./assets/images/desktop/storyFourImg.png";
import acknowledgeImgOne from "./assets/images/desktop/acknowledgeImg_one.png";
import acknowledgeImgTwo from "./assets/images/desktop/acknowledgeImg_two.png";
import acknowledgeImgThree from "./assets/images/desktop/acknowledgeImg_three.png";
import futureImgOne from "./assets/images/desktop/columnSection_four.png";
import testimonialOneImg from "./assets/images/desktop/testimonialOneImg.png";
import testimonialTwoImg from "./assets/images/desktop/testimonialTwoImg.png";
import slides1 from "./js/data/slider";
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

  const acknowledgeImages = [
    { imgSrc: acknowledgeImgThree, imgAlt: "Man smiling for photo" },
    { imgSrc: acknowledgeImgTwo, imgAlt: "Woman smiling for photo" },
    { imgSrc: acknowledgeImgOne, imgAlt: "Man crossing arms for photo" },
  ];

  const futureImages = [
    { imgSrc: futureImgOne, imgAlt: "Man smiling for photo on grass" },
  ];

  return (
    <>
      <main>
        <article>
          <Hero isMobile={isMobile} />
          <Story
            isMobile={isMobile}
            text={
              "Growing up, model and dancer Ragavi Ragavan didn't often see pictures of people who look like her. “As a young person, I was very impressionable, as most young people are. I was looking for permission to be myself and looking for people that look like me - it was difficult,” she recalls.   With around one in four Australians born overseas and another 800,000 identifying as First Nations (Australian Bureau of Statistics), Ragavan's experience is far from unique. So, when the opportunity came up for her to take part in a photoshoot for Getty Images, she jumped at the chance."
            }
            image={{
              imgSrc: "",
              imgAlt: "",
              hasImgBackground: false,
              backgroundColor: "",
              backgroundHigh: true,
            }}
            mediaLeft={false}
            textBreak={{ shouldBreak: true, breakAt: "recalls." }}
            isMediaSkinny={true}
            carousel={{ hasCarousel: true, slides: slides1 }}
          />

          <Story
            isMobile={isMobile}
            text={
              ' "As soon as they said Getty, I said yes. It means I get to represent people that look like me - South Asian with curly hair, big eyes, a big smile. You don`t always to see that in the Australian media. It was really important for me to be part of that."'
            }
            image={{
              imgSrc: storyOneImg,
              imgAlt: "Two women laughing",
              hasImgBackground: true,
              backgroundColor: "#e8f2f1",
              backgroundHigh: true,
            }}
            mediaLeft={true}
            textBreak={{ shouldBreak: false, breakAt: "" }}
            isMediaSkinny={false}
            carousel={{ hasCarousel: false, slides: [] }}
          />
          <Testimonial
            testimonial={
              '"I was looking for people that look like me - it was difficult."'
            }
            person={"Ragavi Ragavan"}
            image={{
              imgSrc: testimonialOneImg,
              imgAlt: "woman posing for photo",
            }}
            backgroundColor={"#ffe1c3"}
            imgLeft={false}
          />
          <ColumnSection
            heading={"Acknowledging the past"}
            text={
              " Representing diversity is just on epart of the story. As photographer Daphne Nguyen points out, technology also has a role to play in how images are photographed"
            }
            images={acknowledgeImages}
          />
          <Story
            isMobile={isMobile}
            text={`"When I'm taking photos of people with darker skin tones… the photo kind of blows out and treats that as underexposure when it's really just a colour,” she says. “It challenges us to question why different skin tones are represented differently when exposing an image. This phenomenon isn't new. In fact, film photography has a troubling history of depicting lighter skin tones more favourably than darker ones due to limitations that have been built into the tools of the trade." `}
            image={{
              imgSrc: storyTwoImg,
              imgAlt: "Woman lieing down for photo",
              hasImgBackground: true,
              backgroundColor: "#F2DCD8",
              backgroundHigh: true,
            }}
            mediaLeft={false}
            textBreak={{ shouldBreak: true, breakAt: "image." }}
            isMediaSkinny={false}
            carousel={{ hasCarousel: false, slides: [] }}
          />
          <VideoSection />
          <Story
            isMobile={isMobile}
            text={`The emulsion used to coat film stock varies in its ability to accurately photograph darker skin tones, which is then compounded by the ways the colours are calibrated when photos are developed.
            
            Many of the same underlying biases have remained in digital photography. “Cameras that incorrectly expose skin tones are a troubling repeat of history, and play towards the erasure of entire groups of people,” Nguyen says. “They’re a prime example of companies not trying hard enough, creating a product that fails to perform its simplest purpose of correctly photographing an image.” `}
            image={{
              imgSrc: "",
              imgAlt: "",
              hasImgBackground: false,
              backgroundColor: "",
              backgroundHigh: false,
            }}
            mediaLeft={false}
            textBreak={{ shouldBreak: false, breakAt: "" }}
            isMediaSkinny={true}
            carousel={{ hasCarousel: true, slides: slides1 }}
          />
          <ColumnSection
            heading={"With eyes to the future"}
            text={
              "Google is working towards correcting this legacy with its new Pixel 6 smartphone, equipped with Real Tone, a camera calibrated to all skin tones."
            }
            images={futureImages}
          />
          <Story
            isMobile={isMobile}
            text={`The photoshoot that Nguyen and model Ragavi Ragavan took part in was done entirely on the Pixel 6. “We brought together 12 amazing talents with an incredible range of skin tones,” says Nguyen. “The Pixel 6 took away the need to readjust each image for skin tone, so I could focus on composing
            the image.
            
            “I see this new camera as such a great tool to open up the dialogue about inclusion from the lens - it reminds us to not be complacent about what an image can be. The technology is all there to be unlocked, it just requires that forethought during the developmental research phase.” `}
            image={{
              imgSrc: storyThreeImg,
              imgAlt: "Woman taking selfie",
              hasImgBackground: true,
              backgroundColor: "#DEECC0",
              backgroundHigh: true,
            }}
            mediaLeft={false}
            textBreak={{ shouldBreak: false, breakAt: "" }}
            isMediaSkinny={true}
            carousel={{ hasCarousel: false, slides: [] }}
          />

          <Testimonial
            testimonial={
              "“I see this new camera as such a great tool to open up the dialogue about inclusion from the lens.”"
            }
            person={"Daphne Nguyen"}
            image={{
              imgSrc: testimonialTwoImg,
              imgAlt: "woman posing for photo",
            }}
            backgroundColor={"#DEECC0"}
            imgLeft={true}
          />

          <Story
            isMobile={isMobile}
            text={`Leading this mission is Florian Koenigsberger, Google's Image Equity Lead in New York. With his own background in photography, Koenigsberger was well aware of the limitations of many cameras in portraying people with darker skin tones.

            He spent the better part of a year speaking to a cross-section of photographers, cinematographers and engineers to find out what gains could be made. “One of the biggest technical decisions we made was to listen to experts who don't build camera technology, but who specifically have built their careers around accurately and beautifully depicting and representing communities of colour,” he says. `}
            image={{
              imgSrc: storyFourImg,
              imgAlt: "Woman posing for photo",
              hasImgBackground: true,
              backgroundColor: "#DEE3E5",
              backgroundHigh: false,
            }}
            mediaLeft={false}
            textBreak={{ shouldBreak: false, breakAt: "" }}
            isMediaSkinny={true}
            carousel={{ hasCarousel: false, slides: [] }}
          />

          <Story
            isMobile={isMobile}
            text={`“On the one hand, building a camera is very technical; on the other it is very aesthetic and is fundamentally about seeing people.

            “You have to build that perspective back into the technology, otherwise you run the risk of completely disassociating from the actual point of the tool. In this case, that's to help people see themselves and to see others.”`}
            image={{
              imgSrc: "",
              imgAlt: "",
              hasImgBackground: false,
              backgroundColor: "",
              backgroundHigh: false,
            }}
            mediaLeft={true}
            textBreak={{ shouldBreak: false, breakAt: "" }}
            isMediaSkinny={false}
            carousel={{ hasCarousel: true, slides: slides1 }}
          />

          <LearnMore />
        </article>
      </main>
    </>
  );
};

export default App;
