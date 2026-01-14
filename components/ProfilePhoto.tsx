'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function ProfilePhoto() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border border-border bg-section-tint flex items-center justify-center relative">
      {!imageError ? (
        <Image
          src="/photo.jpg"
          alt="Kathryn Harper"
          width={400}
          height={400}
          quality={100}
          className="w-full h-full object-cover"
          style={{ 
            objectPosition: '5% 5%',
            transform: 'scale(1.3)',
            filter: 'saturate(1.05)'
          }}
          priority
          unoptimized={true}
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-muted text-2xl font-heading">
          KH
        </div>
      )}
    </div>
  );
}
