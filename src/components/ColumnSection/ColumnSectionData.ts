import acknowledgeImgOne from "../../assets/images/desktop/acknowledgeImg_one.png";
import acknowledgeImgTwo from "../../assets/images/desktop/acknowledgeImg_two.png";
import acknowledgeImgThree from "../../assets/images/desktop/acknowledgeImg_three.png";
import futureImgOne from "../../assets/images/desktop/columnSection_four.png";

export type ColumnSectionData = {
  [key: number]: {
    heading: string;
    text: string;
    images: { imgSrc: string; imgAlt: string }[];
  };
};

export const columnSectionData: ColumnSectionData = {
  1: {
    heading: "Acknowledging the past",
    text: "Representing diversity is just one part of the story. As photographer Daphne Nguyen points out, technology also has a role to play in how images are photographed.",
    images: [
      { imgSrc: acknowledgeImgThree, imgAlt: "Man smiling for photo" },
      { imgSrc: acknowledgeImgTwo, imgAlt: "Woman smiling for photo" },
      { imgSrc: acknowledgeImgOne, imgAlt: "Man crossing arms for photo" },
    ],
  },
  2: {
    heading: "With eyes to the future",
    text: "Google is working towards correcting this legacy with its new Pixel 6 smartphone, equipped with Real Tone, a camera calibrated to all skin tones.",
    images: [
      { imgSrc: futureImgOne, imgAlt: "Man smiling for photo on grass" },
    ],
  },
};
