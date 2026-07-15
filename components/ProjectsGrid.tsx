import Link from "next/link";
import siteConfig from "@/siteConfig";

const ProjectsGrid = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-[10px] font-bold tracking-widest uppercase text-stone-400 mb-4">
            Projects
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-3">
            Exclusive properties in Egypt's top locations
          </h2>
          <p className="text-stone-400 text-sm max-w-lg mx-auto">
            Our carefully selected houses and apartments combine first-class
            architecture with the best location and the highest living comfort.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {siteConfig.projects.map((pro) => (
            <Link
              key={pro.slug}
              href={`/projects/${pro.slug}`}
              className="group relative h-48 overflow-hidden"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${pro.image})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-xs font-bold tracking-[0.2em] uppercase">
                  {pro.label}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;
