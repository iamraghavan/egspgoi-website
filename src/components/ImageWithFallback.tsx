"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

interface ImageWithFallbackProps extends ImageProps {
  fallbackSrc: string;
  fallbackClassName?: string;
}

export const ImageWithFallback = (props: ImageWithFallbackProps) => {
  const { src, fallbackSrc, className, fallbackClassName, ...rest } = props;
  const [error, setError] = useState(false);

  const handleError = () => {
    setError(true);
  };

  return (
    <Image
      src={error ? fallbackSrc : src}
      onError={handleError}
      className={cn(className, error && fallbackClassName)}
      {...rest}
    />
  );
};

    