import { Image } from '@/components/ui/image';

export default function ServiceRow({ index, title, copy, items, image, imageAlt, reversed }) {
  return (
    <article
      className={`group grid items-center gap-10 border-b border-border py-14 last:border-0 lg:grid-cols-12 lg:gap-14 lg:py-20 ${
        reversed ? '' : ''
      }`}
    >
      <div className={`lg:col-span-6 ${reversed ? 'lg:order-2 lg:col-start-7' : ''}`}>
        <div className="overflow-hidden bg-secondary">
          <Image
            src={image}
            alt={imageAlt}
            className="aspect-[4/3] w-full grayscale transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
          />
        </div>
      </div>

      <div className={`lg:col-span-5 ${reversed ? 'lg:order-1 lg:col-start-1' : 'lg:col-start-8'}`}>
        <span className="label-mono text-accent">{index}</span>
        <h3 className="mt-5 font-heading text-[clamp(1.9rem,3vw,2.75rem)] leading-tight tracking-[-0.01em]">
          {title}
        </h3>
        <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground">{copy}</p>
        <ul className="mt-7 flex flex-wrap gap-2">
          {items.map((item) => (
            <li key={item} className="label-mono border border-border px-3 py-1.5 text-muted-foreground">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}