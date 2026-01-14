'use client';

import Image from 'next/image';
import { useState } from 'react';

interface CompanyIconProps {
  icon: string; // path to image file in /public/logos/
  className?: string;
}

export default function CompanyIcon({ icon, className = 'w-16 h-16' }: CompanyIconProps) {
  const [imageError, setImageError] = useState(false);

  // Handle missing icon
  if (!icon) {
    return (
      <span className="text-sm font-bold text-text">?</span>
    );
  }

  // Ensure the path starts with /logos/
  const iconPath = icon.startsWith('/') ? icon : `/logos/${icon}`;
  
  if (imageError) {
    return (
      <span className="text-sm font-bold text-text">
        {icon.split('/').pop()?.charAt(0).toUpperCase() || '?'}
      </span>
    );
  }
  
  // Determine width/height based on className
  const isLarge = className.includes('w-32');
  const imgWidth = isLarge ? 128 : 64;
  const imgHeight = isLarge ? 128 : 64;
  
  return (
    <Image
      src={iconPath}
      alt=""
      width={imgWidth}
      height={imgHeight}
      className={`${className} object-contain`}
      onError={() => setImageError(true)}
    />
  );
}
