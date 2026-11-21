import Card from '../components/Card';
import Container from '../components/Container';
import PageHeading from '../components/PageHeading';
import usePageTitle from '../hooks/usePageTitle';
import { skillGroups } from '../data/skills';
import { site } from '../data/site';

export default function About() {
  usePageTitle('About');

  return (
    <div className="bg-linear-to-b from-transparent via-violet-400/[0.07] to-transparent">
      <Container className="py-16 md:py-24">
        <PageHeading title="About me" />

        <Card className="p-6 md:p-10">
          <p className="max-w-[68ch] text-lg text-mist">
            I'm {site.name}, an optimistic and specialized developer passionate about creating
            websites and systems using HTML, JavaScript, and CSS. I enjoy turning ideas into
            thoughtful, functional, and engaging digital experiences.
          </p>

          <h2 className="relative mt-9 pb-3 text-xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r after:from-cyan-300/60 after:via-violet-400/30 after:to-transparent">
            Background
          </h2>
          <p className="mt-4 max-w-[68ch] text-mist">
            I'm a BSIT student at the {site.school} in Olongapo City. My class projects, like
            MindCare Hub, are where I practice building complete systems from idea to working app.
          </p>

          <h2 className="relative mt-9 pb-3 text-xl font-semibold after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-linear-to-r after:from-cyan-300/60 after:via-violet-400/30 after:to-transparent">
            Tech stack &amp; expertise
          </h2>
          <div className="mt-6 grid gap-8 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <section key={group.title}>
                <h3 className="text-gradient mb-3 inline-block pb-0.5 text-lg font-semibold">{group.title}</h3>
                <ul className="text-mist">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="relative mb-1.5 pl-5 before:absolute before:left-0 before:top-[0.65em] before:size-1.75 before:rounded-full before:bg-brand"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </Card>
      </Container>
    </div>
  );
}
