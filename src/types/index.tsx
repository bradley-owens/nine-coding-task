import { RefObject } from 'react'

export type ImageProps = {
  src: string
  alt: string
  className?: string
  'data-scroll'?: boolean
  'data-scroll-speed'?: string
  index?: number
}

export type LocomotiveScrollProps = {
  locoScrollRef: RefObject<HTMLElement>
  children: React.ReactNode
}

export type CustomLinkProps = {
  href: string
  className: string
  children: React.ReactNode
}

export type ButtonProps = {
  href: string
  text: string
  bgColor?: string
  textColor?: string
}
