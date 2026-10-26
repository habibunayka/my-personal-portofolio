import { useState } from 'react';
import { ImageOff } from 'lucide-react';

export default function AssetImage({ src, alt, className = '', hideUnavailable = false, ...props }) {
  const [failed, setFailed] = useState(false);
  const originalPlaceholder = src?.startsWith('https://placehold.co/');
  if (!src || failed || originalPlaceholder) {
    if (hideUnavailable) return null;
    return <div className={`media-unavailable ${className}`} role="img" aria-label={`${alt}: image not provided`}>
      <ImageOff size={28} aria-hidden="true" />
      <span>Image not provided</span>
    </div>;
  }
  return <img src={src} alt={alt} className={className} loading="lazy" decoding="async" onError={() => setFailed(true)} {...props} />;
}
