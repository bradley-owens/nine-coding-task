import "./Testimonial.scss";

type ImagetType = {
  imgSrc: string;
  imgAlt: string;
};

interface TestimonialProps {
  testimonial: string;
  person: string;
  image: ImagetType;
  backgroundColor: string;
  imgLeft: boolean;
}

const Testimonial = ({
  testimonial,
  person,
  image,
  backgroundColor,
  imgLeft,
}: TestimonialProps) => {
  return (
    <section
      className={
        imgLeft ? "testimonial-container_reverse" : "testimonial-container"
      }
      style={{ backgroundColor: backgroundColor }}
    >
      <main className={"testimonial"}>
        <h1>{testimonial}</h1>
        <p> - {person}</p>
      </main>
      <img src={image.imgSrc} alt={image.imgAlt} />
    </section>
  );
};

export default Testimonial;
