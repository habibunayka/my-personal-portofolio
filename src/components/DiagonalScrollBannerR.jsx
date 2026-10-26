import { useRef } from 'react';
import StarIcon from './icon/StarIcon';
import useBannerMotion from '../hooks/useBannerMotion';

export default function DiagonalScrollBannerR() {
  const trackRef = useRef(null);
  useBannerMotion(trackRef, 1);
  return <div className="diagonal-banner" aria-hidden="true">
    <div className="diagonal-band"><div ref={trackRef} className="diagonal-track">
      {[0, 1, 2].map(group => <div className="diagonal-group" key={group}>
        {Array.from({ length: 10 }, (_, i) => <span key={i} className="font-kumbh"><StarIcon />Fullstack Developer</span>)}
      </div>)}
    </div></div>
  </div>;
}
