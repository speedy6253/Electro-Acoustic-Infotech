import React from 'react';
import eaiplLogoImg from '../assets/branding/eaipl-logo.jpg';

interface EaiplLogoProps {
  className?: string;
  alt?: string;
}

export const EaiplLogo: React.FC<EaiplLogoProps> = ({
  className = 'h-[88px] sm:h-[94px] lg:h-[100px] w-auto',
  alt = 'EAIPL - Electro Acoustic Infotech',
}) => {
  return (
    <img
      src={eaiplLogoImg}
      alt={alt}
      className={`object-contain max-w-full ${className}`}
    />
  );
};
