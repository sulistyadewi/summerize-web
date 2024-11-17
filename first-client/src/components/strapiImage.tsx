import Image from "next/image";
import { getStrapiMedia } from "@/lib/utils";

interface strapiImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

export function StrapiImageBg({
  src,
  alt,
  width,
  height,
  className,
}: Readonly<strapiImageProps>) {
  const imageUrl = getStrapiMedia(src);
  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}
