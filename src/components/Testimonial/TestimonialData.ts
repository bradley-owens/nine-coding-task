import testimonialOneImg from "../../assets/images/desktop/testimonialOneImg.png";
import testimonialTwoImg from "../../assets/images/desktop/testimonialTwoImg.png";

export type TestimonialData = {
  [key: number]: {
    testimonial: string;
    person: string;
    image: {
      imgSrc: string;
      imgAlt: string;
    };
    backgroundColor: string;
    imgLeft: boolean;
  };
};

export const testimonialData: TestimonialData = {
  1: {
    testimonial:
      '"I was looking for people that look like me - it was difficult."',
    person: "Ragavi Ragavan",
    image: {
      imgSrc: testimonialOneImg,
      imgAlt: "woman posing for photo",
    },
    backgroundColor: "#ffe1c3",
    imgLeft: false,
  },
  2: {
    testimonial:
      "“I see this new camera as such a great tool to open up the dialogue about inclusion from the lens.”",
    person: "Daphne Nguyen",
    image: {
      imgSrc: testimonialTwoImg,
      imgAlt: "woman posing for photo",
    },
    backgroundColor: "#DEECC0",
    imgLeft: true,
  },
};
