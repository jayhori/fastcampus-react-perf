import { useState } from "react"

type Props = {
  src: string
  alt: string
  lazy?: boolean
}

const SmartImage = ({src, alt, lazy = false}: Props) => {
  const [imgSrc, setImgSrc] = useState(src)
  const fallbackImage = '/fallback.webp'
  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackImage)}
      loading={lazy ? "lazy": "eager"}
      className="landscape-ratio-image-with-background"
    />
  )
}

export default SmartImage
