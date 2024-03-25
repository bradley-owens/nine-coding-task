interface HeadingProps {
  heading: string;
  subheading: string;
}

const CustomLink: React.FC<HeadingProps> = ({ heading, subheading }) => {
  const markup = { __html: subheading };
  return (
    <h3 className="text-dark-blue adoha-reg text-clampHeading leading-tight sm:py-[4rem] py-10">
      <span className="text-clampHeading3 uppercase text-grey-time section-decoration tracking-widest lato-reg block sm:mb-[5rem] mb-10">
        {heading}
      </span>{" "}
      <span className="reader-only"> - </span>
      <span dangerouslySetInnerHTML={markup}></span>
    </h3>
  );
};

export default CustomLink;
