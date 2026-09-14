import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 'master-thesis',
    category: 'Master’s research',
    title: 'LLM-based LiDAR augmentation',
    description: 'Exploring data augmentation for semantic segmentation in synthetic LiDAR point clouds.',
    stack: ['Python', 'LLMs', 'Computer vision'],
    url: 'https://github.com/vraj6198/Master-Thesis',
  },
  {
    id: 'enterprise',
    category: 'Personal project',
    title: 'Enterprise AI Platform',
    description: 'An HR workflow prototype combining cited document retrieval, approvals, and role-based access.',
    stack: ['FastAPI', 'Python', 'JWT'],
    url: 'https://github.com/vraj6198',
  },
];

export function ProjectStories() {
  return <section id="projects" className="content-section projects" aria-labelledby="projects-heading">
    <div className="section-heading"><h2 id="projects-heading">Projects</h2><a className="text-link" href="https://github.com/vraj6198?tab=repositories" target="_blank" rel="noreferrer">View all projects <ArrowUpRight size={15} /></a></div>
    <div className="project-list">
      {projects.map(project => <article className="project-row" id={project.id} key={project.id} data-reveal>
        <p className="project-category">{project.category}</p>
        <a className="project-title" href={project.url} target="_blank" rel="noreferrer">{project.title} <ArrowUpRight size={17} aria-hidden="true" /></a>
        <p className="project-description">{project.description}</p>
        <ul className="project-stack" aria-label="Technologies">{project.stack.map(item => <li key={item}>{item}</li>)}</ul>
      </article>)}
    </div>
  </section>;
}
