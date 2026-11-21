import { useOutletContext } from 'react-router-dom';
import Button from '../components/Button';
import Container from '../components/Container';
import Reveal from '../components/Reveal';
import useInView from '../hooks/useInView';
import usePageTitle from '../hooks/usePageTitle';

export default function Home() {
  usePageTitle('');
  const { ready } = useOutletContext();
  const [meetRef, meetInView] = useInView(0.3);

  return (
    <>
      {/* First screen: a short teaser that invites the visitor to keep scrolling. */}
      <section aria-label="Introduction" className="flex min-h-[calc(100svh-4.25rem)]">
        <Container className="flex flex-col justify-between gap-16 py-16 md:py-24">
          <div className="my-auto">
            <p className="max-w-[15em] font-display text-[clamp(2rem,5.2vw,4rem)] font-bold leading-[1.12] tracking-tight">
              <Reveal as="span" show={ready} className="block text-balance">
                Every website starts with someone asking how it works.
              </Reveal>
              <Reveal as="span" show={ready} delay={250} className="text-gradient block text-balance">
                I never stopped asking.
              </Reveal>
            </p>

            <Reveal as="p" show={ready} delay={600} className="mt-8 max-w-[34em] text-lg text-mist md:text-xl">
              I'm curious about how things work, and I like turning that curiosity into websites and
              systems people can actually use.
            </Reveal>
          </div>

          <Reveal show={ready} delay={1100} className="self-start">
            <a href="#meet" className="inline-flex flex-col items-start gap-3 text-[0.95rem] font-semibold text-mist transition-colors hover:text-white">
              Scroll to meet me
              <span className="relative block h-16 w-0.5 overflow-hidden rounded-sm bg-violet-400/20" aria-hidden="true">
                <span className="absolute inset-0 -translate-y-full bg-brand motion-safe:animate-cue" />
              </span>
            </a>
          </Reveal>
        </Container>
      </section>

      {/* Second screen: the profile introduction. */}
      <section
        id="meet"
        ref={meetRef}
        className="flex min-h-[calc(100svh-4.25rem)] items-center border-t border-violet-400/20 py-20 md:py-28"
      >
        <Container className="grid items-center gap-12 md:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)] md:gap-16">
          <div>
            <h1 className="font-display text-[clamp(2.4rem,5.6vw,4.3rem)] font-extrabold leading-[1.06] tracking-[-0.035em]">
              <Reveal as="span" show={meetInView} className="block">
                Hi, I'm Ryland!
              </Reveal>
              <Reveal as="span" show={meetInView} delay={150} className="block">
                <span className="text-gradient block bg-[length:220%_100%] motion-safe:animate-sheen">
                  I build systems &amp; experiences.
                </span>
              </Reveal>
            </h1>

            <Reveal as="p" show={meetInView} delay={350} className="mt-7 max-w-xl text-[clamp(1.05rem,2vw,1.25rem)] text-mist">
              BSIT Student | Specialized Developer | IT Support Specialist. I specialize in clean,
              event-driven web applications, and modern UI design.
            </Reveal>

            <Reveal show={meetInView} delay={500} className="mt-9 flex flex-wrap gap-3.5">
              <Button to="/projects">Explore my work</Button>
              <Button to="/contact" variant="ghost">Contact me</Button>
            </Reveal>
          </div>

          <Reveal show={meetInView} delay={300} className="w-[min(70%,240px)] justify-self-start md:w-full md:max-w-75 md:justify-self-center">
            <div className="aspect-4/5 overflow-hidden rounded-[28px] bg-brand p-0.75 shadow-[0_0_70px_rgba(167,139,250,0.25)]">
              <img
                src="/images/profile.jpg"
                alt="Portrait of Ryland Jocef Remigio"
                width="768"
                height="768"
                className="h-full w-full rounded-[25px] object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
