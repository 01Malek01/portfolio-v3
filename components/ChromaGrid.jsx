import ProjectCard from './ProjectCard';

function slugify(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
}

const ChromaGrid = ({ items, className = '' }) => {
  const data = items?.length ? items : [];

  return (
    <div className={`relative w-full h-full flex flex-wrap justify-center items-start gap-6 py-5 ${className}`}>
      {data.map((c, i) => (
        <article
          key={i}
          className="group relative flex w-[30rem] rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer"
        >
          <ProjectCard
            projectTitle={c.name}
            projectDescription={c.description}
            projectImage={c.image}
            projectImages={c.images}
            projectSlug={c.slug || slugify(c.name)}
            liveLink={c?.liveLink}
            githubLink={c?.githubLink}
            githubLink2={c?.githubLink2}
          />
        </article>
      ))}
    </div>
  );
};

export default ChromaGrid;
