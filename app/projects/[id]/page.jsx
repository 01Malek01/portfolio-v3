import { notFound } from 'next/navigation';
import { getProjectBySlug } from '@/lib/projects';
import ProjectDetailClient from './ProjectDetailClient';

export async function generateStaticParams() {
  const { getAllProjects } = await import('@/lib/projects');
  return getAllProjects().map((p) => ({ id: p.slug }));
}

export default function Page({ params }) {
  const project = getProjectBySlug(params.id);
  if (!project) notFound();
  return <ProjectDetailClient project={project} />;
}
