interface ButtonProps {
  href: string;
  text: string;
  bgColor?: string;
  textColor?: string;
}

const ButtonTwo: React.FC<ButtonProps> = ({
  href,
  text,
  bgColor = "black",
  textColor = "white",
}) => {
  return (
    <a
      href={href}
      className={`cursor-pointer sm:w-[267px] w-[240px] rounded-full h-[65px] py-4 px-4 group relative overflow-hidden ${bgColor}  text-lg shadow mx-auto flex items-center justify-center`}
      role="button"
      target="_blank"
      rel="sponsored noopener noreferrer"
    >
      <div
        className={`absolute inset-0 w-0  transition-all bg-white duration-[250ms] ease-out ${textColor} group-hover:w-full`}
      ></div>
      <span className="text-center relative text-white group-hover:text-black mx-auto block">
        <h3 className="inline sm:text-clampHeading4 uppercase gotham-bold pb-0">
          {text}
        </h3>
      </span>
    </a>
  );
};

export default ButtonTwo;
