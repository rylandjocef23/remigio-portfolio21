import Container from '../components/Container';
import PageHeading from '../components/PageHeading';
import ProjectCard from '../components/ProjectCard';
import usePageTitle from '../hooks/usePageTitle';
import { projects } from '../data/projects';

export default function Projects() {
  usePageTitle('Projects');

  return (
    <div className="bg-linear-to-b from-transparent via-cyan-300/[0.06] to-transparent">
      <Container className="py-16 md:py-24">
        <PageHeading
          title="Featured systems"
          intro="A collection of my projects, including my individual proposed system, group-proposed systems, PWAs, and academic work."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </Container>
    </div>
  );
}
