import Link from "next/link";
import Image from "next/image";

export interface Project {
  slug: string;
  label: string;
  image: string;
  tagline: string;
  stats: Stat[];
  destinationLabel?: string;
}

interface Stat {
  label: string;
  value: string;
}

interface ProjectsCardProps {
  projects: Project;
}

const ProjectsCard = ({ projects }: ProjectsCardProps) => {
  return (
    <Link href={`/projects/${projects.slug}`}>
      <div className="bg-brand-surface rounded-2xl overflow-hidden">
        <div className="relative h-56 w-full">
          <Image
            src={projects.image}
            alt="contact us image office"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>

        <div className="px-4 py-6">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-brand-text mb-4">
            {projects.label}
          </h3>

          <div className="bg-white p-4 rounded-[10px] flex flex-wrap md:flex-nowrap justify-between items-center gap-2.5 md:gap-5">
            <div className="md:w-4/6">
              <h4 className="text-sm text-brand-text font-medium mb-1">
                {projects.destinationLabel}
              </h4>
              <p className="text-sm text-brand-muted font-medium">
                {projects.tagline}
              </p>
            </div>
            <div className="md:w-2/6">
              {projects.stats.slice(-1).map((stat: Stat) => (
                <div key={stat.label}>
                  <p className="text-brand-text font-medium text-sm">
                    {stat.value}
                  </p>
                  <p className="text-brand-muted text-xs">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectsCard;
