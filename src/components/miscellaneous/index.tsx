import { ImageProps, CustomLinkProps, ButtonProps } from '../../types'

export const Image: React.FC<ImageProps> = (props) => {
  return <img {...props} />
}

export const CustomLink = ({ href, className = '', children }: CustomLinkProps) => {
  return (
    <>
      {' '}
      <a href={href} className={className} target="_blank" rel="sponsored noopener noreferrer">
        {children}
      </a>{' '}
    </>
  )
}

export const Button: React.FC<ButtonProps> = ({
  href,
  text,
  bgColor = 'black',
  textColor = 'white',
}) => {
  return (
    <a
      href={href}
      className={`mb:w-[240px] max-w-[200px] py-4 px-4 ${bgColor} hover:opacity-90 ${textColor} z-10 font-bold text-center block sm:ml-0 mx-auto`}
      target="_blank"
      rel="sponsored noopener noreferrer">
      <p className="inline sm:text-24 uppercase">{text}</p>
    </a>
  )
}
