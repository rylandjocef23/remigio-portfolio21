import Card from './Card';

export default function ProjectCard({ title, image, alt, width, height, text, tags, links = [] }) {
  return (
    <Card
      as="article"
      className="group flex flex-col transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(8,13,28,0.6),0_0_40px_rgba(167,139,250,0.15)]"
    >
      <div className="aspect-video overflow-hidden bg-night">
        <img
          src={image}
          alt={alt}
          width={width}
          height={height}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="mt-2 text-[0.96rem] text-mist">{text}</p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies and topics">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-violet-400/30 bg-linear-to-br from-cyan-300/10 to-violet-400/15 px-3 py-1 text-xs font-semibold text-cyan-300"
            >
              {tag}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <ul className="mt-auto flex flex-wrap gap-5 pt-5">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cyan-300 underline-offset-4 hover:underline"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </Card>
  );
}
