import React, { FC, ImgHTMLAttributes } from 'react';
import { BaseURL } from '../../api/config';
import { ErrorImage } from '../../Layout/app/Const';
import useImageError from '../../Hooks/useImageError';

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  className?: string;
  isBaseURL?: boolean;
}

const Image: FC<ImageProps> = ({ src, className = '', isBaseURL = false, ...props }) => {
  const handleError = useImageError;
  const imageUrl = isBaseURL ? BaseURL + src : src;

  return (
    <img
      src={imageUrl || ErrorImage}
      className={className}
      onError={handleError}
      alt={src}
      loading='lazy'
      {...props}
    />
  );
};

export default Image;
