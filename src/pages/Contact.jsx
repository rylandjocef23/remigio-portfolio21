import Card from '../components/Card';
import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import PageHeading from '../components/PageHeading';
import usePageTitle from '../hooks/usePageTitle';
import { site, socialLinks } from '../data/site';

const linkClass = 'text-cyan-300 underline-offset-4 hover:underline';

const details = [
  {
    label: 'Email',
    value: (
      <a className={linkClass} href={`mailto:${site.email}`}>
        {site.email}
      </a>
    ),
  },
  ...socialLinks.map((link) => ({
    label: link.label,
    value: (
      <a className={linkClass} href={link.href} target="_blank" rel="noopener noreferrer">
        {link.href.replace(/^https?:\/\//, '')}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    ),
  })),
  { label: 'Location', value: site.location },
];

export default function Contact() {
  usePageTitle('Contact');

  return (
    <div className="bg-linear-to-b from-transparent via-fuchsia-300/[0.07] to-violet-500/10">
      <Container className="py-16 md:py-24">
        <PageHeading title="Let's connect" />

        <div className="grid items-start gap-6 md:grid-cols-[1fr_1.1fr]">
          <Card className="p-6 md:p-10">
            <h2 className="text-2xl font-semibold">Email Me!</h2>
            <p className="mt-3 text-lg text-mist">
              I'm always open to conversations about website and system development, UI/UX design,
              creative projects, or new opportunities. Feel free to reach out if you'd like to
              collaborate or simply say hello.
            </p>

            <dl className="mt-7 grid gap-3">
              {details.map((item) => (
                <div key={item.label} className="rounded-[10px] border border-slate-400/15 bg-night/55 px-4 py-3">
                  <dt className="text-gradient inline-block font-bold">{item.label}</dt>
                  <dd className="break-words">{item.value}</dd>
                </div>
              ))}
            </dl>
          </Card>

          <ContactForm />
        </div>
      </Container>
    </div>
  );
}
