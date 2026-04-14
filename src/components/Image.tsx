
interface ImageProps  {
  src: string;
  className?: string;
}


export default function Image({ className, src, ...props}: ImageProps) {
  return <img className={className} src={src} {...props} />;
}
