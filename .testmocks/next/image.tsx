export default function Image({ src, alt, ...props }: { src: string; alt: string; [key: string]: unknown }) {
  return <img src={src} alt={alt} {...(props as React.ImgHTMLAttributes<HTMLImageElement>)} />
}
