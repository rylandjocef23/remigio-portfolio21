export default function PageHeading({ title, intro }) {
  return (
    <div className="mb-10">
      <h1 className="text-gradient inline-block pb-1 text-[clamp(2rem,5vw,3rem)] font-bold leading-tight">
        {title}
      </h1>
      {intro && <p className="mt-3 max-w-xl text-mist">{intro}</p>}
    </div>
  );
}
