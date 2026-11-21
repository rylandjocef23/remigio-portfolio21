import Button from '../components/Button';
import Container from '../components/Container';
import usePageTitle from '../hooks/usePageTitle';

export default function NotFound() {
  usePageTitle('Page not found');

  return (
    <Container className="flex min-h-[calc(100svh-14rem)] flex-col items-start justify-center py-16">
      <p className="text-gradient font-display text-[clamp(5rem,18vw,9rem)] font-extrabold leading-none" aria-hidden="true">
        404
      </p>
      <h1 className="mt-4 text-3xl font-bold">This page doesn't exist</h1>
      <p className="mt-3 max-w-md text-lg text-mist">
        The link may be broken or the page may have moved. Head back home or see what I've built.
      </p>
      <div className="mt-8 flex flex-wrap gap-3.5">
        <Button to="/">Back to home</Button>
        <Button to="/projects" variant="ghost">View projects</Button>
      </div>
    </Container>
  );
}
