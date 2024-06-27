import "./ColumnSection.scss";

interface ImageObject {
  imgSrc: string;
  imgAlt: string;
}

interface ColumnSectionProps {
  heading: string;
  text: string;
  images: ImageObject[];
}
const ColumnSection = ({ heading, text, images }: ColumnSectionProps) => {
  const oneImage = images.length < 2;
  return (
    <section className="acknowledge-container">
      <main className="text-container">
        <h1>{heading}</h1>
        <p>{text}</p>
      </main>

      <div className={oneImage ? "image-single" : "image-container"}>
        {images.map((img, index) => {
          return <img key={index} src={img.imgSrc} alt={img.imgAlt} />;
        })}
      </div>
    </section>
  );
};

export default ColumnSection;
