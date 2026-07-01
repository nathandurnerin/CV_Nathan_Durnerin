import type { Project } from "@/types/project";

interface HeroProps {
  project: Project;
}

const Hero = ({ project }: HeroProps) => (
  <header className="px-6 pt-32 pb-20">
    <div className="mx-auto max-w-6xl">
      <div className="mb-10">
        <span className="inline-flex rounded-full bg-[#00F5A0] px-6 py-2 text-sm font-semibold text-primary">
          {project.type}
        </span>

        <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight tracking-[-0.04em] text-primary md:text-7xl">
          {project.title}
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-primary/65">
          {project.description}
        </p>
      </div>

      <div className="relative">

        <div className="relative overflow-hidden rounded-md bg-white p-4 shadow-[0_22px_60px_rgba(0,0,0,0.18)]">
          <div className="mb-4 flex items-center justify-between border-b border-black/10 pb-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <p className="text-sm font-medium text-primary/40">
              {project.slug}
            </p>
          </div>

          <img
            src={project.image}
            alt={project.title}
            className="h-[300px] w-full rounded-sm object-cover md:h-[560px]"
          />
        </div>
      </div>
    </div>
  </header>
);

export default Hero;