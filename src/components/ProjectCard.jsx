import { ArrowRight } from 'lucide-react';
import AssetImage from './AssetImage';

export default function ProjectCard({ title, subtitle, image, stacks = [], delay = 0, onOpen }) {
  return (
    <article data-reveal="up" style={{ '--reveal-delay': `${delay}ms` }} className="project-card group relative rounded-[28px] border-4 border-primary bg-white p-4 shadow-[0_8px_0_#FFA113] transition duration-300">
      <div className="overflow-hidden rounded-[20px]">
        <AssetImage src={image} alt={title} className="project-media transition duration-300 group-hover:scale-[1.025]" />
      </div>
      <div className="mt-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {stacks.map((stack, i) => <span key={i} className="rounded-full bg-primary px-3 py-1 text-xs font-bold font-baloo text-amber-950 shadow">{stack}</span>)}
        </div>
        <div className="flex items-end justify-between gap-3">
          <div className="project-caption">
            <h3 className="font-bold text-xl font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">{title} :</h3>
            <p className="text-base font-semibold font-baloo text-primary text-stroke-white-md drop-shadow-[0_4px_4px_rgba(255,161,19,0.63)]">{subtitle}</p>
          </div>
          <button type="button" aria-label={`Show details for ${title}`} aria-haspopup="dialog" onClick={onOpen} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-white hover:shadow-md">
          <ArrowRight className="transition-transform duration-300 group-hover:translate-x-0.5" size={18} aria-hidden="true" />
          </button>
        </div>

      </div>
    </article>
  );
}
